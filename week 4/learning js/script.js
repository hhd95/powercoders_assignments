const studentList = [
  {
    name: "Hasan",
    surname: "Danaci",
    age: 41,
    eye: "green",
    hobby: "ice skating",
    picture: "./pictures/hasan.jpg",
  },

  {
    name: "Enes",
    surname: "BORA",
    age: 38,
    eye: "green",
    hobby: "photography",
    picture: "./pictures/Enes.jpg",
  },
  {
    name: "Ozzy",
    surname: "the star",
    age: 37,
    eye: "green",
    hobby: "playing guitar",
    picture: "./pictures/Ozzy.jpg",
  },
  {
    name: "Ali",
    surname: "Göçmen",
    age: 35,
    eye: "hazel",
    hobby: "paint",
    picture: "./pictures/aligocmen.jpg",
  },
  {
    name: "Bilal",
    surname: "Suleymani",
    age: 20,
    eye: "black",
    hobby: "swimming",
    picture: "./pictures/bilal.jpg",
  },
  {
    name: "Jyothi ",
    surname: "Jogin",
    age: 23,
    eye: "green",
    hobby: "ice skating",
    picture: "./pictures/jyothi.jpg",
  },

  {
    name: "İsmet",
    surname: "Bakay",
    age: 38,
    eye: "brown",
    hobby: "poetry",
    picture: "./pictures/ismetbakay.jpg",
  },
  {
    name: "Arwa",
    surname: "Alhussein",
    age: 35,
    eye: "brown",
    hobby: "coding",
    picture: "./pictures/orwa.jpg",
  },
  {
    name: "Olena",
    surname: "Smetiuk",
    age: 25,
    eye: "green",
    hobby: "reading",
    picture: "./pictures/olena.jpg",
  },
  {
    name: "Murat",
    surname: "Güldibi",
    age: 28,
    eye: "black",
    hobby: "tracking",
    picture: "./pictures/murat.jpg",
  },

  {
    name: "Serkan",
    surname: "Taşgin",
    age: 41,
    eye: "black",
    hobby: "travel",
    picture: "./pictures/serkan.jpg",
  },
  {
    name: "Senay",
    surname: "Atli",
    age: 23,
    eye: "black",
    hobby: "snowboard",
    picture: "./pictures/senay.jpg",
  },

  {
    name: "Yusuf",
    surname: "İlhan",
    age: 37,
    eye: "brown",
    hobby: "hiking",
    picture: "./pictures/Yusuf.jpg",
  },
  {
    name: "Emin",
    surname: "Yilmaz",
    age: 33,
    eye: "brown",
    hobby: "reading",
    picture: "./pictures/emin.jpg",
  },
  {
    name: "Yuliia",
    surname: "Kuts",
    age: 34,
    eye: "green",
    hobby: "cooking",
    picture: "./pictures/julia.jpg",
  },
];

var str = "";
for (let i = 0; i < studentList.length; i++) {
  str += `
   
  <div class="card-content" onclick = "benimFonksiyonum('${studentList[i].name}')">
         <figure>
           <img src=${studentList[i].picture} alt="" />
         </figure>
         <p>
          <strong>Name:</strong> ${studentList[i].name}
         </p>
         <p>
         <strong>Surname:</strong> ${studentList[i].surname}
           
         </p>
         <p><strong>Eye Color:</strong> ${studentList[i].eye} </p>
       </div>
  `;
}

document.getElementById("card-container").innerHTML = str;
function benimFonksiyonum(str) {
  alert(str);
}
