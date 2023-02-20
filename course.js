let FirebaseUrl =
  "https://web-design-32d27-default-rtdb.europe-west1.firebasedatabase.app/";
getSingleCourse(getPageID());
function getSingleCourse(e) {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
    }
  };
  xhttp.open("GET", FirebaseUrl + "courses.json", true);
  xhttp.send();
}

function getPageID() {
  const location = decodeURI(window.location.toString());
  const index = location.indexOf("?") + 1;
  const substrings = location.substring(index, location.length);
  const splitedSubstring = substrings.split("=");
  return splitedSubstring[1];
}

function createCourse(course) {
  console.log(course);
  let courseSection = document.createElement(`section`);
  courseSection.setAttribute("class", "overview");
  courseSection.innerHTML = `
  <section id="course-inner">
    <div class="overview">
      <img
        class="course-img"
        src="../Projekat/pic/Angular for beginners.png"
      />
      <div class="course-head">
        <div class="c-name">
          <h2>${course[0].naziv}</h2>
          <div class="star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <span>${course.cena}din</span>
      </div>
      <hr />
      <h3>Course description</h3>
      <p id="text ">
      ${course.opis}
      </p>
      <hr />
      <h3>What you'll learn</h3>
      <div class="learn">
        <p>
          <i class="far fa-check-circle"></i>Bootstrap your Angular
          application
        </p>
        <p>
          <i class="far fa-check-circle"></i>Use AngularJS markup and
          expressions
        </p>
        <p><i class="far fa-check-circle"></i>Create and use controllers</p>
        <p>
          <i class="far fa-check-circle"></i>Use built-in services and create
          custom services
        </p>
        <p>
          <i class="far fa-check-circle"></i>Turn your application into a SPA
          using routing
        </p>
        <p>
          <i class="far fa-check-circle"></i>Create your own custom elements
          and handle events using directives
        </p>
      </div>
    </div>

    <div class="enroll">
      <h3>About course</h3>
      <p><i class="far fa-user"></i>Author: ${course.autor}</p>
      <p><i class="far fa-video"></i>${course.brojLekcija} lessons</p>
      <p><i class="far fa-check-circle"></i>category: ${course.kategorija}</p>
      <p><i class="fas fa-language"></i>Language: ${course.jezik}</p>
      <p><i class="fas fa-sort-numeric-up-alt"></i>number of users: ${course.brojKorisnika}</p>
      <p><i class="fas fa-briefcase"></i>Modification date: ${course.datumIzmene}</p>
      <p><i class="far fa-trophy-alt"></i>Certificate of Completion: ${course.sertifikovan}</p>
      <div class="enroll-btn">
        <a onclick="myFunction2()" class="purple">Buy Course</a>
        <p id="demo"></p>
        <div class="enroll-btn">
          <a class="white" href="EditPage-courses.html">Change </a>
        </div>
      </div>
    </div>
  </section>`;

  document.querySelector(".course-container").appendChild(courseSection);
  const editButton = document.querySelector("#enroll-btn");
  editButton.addEventListener("click", () => {
    window.location.href = `EditPage-courses.html?id=${course.id}`;
  });
}
