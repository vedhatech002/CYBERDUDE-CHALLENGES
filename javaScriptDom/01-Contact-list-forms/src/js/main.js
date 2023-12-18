//get html elements via query selectors
const addContactBtnEl = document.querySelector("#add-contact");
const modalEl = document.querySelector("#modal");
const modalClosebtn = document.querySelector("#modal-close-btn");
const formEl = document.forms.inputForm;
const contactList = document.querySelector("#contact-list");

let contactDetails;

//getting localstorage and assign values to variable and show ui based on data stored in local storage
function getContactDetails() {
  if (localStorage.getItem("contactList") == null) {
    contactDetails = [];
  } else {
    contactDetails = JSON.parse(localStorage.getItem("contactList"));
    contactDetails.forEach((dataobj) => showUi(dataobj));
  }
}

document.addEventListener("DOMContentLoaded", getContactDetails); // shows datas while on load

//handle submit event
const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(formEl);
  //   console.log(...formData);
  const getFormData = Object.fromEntries(formData);
  //   console.log(getFormData);
  transferToDatabase(getFormData);

  contactList.innerHTML = ""; //clear innerhtml  while add data
  getContactDetails();
  formEl.reset(); // reset forms value
  closeModal();
};

//handle form data event
const handleFormdata = (e) => {
  //   console.log("formdata fired");
  //   console.log(e);
  const formData = e.formData;
  formData.append("id", contactDetails.length + 1);
};

formEl.addEventListener("submit", handleSubmit);
formEl.addEventListener("formdata", handleFormdata);

function transferToDatabase(data) {
  contactDetails.push(data); //store in database
  let database = localStorage.setItem(
    "contactList",
    JSON.stringify(contactDetails)
  );

  //getting datas from database
  //   console.log(contactDetails);
}

function showUi(data) {
  const tableRow = document.createElement("tr");
  tableRow.classList.add("hover:bg-orange-400", "cursor-pointer");
  tableRow.setAttribute("data-id", data.id);
  tableRow.innerHTML = `
    
    <td class="py-4">${data.id}</td>
    <td class="font-semibold text-gray-700">${data.firstname}</td>
    <td class="text-center">${data.streetAdr}</td>
    <td>
      <span class="bg-slate-200 px-2 py-1 rounded text-gray-700"
        >${data.label}</span
      >
    </td>
    <td>${data.email}
    </td>
    <td>${data.phone}</td>
  `;
  contactList.appendChild(tableRow);
}

function openModal() {
  modalEl.classList.remove("hidden");
}
function closeModal() {
  modalEl.classList.add("hidden");
}

addContactBtnEl.addEventListener("click", openModal);
modalClosebtn.addEventListener("click", closeModal);
