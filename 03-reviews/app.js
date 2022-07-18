// local reviews data
const reviews = [
  {
    id: 1,
    name: "bill anderson",
    job: "web developer",
    img:
      "avatar-1.png",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero?Iste, doloremque nihil?",
},
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
    "avatar-2.png",
    text:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero?Iste, doloremque nihil?",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "avatar-3.png",
    text:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero?Iste, doloremque nihil?",
  },
  {
    id: 4,
    name: "susan smith",
    job: "the boss",
    img:
    "avatar-4.png",
    text:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero?Iste, doloremque nihil?",
  },
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
showPerson();
});

// show person based on item
function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});
// show random person
randomBtn.addEventListener("click", function () {

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
});
