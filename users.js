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

function SelectAllData() {
  firebase
    .database()
    .ref("users")
    .once("value", function (AllRecords) {
      AllRecords.forEach(function (CurrentRecord) {
        var UserName = CurrentRecord.val().korisnickoIme;
        var FirstName = CurrentRecord.val().ime;
        var LastName = CurrentRecord.val().prezime;
        var DateofBirth = CurrentRecord.val().datumRodjenja;
        var Adress = CurrentRecord.val().adresa;
        var Telefon = CurrentRecord.val().korisnickoIme;
        var Email = CurrentRecord.val().email;
        AddItemsToTable(
          UserName,
          FirstName,
          LastName,
          DateofBirth,
          Adress,
          Telefon,
          Email
        );
      });
    });
}
window.onload = SelectAllData;

var UsrNo = 0;
var UsrList = [];
function AddItemsToTable(
  UserName,
  FirstName,
  LastName,
  DateofBirth,
  Adress,
  Telefon,
  Email
) {
  var tbody = document.getElementById("tbody1");
  var trow = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  var td5 = document.createElement("td");
  var td6 = document.createElement("td");
  var td7 = document.createElement("td");
  var td8 = document.createElement("td");
  UsrList.push([
    UserName,
    FirstName,
    LastName,
    DateofBirth,
    Adress,
    Telefon,
    Email,
  ]);
  td1.innerHTML = ++UsrNo;
  td2.innerHTML = UserName;
  td3.innerHTML = FirstName;
  td4.innerHTML = LastName;
  td5.innerHTML = DateofBirth;
  td6.innerHTML = Adress;
  td7.innerHTML = Telefon;
  td8.innerHTML = Email;
  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);
  trow.appendChild(td5);
  trow.appendChild(td6);
  trow.appendChild(td7);
  trow.appendChild(td8);

  var ControlDiv = document.createElement("td");
  ControlDiv.innerHTML = '<a href="User-Profile.html" >Profile</a>';
  trow.appendChild(ControlDiv);

  var ControlDiv1 = document.createElement("td");
  ControlDiv1.innerHTML =
    '<button onclick="myFunction6()" button type ="submit" id = "delete-btn">Delete</button>';
  trow.appendChild(ControlDiv1);

  tbody.appendChild(trow);

}
