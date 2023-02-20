const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const ime = document.getElementById("name");
const lastName = document.getElementById("last-name");
const date = document.getElementById("date");
const address = document.getElementById("address");
const number = document.getElementById("number");
const remember = document.getElementById("remember");

let forms = document.querySelectorAll("form");
let sum = 0;
forms.forEach((form) =>
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    validateInputs();
  })
);

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidName = (ime) => {
  const re = /[A-Z][a-zA-Z]+$/;
  return re.test(String(ime));
};

const isValidLastName = (lastName) => {
  const re = /[A-Z][a-zA-Z]+$/;
  return re.test(String(lastName));
};

const isValidDate = (date) => {
  const re = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  return re.test(date);
};

const isValidNumber = (number) => {
  const re = /^\+?3?8?(1\d{2}\d{6,8})$/;
  return re.test(number);
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidAddress = (address) => {
  const re = /[A-Z][a-zA-Z]+(\.)? [1-9]\d{0,2}$/;
  return re.test(address);
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password1Value = password1.value.trim();
  const password2Value = password2.value.trim();
  const nameValue = ime.value.trim();
  const lastNameValue = lastName.value.trim();
  const dateValue = date.value.trim();
  const addressValue = address.value.trim();
  const numberValue = number.value.trim();
  const rememberValue = remember.value.trim();

  if (usernameValue === "") {
    setError(username, "E-mail is required");
  } else {
    setSuccess(username);
  }

  if (nameValue === "") {
    setError(ime, "Name is required");
  } else if (!isValidName(nameValue)) {
    setError(
      ime,
      "Name contains just letters and starts with upper case letter"
    );
  } else {
    setSuccess(ime);
    sum++;
  }

  if (lastNameValue === "") {
    setError(lastName, "Last Name is required");
  } else if (!isValidLastName(lastNameValue)) {
    setError(
      lastName,
      "Last Name contains just letters and starts with upper case letter"
    );
  } else {
    setSuccess(lastName);
    sum++;
  }

  if (dateValue === "") {
    setError(date, "Date is required");
    // } else if (!isValidDate(dateValue)) {
    //     setError(date, 'Provide a valid date');
  } else {
    setSuccess(date);
    sum++;
  }

  if (addressValue === "") {
    setError(address, "Address is required");
  } else if (!isValidAddress(addressValue)) {
    setError(address, "Provide a valid address");
  } else {
    setSuccess(address);
    sum++;
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
    sum++;
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 character.");
  } else {
    setSuccess(password);
  }

  if (password1Value === "") {
    setError(password1, "Password is required");
  } else if (password1Value.length < 8) {
    setError(password1, "Password must be at least 8 character.");
  } else {
    setSuccess(password1);
    sum++;
  }

  if (password2Value === "") {
    setError(password2, "Please confirm your password");
  } else if (password2Value !== password1Value) {
    setError(password2, "Passwords doesn't match");
  } else {
    setSuccess(password2);
    sum++;
  }

  if (numberValue === "") {
    setError(number, "Number is required");
  } else if (!isValidNumber(numberValue)) {
    setError(number, "Number pattern is +381 XX XXXXXX(XX)");
  } else {
    setSuccess(number);
    sum++;
  }

  if (rememberValue === "") {
    setError(remember, " You have to agree to terms and services");
  } else {
    setSuccess(remember);
  }
};

if (sum === 8) {
  alert("Registered!");
}

function myFunction() {
  Swal.fire({
    title: "Are you sure you want to change course?",
    showDenyButton: true,
    confirmButtonText: "Save",
    denyButtonText: `Don't save`,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Saved!", "", "success");
      window.setTimeout(function () {
        window.location.href = "Course.html";
      }, 2000);
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
}

function myFunction1() {
  Swal.fire({
    title: "Do you want to save the changes?",
    showDenyButton: true,
    confirmButtonText: "Save",
    denyButtonText: `Don't save`,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Saved!", "", "success");
      window.setTimeout(function () {
        window.location.href = "User-Profile.html";
      }, 2000);
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
}

function myFunction2() {
  Swal.fire({
    title: "Are you sure you want to buy course?",
    showDenyButton: true,
    confirmButtonText: "Yes",
    denyButtonText: `Cancel`,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Course was added to cart!", "", "success");
      window.setTimeout(function () {
        window.location.href = "ACourses.html";
      }, 2000);
    } else if (result.isDenied) {
      Swal.fire("You canceled!", "", "info");
    }
  });
}

function myFunction3() {
  Swal.fire({
    title: "Are you sure you want to send message?",
    showDenyButton: true,
    confirmButtonText: "Send",
    denyButtonText: `Cancel`,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Message was sent!", "", "success");
      window.setTimeout(function () {
        window.location.href = "ACourses.html";
      }, 2000);
    } else if (result.isDenied) {
      Swal.fire("You canceled!", "", "info");
    }
  });
}

function myFunction4() {
  Swal.fire({
    title: "Are you sure you want to cancel?",
    showDenyButton: true,
    confirmButtonText: "Cancel",
    denyButtonText: `Don't cancel`,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Canceled!", "", "success");
      window.setTimeout(function () {
        window.location.href = "User-Profile.html";
      }, 2000);
    } else if (result.isDenied) {
      Swal.fire("Not canceled!", "", "info");
    }
  });
}
function myFunction5() {
  Swal.fire({
    title: "Are you sure you want to cancel?",
    showDenyButton: true,
    confirmButtonText: "Cancel",
    denyButtonText: `Don't cancel`,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Canceled!", "", "success");
      window.setTimeout(function () {
        window.location.href = "Course.html";
      }, 2000);
    } else if (result.isDenied) {
      Swal.fire("Not canceled!", "", "info");
    }
  });
}

function myFunction6() {
  Swal.fire({
    title: "Are you sure you want to delete user?",
    showDenyButton: true,
    confirmButtonText: "Delete",
    denyButtonText: `Cancel`,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Deleted!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Canceled!", "", "info");
    }
  });
}

// function myFunction7(){
//   Swal.fire({
//     title: 'Are you sure you want to register?',
//     showDenyButton: true,
//     confirmButtonText: 'Register',
//     denyButtonText: `Cancel`,
//   }).then((result) => {
//     if (result.isConfirmed) {
//       Swal.fire('You have registered successfully!', '', 'success')
//       window.setTimeout(function() {
//         window.location.href = 'ACourses.html';
//       }, 2000);
//     } else if (result.isDenied) {
//       Swal.fire('Canceled!', '', 'info')
//     }

//   })
// }

var firebaseConfig = {
  apiKey: "AIzaSyCYpDe1r55hzCwpPF22quKHg64tpOqr1UU",
  authDomain: "web-design-32d27.firebaseapp.com",
  databaseURL:
    "https://web-design-32d27-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "web-design-32d27",
  storageBucket: "web-design-32d27.appspot.com",
  messagingSenderId: "572756193956",
  appId: "1:572756193956:web:4c7ecbf09f059bb474ec31",
};
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if (user != null) {
      var email_id = user.email;
      document.getElementById("user_para").innerHTML =
        "Welcome User : " + email_id;
    }
  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
  }
});

function login() {
  var userEmail = document.getElementById("username").value;
  var userPass = document.getElementById("password").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(userEmail, userPass)
    .catch(function (error) {
      var errorMessage = error.message;

      window.alert("Error : " + errorMessage);
    });
}

function logout() {
  firebase.auth().signOut();
}
