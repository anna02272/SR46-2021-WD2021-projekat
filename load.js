window.onload = function () {
  loadAll();
};
var firebaseUrl =
  "https://web-design-32d27-default-rtdb.europe-west1.firebasedatabase.app";
var usersId = [];
var users = {};

var coursesId = [];
var courses = {};

var getcourses = document.getElementById("course-box");

// function CreateCourse(course) {
//   var courseDiv = document.createElement(div);
//   courseDiv.setAttribute("class", "course-col");
//   courseDiv.setAttribute("id", course.id);
//   console.log(course.naziv);

//   var link = document.createElement(div);
//   link.setAttribute("class", "card");
//   courseDiv.appendChild(link);

//   var header = document.createElement(h2);
//   header.innerText = course.naziv;
//   link.appendChild(header);

//   var slika = document.createElement(img);
//   slika.setAttribute("src", course.slika);
//   link.appendChild(slika);
//   console.log(course.slika);

//   var paragraf = document.createElement(p);
//   paragraf.innerText = course.opis;
//   link.appendChild(paragraf);

//   console.log(courseDiv.innerHTML);

//   document.getElementsByClassName("row1")[0].appendChild(courseDiv);
// }

function loadAll() {
  var request = new XMLHttpRequest();

  request.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        courses = JSON.parse(request.responseText);

        for (var id in courses) {
          var course = courses[id];

          //   CreateCourse(course);
        }
        const AllCards = document.querySelectorAll(".course-box");
        console.log(AllCards);
        // Listener(AllCards);
      } else {
        alert("Error occurred. Courses could not be loaded.");
      }
    }
  };

  request.open("GET", firebaseUrl + "/courses.json");
  request.send();
}

function Listener(AllCourses) {
  AllCourses.forEach((card) => {
    card.addEventListener("click", () => {
      window.location.href = `Course.html?id=${card.getAttribute("data-id")}`;
    });
  });
}

// function Listener(AllCourses) {
//   AllCourses.forEach((card) =>
//     card.addEventListener("click", () => {
//       window.location.href = ` /Course.html?id=${card.getAttribute("id")}`;
//     })
//   );
// }
