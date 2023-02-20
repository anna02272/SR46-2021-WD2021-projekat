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

function buy() {
  var productsFirebase = [];
  for (let index = 0; index < products.length; index++) {
    if (products[index].cart) {
      var product = {
        name: products[index].name,
        price: products[index].price,
        quantity: products[index].quantity,
        total: products[index].total,
      };
      productsFirebase.push(product);
    }
  }

  firebase.database().ref("cart").push({
    total: total(),
    products: productsFirebase,
  });

  Swal.fire({
    title: "Are you sure you want to buy course?",
    showDenyButton: true,
    confirmButtonText: "Buy",
    denyButtonText: `Cancel`,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Course was bought!", "", "success");
      clean();
    } else if (result.isDenied) {
      Swal.fire("Canceled!", "", "info");
    }
  });
}

var products = [
  {
    id: 1,
    img: "../Projekat/pic/JavaScript Development.jpg",
    name: "JavaScript Development",
    price: 7235,
    cart: false,
    quantity: 1,
    total: 0,
  },
  {
    id: 2,
    img: "../Projekat/pic/Data structures from basic to advanced.jpg",
    name: "Data structures from basic",
    price: 9399,
    cart: false,
    quantity: 1,
    total: 0,
  },

  {
    id: 3,
    img: "../Projekat/pic/Introduction to algorithms.jpg",
    name: "Introduction to Algorithms",
    price: 9995,
    cart: false,
    quantity: 1,
    total: 0,
  },
  {
    id: 4,
    img: "../Projekat/pic/Angular for beginners.png ",
    name: "Angular for begginers",
    price: 9999,
    cart: false,
    quantity: 1,
    total: 0,
  },
  {
    id: 5,
    img: "../Projekat/pic/Basics of HTML and CSS.png ",
    name: "Basics of HTML and CSS",
    price: 8650,
    cart: false,
    quantity: 1,
    total: 0,
  },
  {
    id: 6,
    img: "../Projekat/pic/Object Oriented Programming in C.jpg",
    name: "Object Oriented Programming ",
    price: 7235,
    cart: false,
    quantity: 1,
    total: 0,
  },

  {
    id: 7,
    img: "../Projekat/pic/Introduction to Java and Object Oriented Programming.png",
    name: "Introduction to Java and OOP",
    price: 10995,
    cart: false,
    quantity: 1,
    total: 0,
  },
];
function total() {
  let total = 0;
  for (let index = 0; index < products.length; index++) {
    if (products[index].cart) {
      total += products[index].total;
    }
  }
  return total;
}

var con = 0;
var con2 = [];

function clean() {
  for (let index = 0; index < products.length; index++) {
    products[index].cart = false;
    products[index].quantity = 1;
    products[index].total = 0;
    con2 = [];
    updateCart();
  }
}

function add(id) {
  for (let index = 0; index < products.length; index++) {
    if (products[index].id != id || products[index].cart == true) {
    } else {
      products[index].cart = true;
      con2.push(products[index].id);
      document.getElementById("tableCourses").innerHTML += `
        <tr>
        <th scope = "row"> ${con + 1}</th>
        <td><img src = "${products[index].img}"></button></td>
  
        <td>${products[index].name}</td> 

        
        <td><button class = "btn btn-danger" onclick = "remove(${
          products[index].id
        })">X </button> </td>
       <td>${products[index].price * products[index].quantity}.00 din </td> 
        
        </tr>

        `;
      con++;
      products[index].total = products[index].price * products[index].quantity;
    }
  }
  document.getElementById("total").innerHTML = `
    <tr>
    <th scope = "row"></th>
    <td></td>
    <td></td>
    <td></td>
    <td>
    <h4>Total: </h4>
    </td>
    <td>
      ${total()}.00 din
    </td>
    </tr>
    <tr>
    <th scope = "row"></th>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>
    <button onclick = "buy()" id = "delete-btn" class "btn btn-success">Buy</button>
    </td>
    </tr>
    
    
    `;
}

function remove(id) {
  for (let index = 0; index < products.length; index++) {
    if (products[index].id === id) {
      products[index].cart = false;
      products[index].total = 0;
      products[index].quantity = 1;
      total();
      for (let index2 = 0; index2 < con2.length; index2++) {
        if (products[index].id == con2[index2]) {
          con2.splice(index2, 1);
        } else {
        }
      }
      updateCart();
    } else {
      updateCart();
    }
  }
}

function updateCart() {
  con = 0;
  document.getElementById("tableCourses").innerHTML = "";
  for (let index = 0; index < con2.length; index++) {
    var position = con2[index];
    for (let index3 = 0; index3 < products.length; index3++) {
      if (position == products[index3].id) {
        document.getElementById("tableCourses").innerHTML += `
        <tr>
        <th scope = "row"> ${con + 1}</th>
        <td><img src = "${products[index3].img}"></button></td>
  
        <td>${products[index3].name}</td>
        
        <td><button class = "btn btn-danger" onclick = "remove(${
          products[index3].id
        })">X </button> </td>
       <td>${products[index3].price * products[index3].quantity}.00 din </td> 
        
        </tr>

        `;
        products[index3].total =
          products[index3].price * products[index3].quantity;
      } else {
      }
    }
    con = con + 1;
  }
  if (total() == 0) {
    document.getElementById("total").innerHTML = "";
  } else {
    document.getElementById("total").innerHTML = `
    <tr>
    <th scope = "row"></th>
    <td></td>
    <td></td>
    <td></td>
    <td>
    <h4>Total: </h4>
    </td>
    <td>
      ${total()}.00 din
    </td>
    </tr>
    <tr>
    <th scope = "row"></th>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>
    <button onclick = "buy()",  class "btn btn-success">Buy</button>
    </td>
    </tr>
    
    
    `;
  }
}

(() => {
  for (let index = 0; index < products.length; index++) {
    document.getElementById("row1").innerHTML += `
    
      <div class = "card m-2">
         <img src = "${products[index].img}" class = "card-img-top"></img>
        <div class = "card-body">
        <h5 class = "card-title">${products[index].name}</h5>
        <p class = "card-text">${products[index].price}.00 din</p>
        <button class = "btn btn-primary" onclick="add('${products[index].id}')">Add</button>
      </div>
      </div>
      `;
  }
})();
