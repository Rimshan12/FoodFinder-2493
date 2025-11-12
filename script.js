const restaurants = [
  {
    name: "Pista House",
    image: "https://images.pexels.com/photos/897844/pexels-photo-897844.jpeg",
    description: "Famous for Hyderabadi biryani and desserts.",
    menu: ["Chicken Biryani", "Haleem", "Falooda", "Mutton Curry"]
  },
  {
    name: "Pizza Hut",
    image: "https://images.pexels.com/photos/3682837/pexels-photo-3682837.jpeg",
    description: "Delicious cheesy pizzas and sides.",
    menu: ["Margherita Pizza", "Pepperoni Pizza", "Garlic Bread", "Choco Lava Cake"]
  },
  {
    name: "Domino’s",
    image: "https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg",
    description: "Freshly baked pizzas and pasta specials.",
    menu: ["Veg Extravaganza", "Cheese Burst Pizza", "Pasta Italiano", "Brownie"]
  },
  {
    name: "KFC",
    image: "https://images.pexels.com/photos/4109115/pexels-photo-4109115.jpeg",
    description: "Crispy fried chicken and burgers.",
    menu: ["Zinger Burger", "Fried Chicken Bucket", "Popcorn Chicken", "Krusher"]
  },
  {
    name: "Green Park",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    description: "Luxury dining with multicuisine options.",
    menu: ["Paneer Butter Masala", "Veg Biryani", "Naan", "Gulab Jamun"]
  },
  {
    name: "Khursheed",
    image: "https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg",
    description: "Authentic Mughlai and tandoori flavors.",
    menu: ["Mutton Seekh Kebab", "Tandoori Chicken", "Butter Naan", "Firni"]
  },
  {
    name: "Cakewala",
    image: "https://images.pexels.com/photos/533325/pexels-photo-533325.jpeg",
    description: "Heaven for dessert lovers with premium cakes.",
    menu: ["Black Forest Cake", "Chocolate Truffle", "Cupcakes", "Pastries"]
  }
];

const restaurantList = document.getElementById("restaurant-list");
const favoritesList = document.getElementById("favorites-list");

function displayRestaurants() {
  restaurantList.innerHTML = "";
  restaurants.forEach((res) => {
    const card = document.createElement("div");
    card.classList.add("restaurant-card");
    card.innerHTML = `
      <img src="${res.image}" alt="${res.name}">
      <h3>${res.name}</h3>
      <p>${res.description}</p>
      <p><b>Menu:</b> ${res.menu.join(", ")}</p>
      <button onclick="addToFavorites('${res.name}')">❤️ Add to Favorites</button>
    `;
    restaurantList.appendChild(card);
  });
}

function addToFavorites(name) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const restaurant = restaurants.find((r) => r.name === name);
  if (!favorites.find((f) => f.name === name)) {
    favorites.push(restaurant);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    displayFavorites();
  }
}

function displayFavorites() {
  favoritesList.innerHTML = "";
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favorites.forEach((res) => {
    const card = document.createElement("div");
    card.classList.add("restaurant-card");
    card.innerHTML = `
      <img src="${res.image}" alt="${res.name}">
      <h3>${res.name}</h3>
      <p>${res.description}</p>
      <p><b>Menu:</b> ${res.menu.join(", ")}</p>
    `;
    favoritesList.appendChild(card);
  });
}

displayRestaurants();
displayFavorites();
