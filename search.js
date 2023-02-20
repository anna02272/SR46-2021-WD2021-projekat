function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}
window.addEventListener("load", () => {
  closeSearch();
});
let firebaseUrl =
  "https://web-design-32d27-default-rtdb.europe-west1.firebasedatabase.app";

const coursesList = document.getElementById("allCourses");
const search = document.getElementById("search");
let courses = {};

function getAllCourses() {
  let request = new XMLHttpRequest();

  request.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        courses = JSON.parse(request.responseText);
        console.log(courses);

        for (let id in courses) {
          let course = courses[id];
          appendCourseRow("allCourses", id, course);
        }
      } else {
        alert("Greška prilikom učitavanja svih kurseva.");
      }
    }
  };

  request.open("GET", firebaseUrl + "/courses.json");
  request.send();
}
function appendCourseRow(ul, id, courses) {
  let courseRow = document.createElement("tr");

  let imageIn = document.createElement("td");
  imageIn.setAttribute("id", "image-in");
  let img = document.createElement("img");
  img.src = courses.slika;
  imageIn.appendChild(img);
  courseRow.appendChild(imageIn);

  let nazivTd = document.createElement("td");
  nazivTd.innerText = courses.naziv;
  courseRow.appendChild(nazivTd);
  nazivTd.className = "box";

  let kategorijaTd = document.createElement("td");
  kategorijaTd.innerText = courses.kategorija;
  courseRow.appendChild(kategorijaTd);
  kategorijaTd.className = "box";

  let autorTd = document.createElement("td");
  autorTd.innerText = courses.autor;
  courseRow.appendChild(autorTd);
  autorTd.className = "box";

  document.getElementById(ul).appendChild(courseRow);
}
getAllCourses();

function searchCourse() {
  var input, filter, ul, tr, td, i, t;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  ul = document.getElementById("allCourses");
  tr = ul.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    var filtered = false;
    var tds = tr[i].getElementsByTagName("td");
    for (t = 0; t < tds.length; t++) {
      var td = tds[t];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          filtered = true;
        }
      }
    }
    if (filtered === true) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }

  input.addEventListener("input", (event) => {
    const searchText = event.target.value;
    const regex = new RegExp(searchText, "gi");
    var select = document.querySelectorAll(".box");
    select.forEach((box) => {
      let text = box.innerHTML;
      text = text.replace(/(<mark class="highlight">|<\/mark>)/gim, "");

      const newText = text.replace(regex, '<mark class="highlight">$&</mark>');
      box.innerHTML = newText;
    });
  });
}
