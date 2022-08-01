// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  //   // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach((e) => {
    if (state.whiteSauce) {
      e.classList.add("sauce-white");
    } else {
      e.classList.remove("sauce-white");
    }
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach((e) => {
    if (state.glutenFreeCrust) {
      e.classList.add("crust-gluten-free");
    } else {
      e.classList.remove("crust-gluten-free");
    }
  })
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  document.querySelectorAll('.btn.btn-pepperoni').forEach((e) => {
    if (state.pepperoni) {
      e.classList.add("active");
    } else {
      e.classList.remove("active");
    }
  });
  document.querySelectorAll('.btn.btn-mushrooms').forEach((e) => {
    if (state.mushrooms) {
      e.classList.add("active");
    } else {
      e.classList.remove("active");
    }
  });
  document.querySelectorAll('.btn.btn-green-peppers').forEach((e) => {
    if (state.greenPeppers) {
      e.classList.add("active");
    } else {
      e.classList.remove("active");
    }
  });
  document.querySelectorAll('.btn.btn-sauce').forEach((e) => {
    if (state.whiteSauce) {
      e.classList.add("active");
    } else {
      e.classList.remove("active");
    }
  });
  document.querySelectorAll('.btn.btn-crust').forEach((e) => {
    if (state.glutenFreeCrust) {
      e.classList.add("active");
    } else {
      e.classList.remove("active");
    }
  });
}


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const price = document.querySelector('.panel.price');
  price.innerHTML = `<h2>Your pizza's price</h2>`;
  price.innerHTML += `<b>$${basePrice} cheese pizza</b>`;

  for (let i in state) {
    if (state[i]) {
      price.innerHTML += `<li>${ingredients[i].price} ${ingredients[i].name}</li>`;
    }
  }
  price.innerHTML += `<strong>$${basePrice + ingredients.pepperoni.price * state.pepperoni + ingredients.mushrooms.price * state.mushrooms + ingredients.greenPeppers.price * state.greenPeppers + ingredients.whiteSauce.price * state.whiteSauce + ingredients.glutenFreeCrust.price * state.glutenFreeCrust} </strong>`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});