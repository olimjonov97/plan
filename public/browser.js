console.log("Frontend JS ishga tushdi");

function itemTemplate(item) {
  //   console.log("item value", item);
  return ` <li
    class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
    <span class="item-text"> ${item.reja}</span>
    <div>
    <button
    data-id="${item._id}"
    class="edit-me btn btn-secondary btn-sm mr-1">  
    O'zgartirish
    </button >
    <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">
    O'chirish
    </button>
    </div>
    </li>`;
}
let createField = document.getElementById("create-field");
// console.log("createField:", createField);
// console.log(document.getElementById("create-form"));

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();
  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));

      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log(err);
      console.log("Iltimos yana harakat qiling");
    });
});

document.addEventListener("click", function (e) {
  //delete oper

  console.log(e.target);
  if (e.target.classList.contains("delete-me")) {
    if (confirm("Aniq o'chirmoqchimisiz")) {
      axios
        .post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("iltimos qaytadan delete qiling");
        });
    }
  }
  //edit-oper
  if (e.target.classList.contains("edit-me")) {
    alert("siz edit-me tugmasini bosdingiz");
  }
});
