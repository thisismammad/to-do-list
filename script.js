const list = document.querySelector("#list");
const addInput = document.querySelector("#addInput");
const addBtn = document.querySelector("#addBtn");
const search = document.querySelector("#search");

list.addEventListener("click", (e) => {
  if (e.target.nodeName == "I") {
    e.target.parentNode.remove();
    if (list.children.length == 0) {
      let message = document.createElement("h4");
      message.style.textAlign = "center";
      message.innerText = "list is empty!";
      message.id = "message";
      list.appendChild(message);
    }
  }
});

addBtn.addEventListener("click", () => {
  insert();
});

document.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    insert();
  }
});

function insert() {
  if (addInput.value) {
    const message = document.querySelector("#message");
    if (message) message.remove();

    let newItem = createListitem(addInput.value);
    list.insertBefore(newItem, list.firstChild);
    addInput.value = "";
  }
}

function createListitem(text) {
  const newItem = document.createElement("li");
  const span = document.createElement("span");
  const i = document.createElement("i");
  span.innerText = text;
  i.className = "fa-solid fa-trash";
  newItem.appendChild(span);
  newItem.appendChild(i);
  return newItem;
}

search.addEventListener("input", (e) => {
  listItems = Array.from(list.children).forEach((li) => {
    const message = document.querySelector("#message");
    if (!message && li.nodeName == "LI") {
      if (
        li
          .querySelector("span")
          .innerText.toLowerCase()
          .includes(e.target.value.toLowerCase())
      ) {
        li.style.display = "flex";
        checkListEmpty();
      } else {
        li.style.display = "none";
        checkListEmpty();
      }
    }
  });
});

function checkListEmpty() {
  let flag = false;
  listItems = Array.from(list.children).forEach((li) => {
    if (li.nodeName == "LI" && li.style.display == "flex") {
      flag = true;
    }
  });
  if (flag == false) {
    const emm = document.querySelector("#message-empty");
    if (!emm) {
      let message = document.createElement("h4");
      message.style.textAlign = "center";
      message.innerText = "Not found!";
      message.id = "message-empty";
      list.appendChild(message);
    }
  } else {
    const emm = document.querySelector("#message-empty");
    if (emm) emm.remove();
  }
}
