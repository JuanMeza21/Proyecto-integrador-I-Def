const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector(".li-container ul"); // Selecting the ul within the section
const empty = document.querySelector(".empty");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn(li)); // Pass the created <li> to addDeleteBtn function
    ul.appendChild(li); // Appending the new task to the ul within the section

    input.value = "";
    empty.style.display = "none";
  }
});

function addDeleteBtn(li) {
  const deleteBtn = document.createElement("button");
  const creationTimeSpan = document.createElement("span");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  // Get current date and time
  const creationDate = new Date();
  creationTimeSpan.textContent = `${creationDate.toLocaleString()}`;

  deleteBtn.addEventListener("click", (e) => {
    ul.removeChild(li); // Remove the parent <li> instead of the button's parent

    const items = document.querySelectorAll(".li-container ul li"); // Selecting all li elements within the ul

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });

  const container = document.createElement("div");
  container.appendChild(deleteBtn);
  container.appendChild(creationTimeSpan);

  return container;
}


const header = document.querySelector(".calendar h3");
const dates = document.querySelector(".dates");
const navs = document.querySelectorAll("#prev, #next");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let date = new Date();
let month = date.getMonth();
let year = date.getFullYear();

function renderCalendar() {
  const start = new Date(year, month, 1).getDay();
  const endDate = new Date(year, month + 1, 0).getDate();
  const end = new Date(year, month, endDate).getDay();
  const endDatePrev = new Date(year, month, 0).getDate();

  let datesHtml = "";

  for (let i = start; i > 0; i--) {
    datesHtml += `<li class="inactive">${endDatePrev - i + 1}</li>`;
  }

  for (let i = 1; i <= endDate; i++) {
    let className =
      i === date.getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
        ? ' class="today"'
        : "";
    datesHtml += `<li${className}>${i}</li>`;
  }

  for (let i = end; i < 6; i++) {
    datesHtml += `<li class="inactive">${i - end + 1}</li>`;
  }

  dates.innerHTML = datesHtml;
  header.textContent = `${months[month]} ${year}`;
}

navs.forEach((nav) => {
  nav.addEventListener("click", (e) => {
    const btnId = e.target.id;

    if (btnId === "prev" && month === 0) {
      year--;
      month = 11;
    } else if (btnId === "next" && month === 11) {
      year++;
      month = 0;
    } else {
      month = btnId === "next" ? month + 1 : month - 1;
    }

    date = new Date(year, month, new Date().getDate());
    year = date.getFullYear();
    month = date.getMonth();

    renderCalendar();
  });
});

renderCalendar();