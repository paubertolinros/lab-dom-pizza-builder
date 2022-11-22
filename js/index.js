// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'Pepperoni', price: 1 },
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
};
//EN AQUESTA FUNCTION HE ACCEDIT AMB UN FOR LOOP
function renderMushrooms() {
  let getMushrooms = document.getElementsByClassName('mushroom');
  for (let i = 0; i < getMushrooms.length; i++){
    if (state.mushrooms) {
      getMushrooms[i].style.visibility = 'visible';
    } else {
      getMushrooms[i].style.visibility = 'hidden'
    };
  }; 
};
//EN AQUESTA FUNCTION HE FET UNA CÒPIA ARRAY PER PODER ACCEDIR ALS ELEMENTS AMB UN FOREACH
function renderGreenPeppers() {
  let getGreenPepper = document.getElementsByClassName('green-pepper');
  let newArrGreenPepper = [...getGreenPepper]
  newArrGreenPepper.forEach((oneGreenPep) => {
    if (state.greenPeppers) {
      oneGreenPep.style.visibility = 'visible'
    } else {
      oneGreenPep.style.visibility = 'hidden'
    };
  });
};
function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let getWhiteSauce = document.querySelectorAll('.sauce')
  getWhiteSauce.forEach((oneWhiteSauce) => {
    if (!state.whiteSauce) {
      oneWhiteSauce.classList.remove("sauce-white")
    } else {
      oneWhiteSauce.classList.add("sauce-white")
    };
  });
};
function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let getAllCrustGlFr = document.querySelectorAll('.crust')
  getAllCrustGlFr.forEach((oneCrust) => {
    if (state.glutenFreeCrust) {
      oneCrust.classList.add('crust-gluten-free')
    } else {
      oneCrust.classList.remove('crust-gluten-free')
    };
  });
};
// TROBAT A INTERNET, A MI SE M'ACTIVAVEN I DESACTIVAVEN TOTS DE COP // COM ES FARIA EL let getAllStates = Object.values(state), PERÒ AMB FOR... IN LOOP, HO HE INTENTAT I NO EM SURT
function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let getAllButtons = document.querySelectorAll('.btn');
  let getAllStates = Object.values(state)
  for (let i = 0; i < getAllStates.length; i++) {
    if (getAllStates[i] === true) {
      getAllButtons[i].classList.add('active')
    } else {
      getAllButtons[i].classList.remove('active')
    };
  };
};
function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  /*
  //console.log(listOfIngr)
  if (state.pepperoni) {
    listOfIngr[0].style.visibility = 'visible'
    total += ingredients.pepperoni.price
    listOfIngr[0].innerHTML = `$${ingredients.pepperoni.price} ${ingredients.pepperoni.name}`
  } else {
    listOfIngr[0].style.visibility = 'hidden'
  } if (state.mushrooms) {
    listOfIngr[1].style.visibility = 'visible'
    total += ingredients.mushrooms.price
    listOfIngr[1].innerHTML = `$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}`
  } else {
    listOfIngr[1].style.visibility = 'hidden'
  } if (state.greenPeppers) {
    listOfIngr[2].style.visibility = 'visible'
    total += ingredients.greenPeppers.price
    listOfIngr[2].innerHTML = `$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}`
  } else {
    listOfIngr[2].style.visibility = 'hidden'
  } if (state.whiteSauce) {
    listOfIngr[3].style.visibility = 'visible'
    total += ingredients.whiteSauce.price
    listOfIngr[3].innerHTML = `$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}`
  } else {
    listOfIngr[3].style.visibility = 'hidden'
  } if (state.glutenFreeCrust) {
    listOfIngr[4].style.visibility = 'visible'
    total += ingredients.glutenFreeCrust.price
    listOfIngr[4].innerHTML = `$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}`
  } else {
    listOfIngr[4].style.visibility = 'hidden'
   }
  document.querySelector('.panel strong').innerHTML = `$${total}`
  //const finalPriceElement = document.querySelector('.panel strong');
}
  */
  const listOfIngr = document.querySelectorAll('aside.panel.price ul li');
  let total = 10;
  let allIngredientsValues = Object.values(ingredients)
  let name = allIngredientsValues.map(elem => elem.name)
  let price = allIngredientsValues.map(elem => elem.price)
  let getAllStatesIn = Object.values(state)
  for (let i = 0; i < getAllStatesIn.length; i++) {
   if (getAllStatesIn[i]) {
      listOfIngr[i].style.visibility = 'visible'
      listOfIngr[i].innerHTML = `$${price[i]} ${name[i]}`
      total = total + price[i]
    } else {
      listOfIngr[i].style.visibility = 'hidden'
    };
     document.querySelector('.panel strong').innerHTML = `$${total}`
  };
};

renderEverything();
// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
let getGreenPeppersButton = document.querySelector('.btn.btn-green-peppers');
getGreenPeppersButton.addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">` 
//PERQUÈ NO EM FUNCIONA AMB .getElementsByClassName("btn-sauce"), PERQUÈ QUAN TÉ MÉS D'UNA CLASSE S'HA D'UTILITZAR .querySelector?
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});