import { students } from "./data/students.js";

const tblStudentsTbody = document.querySelector("#tblStudents tbody");

const loadData = () => {
  let strHtml = "";

  students.forEach((student, index) => {
    strHtml += `<tr>
        <th scope="row">${index + 1}</th>
        <td>${student.name}</td>
        <td class="score">${student.point}</td>
        <td><button class="btn-delete btn btn-danger">🗑️</button></td>
      </tr>`;
  });

  tblStudentsTbody.innerHTML = strHtml;
};

loadData();

/* EVENTS */
document.getElementById("btnShowLowScores").addEventListener("click", () => {
  const lastTDs = tblStudentsTbody.querySelectorAll("tr td.score");

  lastTDs.forEach((td, index) => {
    if (td.innerText < 50) {
      tblStudentsTbody
        .querySelector(`tr:nth-child(${index + 1})`)
        .classList.toggle("bg-danger");
    }
  });
});

document.querySelectorAll(".btn-delete").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.stopPropagation();
    const trEl = e.target.closest("tr");
    const name = trEl.querySelector("td").innerText;

    const result = confirm(`Are you sure to delete ${name}?`);
    if (result) {
      trEl.remove();
    }
  });
});

tblStudentsTbody.querySelectorAll("tr").forEach((tr) => {
  tr.addEventListener("click", (e) => {
    e.target.closest("tr").classList.toggle("table-info");
  });
});

/* EVENTS */
