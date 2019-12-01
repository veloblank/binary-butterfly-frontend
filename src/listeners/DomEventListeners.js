function accountListeners() { }

function handleOnLogout(app) {
  this.state.user = "";
}

function createAccountModalListeners() {
  let modal = document.getElementById('create-account-modal');
  let openModalBtn = document.getElementById('create-account-button');
  let closeModalBtn = document.getElementById('modal-close-btn');
  openModalBtn.addEventListener('click', openModal);
  closeModalBtn.addEventListener('click', closeModal);

  //Outside 'click' event of modal
  window.addEventListener('click', clickOutside);

  function openModal() {
    modal.style.display = "block";
  }

  function closeModal() {
    modal.style.display = "none";
  }

  function clickOutside(e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  }
}


function onFormSubmission(app) {
  let submittedForm = document.getElementById('create-account-form');

  let formData = {
    email: submittedForm.elements[0].value,
    username: submittedForm.elements[1].value
  }

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  fetch('http://localhost:3050/api/v1/users', configObj)
    .then(response => response.json())
    .then(data => {
      if (data.status !== 201) {
        let parent = document.createElement('ul');
        let li = "";
        data.message.errors.forEach(error => {
          document.getElementById('account-errors').innerHTML = "";
          li += `<li>${error}</li>`;
          parent.innerHTML = li;
          return document.getElementById('account-errors').append(parent);
        });
      } else {
        app.state.user = data.user;
        exitModal();
      }
    });

}

function exitModal() {
  let modal = document.getElementById('create-account-modal')
  modal.style.display = "none";
}


export {
  createAccountModalListeners,
  onFormSubmission
}