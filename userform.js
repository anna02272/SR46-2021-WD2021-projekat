const form1 = document.getElementById("form1");
const username1 = document.getElementById("username1");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const date1 = document.getElementById("date1");
const address1 = document.getElementById("address1");
const number1 = document.getElementById("number1");
const email1 = document.getElementById("email1");
const password3 = document.getElementById("password3");
const gender = document.getElementById("gender");

form1.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs1();
});

const setError1 = (element, message) => {
  const inputControl1 = element.parentElement;
  const errorDisplay1 = inputControl1.querySelector(".error");

  errorDisplay1.innerText = message;
  inputControl1.classList.add("error");
  inputControl1.classList.remove("success");
};

const setSuccess1 = (element) => {
  const inputControl1 = element.parentElement;
  const errorDisplay1 = inputControl1.querySelector(".error");

  errorDisplay1.innerText = "";
  inputControl1.classList.add("success");
  inputControl1.classList.remove("error");
};

const isValidUsername1 = (username1) => {
  const re = /[A-Z][a-zA-Z]+$/;
  return re.test(String(username1));
};

const isValidFirstname = (firstname) => {
  const re = /[A-Z][a-zA-Z]+$/;
  return re.test(String(firstname));
};

const isValidLastname = (lastname) => {
  const re = /[A-Z][a-zA-Z]+$/;
  return re.test(String(lastname));
};

const isValidNumber1 = (number1) => {
  const re = /^\+?3?8?(1\d{2}\d{6,8})$/;
  return re.test(number1);
};

const isValidemail1 = (email1) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email1).toLowerCase());
};

const isValidAddress1 = (address1) => {
  const re = /[A-Z][a-zA-Z]+(\.)? [1-9]\d{0,2}$/;
  return re.test(address1);
};

const validateInputs1 = () => {
  const username1Value = username1.value.trim();
  const lastnameValue = lastname.value.trim();
  const firstnameValue = firstname.value.trim();
  const date1Value = date1.value.trim();
  const email1Value = email1.value.trim();
  const password3Value = password3.value.trim();
  const address1Value = address1.value.trim();
  const number1Value = number1.value.trim();
  const genderValue = gender.value.trim();

  if (username1Value === "") {
    setError1(username1, "Username is required");
  } else {
    setSuccess1(username1);
  }

  if (lastnameValue === "") {
    setError1(lastname, "Last Name is required");
  } else if (!isValidLastname(lastnameValue)) {
    setError1(
      lastname,
      "Last Name contains just letters and starts with upper case letter"
    );
  } else {
    setSuccess1(lastname);
  }

  if (firstnameValue === "") {
    setError1(firstname, "First Name is required");
  } else if (!isValidFirstname(firstnameValue)) {
    setError1(
      firstname,
      "First Name contains just letters and starts with upper case letter"
    );
  } else {
    setSuccess1(firstname);
  }

  if (date1Value === "") {
    setError1(date1, "Date is required");
    // } else if (!isValidDate(dateValue)) {
    //     setError1(date, 'Provide a valid date');
  } else {
    setSuccess1(date1);
  }

  if (address1Value === "") {
    setError1(address1, "Address is required");
  } else if (!isValidAddress1(address1Value)) {
    setError1(address1, "Provide a valid address");
  } else {
    setSuccess1(address1);
  }

  if (email1Value === "") {
    setError1(email1, "Email is required");
  } else if (!isValidemail1(email1Value)) {
    setError1(email1, "Provide a valid email address");
  } else {
    setSuccess1(email1);
  }

  if (password3Value === "") {
    setError1(password3, "Password is required");
  } else if (password3Value.length < 8) {
    setError1(password3, "Password must be at least 8 character.");
  } else {
    setSuccess1(password3);
  }

  if (number1Value === "") {
    setError1(number1, "Number is required");
  } else if (!isValidNumber1(number1Value)) {
    setError1(number1, "Number pattern is +381 XX XXXXXX(XX)");
  } else {
    setSuccess1(number1);
  }

  if (form3.gender[0].checked == false && form3.gender[1].checked == false) {
    setError1(gender, "Please choose your Gender: Male or Female");
  } else {
    setSuccess1(gender);
  }
};
