const tjänsterDropDown = getElement("data-tjänster-drop-down");
const städhemsidaDropDown = getElement("data-om-städhemsida-drop-down");
const attKundDropDown = getElement("data-att-vara-kund-drop-down");

tjänsterDropDown.addEventListener("click", (e) => {
  console.log("Hell");
  e.stopPropagation();
  getElement("data-submenu-tjänster").classList.toggle("is-active");
});

städhemsidaDropDown.addEventListener("click", (e) => {
  console.log("Hell");
  e.stopPropagation();
  getElement("data-submenu-om-städhemsida").classList.toggle("is-active");
});

attKundDropDown.addEventListener("click", (e) => {
  console.log("Hell");
  e.stopPropagation();
  getElement("data-submenu-att-vara-kund").classList.toggle("is-active");
});

const questions = document.querySelectorAll(".row");

questions.forEach((question) => {
  console.log(question.firstElementChild);
  question.addEventListener("click", () => {
    question.firstElementChild.classList.toggle("open");

    if (question.lastElementChild.style.display === "none") {
      console.log("BLOCK");
      question.lastElementChild.style.display = "block";
    } else {
      console.log("NONE");
      question.lastElementChild.style.display = "none";
    }
  });
});

const menu = document.querySelector(".menu-trigger");

menu.addEventListener("click", () => {
  menu.classList.toggle("is-active");
  document.querySelector(".menu-wrapper").classList.toggle("is-active");
  document.querySelector(".top").classList.toggle("is-active");
  document.querySelector(".mobile-menu-btns").classList.toggle("is-active");
});

const trigger = document.querySelector(".trigger");
if (trigger) {
  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    e.preventDefault();
    document.getElementById("cypress-roll-up").classList.toggle("active");
  });
}

function getElement(data) {
  return document.querySelector(`[${data}]`);
}
