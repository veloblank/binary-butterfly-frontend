function fetchErrorHandler(data) {
  let parent = document.createElement("ul");
  let li = "";
  data.message.errors.forEach(error => {
    document.getElementById("account-errors").innerHTML = "";
    li += `<li>${error}</li>`;
    parent.innerHTML = li;
    return document.getElementById("account-errors").append(parent);
  });
}

export default fetchErrorHandler;