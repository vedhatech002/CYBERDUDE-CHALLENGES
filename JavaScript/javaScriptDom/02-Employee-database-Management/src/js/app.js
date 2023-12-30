//imports functions
//import from just validate plugin's objects.
import JustValidate from "just-validate";

import { v4 as uuidv4 } from "uuid";
//import functions from util.js .
import { validation, getLocalStorage, setLocalStorage, ChangeUi } from "./util";

import dayjs from "dayjs";

//Dom Selections
const formEl = document.forms.EzEmregistration;
const regestrationUiEl = document.querySelector("#registartion-area");
const empDetailsUiEl = document.querySelector("#employees-details");
const tableEl = empDetailsUiEl.querySelector("table");
const noDatapageEl = empDetailsUiEl.querySelector("#no-data");
const navigationEl = document.querySelector("#nav");
const empDataListEl = document.querySelector("#emp-datas-list");
//global variable  to store local storage array data
const empDetailsArr = getLocalStorage();

//dom load
document.addEventListener("DOMContentLoaded", (e) => {
  createEmpDataTable(empDetailsArr);
});
//creating instances of justValidate function
const validateForm = new JustValidate(formEl, {
  validateBeforeSubmitting: true,
});

validation(validateForm);

//form submit event with just validate method
validateForm.onSuccess((e) => {
  e.preventDefault();

  const formData = new FormData(formEl);

  formData.append(
    "age",
    Math.abs(dayjs(formData.get("dob")).diff(dayjs(), "year"))
  );
  formData.append("id", uuidv4());
  const dataObject = Object.fromEntries(formData);
  console.log(dataObject);

  empDetailsArr.push(dataObject);

  setLocalStorage(empDetailsArr);

  formEl.reset();

  empDataListEl.innerHTML = "";

  createEmpDataTable(empDetailsArr);
  ChangeUi(regestrationUiEl, empDetailsUiEl);
});

//create table elements with  data arr
function createEmpDataTable(arr) {
  if (arr.length > 0) {
    tableEl.classList.remove("hidden");
    noDatapageEl.classList.add("hidden");
    const finalEmpData = [];
    arr.map((empData, index) => {
      const trEl = document.createElement("tr");
      const snoEl = document.createElement("td");
      const nameEl = document.createElement("th");
      const roleEl = document.createElement("td");
      const genderEl = document.createElement("td");
      const ageEl = document.createElement("td");
      const emailEl = document.createElement("td");
      const phoneEl = document.createElement("td");
      const actionEl = document.createElement("td");
      const deleteBtn = document.createElement("span");

      // trEl.classList.add("border-[#5A7D7C]", "border-b-[0.5px]");

      snoEl.classList.add("table-col-data");
      snoEl.textContent = index + 1;

      nameEl.classList.add("text-left", "table-col-data");
      nameEl.textContent = empData.name;

      roleEl.classList.add("table-col-data");
      roleEl.textContent = empData.role;

      genderEl.classList.add("table-col-data");
      genderEl.textContent = empData.gender;

      ageEl.classList.add("table-col-data");
      ageEl.textContent = empData.age;

      emailEl.classList.add("table-col-data");
      emailEl.textContent = empData.email;

      phoneEl.classList.add("table-col-data");
      phoneEl.textContent = empData.phone;

      actionEl.classList.add("table-col-data");
      deleteBtn.classList.add("cursor-pointer");
      deleteBtn.setAttribute("title", "delete");
      deleteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24">
               <path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1"/>
            </svg>`;
      deleteBtn.addEventListener("click", (e) => {
        deleteEmpData(empData);
      });
      actionEl.append(deleteBtn);

      trEl.append(
        snoEl,
        nameEl,
        roleEl,
        genderEl,
        ageEl,
        emailEl,
        phoneEl,
        actionEl
      );

      finalEmpData.push(trEl);
    });
    finalEmpData.forEach((el) => empDataListEl.append(el));
  } else {
    tableEl.classList.add("hidden");
    noDatapageEl.classList.remove("hidden");
  }
}

//delete operation
function deleteEmpData(empdata) {
  let existingDatas = empDetailsArr.filter((el) => el.id !== empdata.id);
  setLocalStorage(existingDatas);
  empDataListEl.innerHTML = "";
  createEmpDataTable(existingDatas);
}

//event to change page
navigationEl.addEventListener("click", (e) => {
  const target = e.target;

  //conditions to swap ui
  if (target.id === "regEmp") {
    ChangeUi(empDetailsUiEl, regestrationUiEl);
  } else if (target.id === "empDet") {
    ChangeUi(regestrationUiEl, empDetailsUiEl);
  }
});

//menu toggle
document.querySelector("#menu-icon").addEventListener("click", function () {
  this.classList.toggle("menu-active");
  document.querySelector("#nav").classList.toggle("hidden");
});
