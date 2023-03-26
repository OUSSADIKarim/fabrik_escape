// nav logic
const menuBtn = document.querySelector(".menu");
const menuMobile = document.querySelector(".menu-mobile");
const main = document.querySelector("main");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("menu-clicked");
  if (menuBtn.classList.contains("menu-clicked")) {
    menuMobile.classList.add("menu-mobile-show");
    main.classList.add("mainBefore");
  } else {
    menuMobile.classList.remove("menu-mobile-show");
    main.classList.remove("mainBefore");
  }
});

if (window.location.pathname === "/") {
  // categories cards logic
  const cardsContainer = document.querySelector(".cards-container");
  let cardsData = [];
  const cardsDataFetcher = fetch(
    "./public/assets/simulation-data/destinations.json"
  )
    .then((response) => response.json())
    .then((data) => {
      cardsData = data;
      if (cardsData !== []) {
        cardsData.forEach((cardData) => {
          const card = `
              <div class="card">
                <img class="card-img" src="${cardData.img}" alt="">
                <img class="card-icon" src="${cardData.icon}" alt="">
                <p class="card-title">${cardData.title}</p>
              </div>
        `;

          cardsContainer.innerHTML += card;
        });
      }
    })
    .catch((err) => console.error(err));

  // guides cards logic
  const guidesContainer = document.querySelector(".guide-container");
  let guidesData = [];
  const guidesDataFetcher = fetch("./public/assets/simulation-data/guides.json")
    .then((response) => response.json())
    .then((data) => {
      guidesData = data;
      if (guidesData !== []) {
        guidesData.forEach((guideData) => {
          const guide = `
              <div class="guide card">
                <img class="guide-img card-img" src="${guideData.img}" alt="">
                <p class="guide-fullName card-title">${guideData.fullName}</p>
              </div>`;

          guidesContainer.innerHTML += guide;
        });
      }
    })
    .catch((err) => console.error(err));
}

if (window.location.pathname === "/public/destinations.html") {
  // destinations logic
  const destinationsContainer = document.querySelector(
    ".destinations-container"
  );
  let destinationsData = [];

  const destinationsDataFetcher = fetch(
    "./assets/simulation-data/destinations.json"
  )
    .then((response) => response.json())
    .then((data) => {
      destinationsData = data;
      if (destinationsData !== []) {
        destinationsData.forEach((destinationData) => {
          const destination = `
            <div class="guide card">
              <img class="guide-img card-img" src="${destinationData.img}" alt="">
              <p class="guide-fullName card-title">${destinationData.title}</p>
            </div>`;

          destinationsContainer.innerHTML += destination;
        });
      }
    })
    .catch((err) => console.error(err));
}

if (window.location.pathname === "/public/blog.html") {
  //blog logic

  const blogContainer = document.querySelector(".blog-container");
  let blogdata = [];

  const blogDataFetcher = fetch("./assets/simulation-data/blog.json")
    .then((response) => response.json())
    .then((data) => {
      blogdata = data;

      if (blogdata !== []) {
        blogdata.forEach((articleData) => {
          const article = `
          <div class="blog-card card"> 
              <img class="card-img" src="${articleData.img}" alt="" />
              <h3 class="card-title">${articleData.title}  <br /> <small>${articleData.author}</small></h3>
            </div>
          `;

          blogContainer.innerHTML += article;
        });
      }
    })
    .catch((err) => console.log(err));
}
