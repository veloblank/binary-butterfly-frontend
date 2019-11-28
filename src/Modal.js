class Modal {
  constructor() {

  }

  addModalListeners() {
    let modal = document.getElementById('signin-modal');
    let openModalBtn = document.getElementById('signin-button');
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



}

export default Modal;