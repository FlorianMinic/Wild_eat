const cards = document.querySelector(".cards");

const restaurants = [
    {
      name: "Mcdonald",
      picture:
        "images/hamburger.jpg",
      tags: ("tags1", "tags2", "tags3"),
      adress: "Port Autonome, Place de Latule, Bd Alfred Daney, 33300 Bordeaux"
    },
    {
        name: "Papadum indian Food",
        picture:
          "images/indien01.jpg",
        tags: ("tags1", "tags2", "tags3"),
        adress: "121 Rue Lucien Faure, 33300 Bordeaux"
      },
      {
        name: "Awake Restaurant Original et Bio",
        picture:
          "images/salade01.jpg",
        tags: ("tags1", "tags2", "tags3"),
        adress: "54 Quai Virginie Hériot, 33300 Bordeaux"
      },
      {
        name: "Delirium café",
        picture:
          "images/bar01.jpg",
        tags: ("tags1", "tags2", "tags3"),
        adress: "30 Quai Virginie Hériot, 33300 Bordeaux"
      },
      {
        name: "Au bureau",
        picture:
          "images/brasserie01.jpg",
        tags: ("tags1", "tags2", "tags3"),
        adress: "12 Quai Virginie Hériot, 33300 Bordeaux"
      },
      {
        name: "Boulangerie B3",
        picture:
          "images/boulangerie01.jpg",
        tags: ("tags1", "tags2", "tags3"),
        adress: "282 Cr Balguerie Stuttenberg, 33300 Bordeaux"
      },
      {
        name: "It-Italian Trattoria",
        picture:
          "images/italien02.jpg",
        tags: ("tags1", "tags2", "tags3"),
        adress: "40 Quai Virginie Hériot Bassins à Flot N°2, 33300 Bordeaux"
      },
      {
        name: "La Côte et l'Arête Bordeaux",
        picture:
          "images/italien01.jpg",
        tags: ("tags1", "tags2", "tags3"),
        adress: "19 Quai Virginie Hériot, 33300 Bordeaux"
      },
      {
        name: "On Air café",
        picture:
          "images/boulangerie02.jpg",
        tags: ("tags1", "tags2", "tags3"),
        adress: "171 Rue Lucien Faure, 33300 Bordeaux"
      },
      {
        name: "Eat Salad",
        picture:
          "images/salade02.jpg",
        tags: ("tags1", "tags2", "tags3"),
        adress: "51 Rue Lucien Faure, 33300 Bordeaux"
      },
      {
        name: "My Beers",
        picture:
          "images/brasserie02.jpg",
        tags: ("tags1", "tags2", "tags3"),
        adress: "63 Quai Virginie Hériot, 33300 Bordeaux"
      },
      {
        name: "SuAndSushi",
        picture:
          "images/sushi01.jpg",
        tags: ("tags1", "tags2", "tags3"),
        adress: "59 Rue Lucien Faure Building, 33300 Bordeaux"
      },
  ];

  function createCard(restaurant) {
    const {name, picture, tags, adress} = restaurant;

    const card = document.createElement("article");
    card.classList.add("articles");
    cards.appendChild(card);

    const cardImg = document.createElement("img");
    cardImg.src = picture;
    cardImg.alt = name;
    cardImg.style.transition = "transform 0.3s ease";

    // cardImg.classList.add("card-img");
    card.appendChild(cardImg);

    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = `${name}`;
    card.appendChild(cardTitle);

    const cardTags = document.createElement("p");
    // cardTags.classList.add("card-tags");
    cardTags.textContent = `${tags}`;
    card.appendChild(cardTags);

    const cardAdress = document.createElement("p");
    cardAdress.classList.add("adresse");
    cardAdress.textContent = `${adress}`;
    card.appendChild(cardAdress);

    cardImg.addEventListener('mouseover', function () {
      cardImg.style.transform = "scale(1.02)";
      cardImg.style.filter = 'blur(2px)';
  
});

  cardImg.addEventListener('mouseleave', function () {
      cardImg.style.transform = "scale(1)";
      cardImg.style.filter = 'none';
      
  });

  }

 restaurants.forEach((restaurant) => {
    createCard(restaurant);
  });

