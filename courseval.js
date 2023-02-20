const form2 = document.getElementById("form2");
const coursename = document.getElementById("coursename");
const num = document.getElementById("num");
const Num = document.getElementById("Num");
const note = document.getElementById("note");
const about = document.getElementById("about");
const fname = document.getElementById("fname");
const fname1 = document.getElementById("fname1");
const fname2 = document.getElementById("fname2");
const fname3 = document.getElementById("fname3");
const fname4 = document.getElementById("fname4");
const fname5 = document.getElementById("fname5");
const resDate = document.getElementById("resDate");
const Language = document.getElementById("Language");
const Category = document.getElementById("Category");
const Author = document.getElementById("Author");

let forms2 = document.querySelectorAll("form");
forms2.forEach((form) =>
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    validateInputs2();
  })
);

const setError2 = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSucces2 = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidcoursename = (coursename) => {
  const re = /[A-Z][a-zA-Z]/;
  return re.test(String(coursename));
};

const isValidnum = (num) => {
  const re = /^\d{4}$/;
  return re.test(num);
};

const isValidNum = (Num) => {
  const re = /^\d{2}$/;
  return re.test(Num);
};

const validateInputs2 = () => {
  const coursenameValue = coursename.value.trim();
  const numValue = num.value.trim();
  const NumValue = Num.value.trim();
  const NumUserValue = NumUser.value.trim();
  const noteValue = note.value.trim();
  const aboutValue = about.value.trim();
  const fnameValue = fname.value.trim();
  const fname1Value = fname1.value.trim();
  const fname2Value = fname2.value.trim();
  const fname3Value = fname3.value.trim();
  const fname4Value = fname4.value.trim();
  const fname5Value = fname5.value.trim();
  const resDateValue = resDate.value.trim();
  const LanguageValue = Language.value.trim();
  const CategoryValue = Category.value.trim();
  const AuthorValue = Author.value.trim();

  if (coursenameValue === "") {
    setError2(coursename, "Name of Course is required");
  } else if (!isValidcoursename(coursenameValue)) {
    setError2(
      coursename,
      "Course contains just letters and starts with upper case letter"
    );
  } else {
    setSucces2(coursename);
  }

  if (numValue === "") {
    setError2(num, "Price is required");
  } else if (!isValidnum(numValue)) {
    setError2(num, "Price contains just 4 numbers");
  } else {
    setSucces2(num);
  }

  if (NumValue === "") {
    setError2(Num, "Lessons are required");
  } else if (!isValidNum(NumValue)) {
    setError2(Num, "Lessons contains max 2 numbers");
  } else {
    setSucces2(Num);
  }

  if (NumUserValue === "") {
    setError2(NumUser, "Number of users is required");
  } else {
    setSucces2(NumUser);
  }

  if (noteValue === "") {
    setError2(note, "About is required");
  } else {
    setSucces2(note);
  }

  if (aboutValue === "") {
    setError2(about, "Description is required");
  } else {
    setSucces2(about);
  }

  if (fnameValue === "") {
    setError2(fname, "Is required");
  } else {
    setSucces2(fname);
  }

  if (fname1Value === "") {
    setError2(fname1, "Is required");
  } else {
    setSucces2(fname1);
  }

  if (fname2Value === "") {
    setError2(fname2, "Is required");
  } else {
    setSucces2(fname2);
  }

  if (fname3Value === "") {
    setError2(fname3, "Is required");
  } else {
    setSucces2(fname3);
  }

  if (fname4Value === "") {
    setError2(fname4, "Is required");
  } else {
    setSucces2(fname4);
  }

  if (fname5Value === "") {
    setError2(fname5, "Is required");
  } else {
    setSucces2(fname5);
  }

  if (resDateValue === "") {
    setError2(resDate, "Modification dates required");
  } else {
    setSucces2(resDate);
  }

  if (LanguageValue === "") {
    setError2(Language, "Language is required");
  } else {
    setSucces2(Language);
  }

  if (CategoryValue === "") {
    setError2(Category, "Category is required");
  } else {
    setSucces2(Category);
  }

  if (AuthorValue === "") {
    setError2(Author, "Author is required");
  } else {
    setSucces2(Author);
  }
};
