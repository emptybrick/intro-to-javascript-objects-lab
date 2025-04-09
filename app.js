const pokedex = require('./data.js');

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  };

// console.dir(pokedex, { maxArrayLength: null })

// console.log(game);

/*------------------------------------------------------------------------------------------------------------------------
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/

// I want to have 4 difficulties and the ability to see what difficulty is currently set and be able to switch difficulties
// i wanted the 4 difficulties to be boolean, but i couldnt figure out how to set them true and false and run the function

game.difficulty = {};

game.changeDifficulty = function(difficulty) {
    this.difficulty = difficulty;
    console.log(`Current game difficulty: ${difficulty}`)
};

game.changeDifficulty('Master');

// const changeDifficulty = (difficulty) => {
//     game.difficulty = difficulty
// };

// changeDifficulty('Medium');
// changeDifficulty('Master');

/*------------------------------------------------------------------------------------------------------------------
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

//find all starter pokemon and list then choose and push to party

// for (let pokemon of pokedex) {
//     if (pokemon.starter === true)
//     console.log(pokemon);
// };

//Alara taught me about the .filter

const starterPokemon = pokedex.filter((pokemon) => {
    return pokemon.starter === true;
});

console.log("Pokemon available to choose as a Starter:\n", starterPokemon);

game.iChooseYou = function(starter) {
      for (let pokemon of pokedex) {
        if(pokemon.name === starter) {
          this.party.push(pokemon);
          console.log(`I Choose You! ${starter}!`);
          return;
        }
      }
};

// gave up on trying to use the .find
// game.iChooseYou = function() {
//     pokedex.find((starter) => {
//     (pokedex.name(starter) === true);
//     pokedex.name.push(starter);
//    })
// };

game.iChooseYou("Pikachu");

console.log("Current Party:\n", game.party);

/*-------------------------------------------------------------------------------------------------------------------------------
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

game.throwPokeBall = function(caught) {
  for (let pokemon of pokedex) {
    if(pokemon.name === caught) {
      this.party.push(pokemon);
      console.log(`You caught ${caught}! Congrats!`);
      return;
    }
  }
};

game.throwPokeBall('Sandshrew');
game.throwPokeBall('Cubone');
game.throwPokeBall('Psyduck');

console.log("Current Party:\n", game.party);

/*----------------------------------------------------------------------------------------------------------------
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

for (let gym of game.gyms) {
  if (gym.difficulty <= 3) {
    gym.completed = true;
    console.log(`You defeated the gym leader of ${gym.location}!`);
  }
};

// console.log(game.gyms);

/*------------------------------------------------------------------------------------------------------------------------
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into.
When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/

//pokemon evolve... 
//    game.party.splice('position', '0 to add, 1 to replace', 'info thats going in')

