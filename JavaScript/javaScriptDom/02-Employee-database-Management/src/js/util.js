function validation(form) {
  form.addField(
    "#name",
    [
      {
        rule: "required",
      },
      {
        rule: "minLength",
        value: 3,
      },
      {
        rule: "maxLength",
        value: 20,
      },
    ],
    {
      errorFieldCssClass: ["error-field"],
    }
  );

  form.addField(
    "#email",
    [
      {
        rule: "required",
      },
      {
        rule: "email",
      },
    ],
    {
      errorFieldCssClass: ["error-field"],
    }
  );
  form.addField(
    "#phone",
    [
      {
        rule: "required",
      },
      {
        rule: "required",
      },
      {
        rule: "number",
      },
      {
        rule: "minLength",
        value: 10,
        errorMessage: "The phone number must be 10 characters",
      },
      {
        rule: "maxLength",
        value: 10,
      },
    ],
    {
      errorFieldCssClass: ["error-field"],
    }
  );
  form.addField(
    "#dob",
    [
      {
        rule: "required",
      },
    ],
    {
      errorFieldCssClass: ["error-field"],
    }
  );
  form.addField(
    "#role",
    [
      {
        rule: "required",
      },
    ],
    {
      errorFieldCssClass: ["error-field"],
    }
  );
  form.addRequiredGroup("#genderRadio");
}

function getLocalStorage() {
  let empDetailsArr;
  if (localStorage.getItem("employeeDatas") === null) {
    empDetailsArr = [];
  } else {
    empDetailsArr = JSON.parse(localStorage.getItem("employeeDatas"));
  }
  return empDetailsArr;
}

function setLocalStorage(dataArr) {
  localStorage.setItem("employeeDatas", JSON.stringify(dataArr));
}

function ChangeUi(fromEl, toEl) {
  fromEl.classList.add("hidden");
  toEl.classList.remove("hidden");
}

export { validation, getLocalStorage, setLocalStorage, ChangeUi };
