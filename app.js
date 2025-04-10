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

// let pokeNum = pokedex[game.party]

// used ai to help me figure out where i was going wrong in setting up the if and else statement regarding findIndex, the rest was what 
// i came up with from lecture notes and MDN searching -- i cant tell if its bloated or not at this point it was tough to get it
// to do what i wanted.. call function say whos evolving and it does it
game.evolve = function(evolution) {
      const pokeNum = pokedex.findIndex(pokemon => pokemon.name === evolution);
      if (pokeNum !== pokedex.length -1) {
        const evolve = game.party.findIndex(pokemon => pokemon.name === evolution);
        const evolving = pokedex[pokeNum +1];
        const evolved = pokedex[pokeNum +1].name;
        game.party.splice(evolve, 1, evolving)
        console.log(`Congratulations! ${evolution}, has evolved into ${evolved}!`)
        // console.log(game.party);
      }
      else {
        console.log("This Pokemon failed to evolve.")
      }
  };

game.evolve('Pikachu');
game.evolve('Sandshrew');
game.evolve('Cubone');
game.evolve('Psyduck');

// console.log(game.party);
// const starterPokemon = pokedex.filter((pokemon) => {
//   return pokemon.starter === true;
// });

/*--------------------------------------------------------------------------------------------------------------------------
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

// for (let pokemon of game.party) {
//   console.log('Current Party:', pokemon.name);
// }

// took what i learned from question 9 and applied it here
const currentParty = game.party.map(pokemon => pokemon.name).join(', ');
console.log('Current Party:', currentParty);

/*--------------------------------------------------------------------------------------------------------------------------
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/

// for (let pokemon of starterPokemon) {
//   console.log('Starter Pokemon:', pokemon.name);
// }

// i cheated.. the above section is what i came up with but i couldnt remember how to use .map and .join
// i had already used filter previously for the starterPokemon.map
const starterNames = starterPokemon.map(pokemon => pokemon.name).join(', ');
console.log('Starter Pokemon:', starterNames);

/*--------------------------------------------------------------------------------------------------------------------------------------------
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/

// i think this satifies the requirements.. i built this function earlier
game.throwPokeBall('Growlithe');

/*---------------------------------------------------------------------------------------------------------------------------------------
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/

game.throwPokeBall = function(caught) {
  for (let pokemon of pokedex) {
    if(pokemon.name === caught) {
      this.party.push(pokemon);
      for (let items of game.items) {
        if (items.name === 'pokeball') {
          items.quantity = items.quantity-1;
        }
      }
      console.log(`You caught ${caught}! Congrats!`);
      console.log('-1 Pokeball');
      return;
    }
  }
};

game.throwPokeBall('Oddish');

console.log(game.items);

/*-------------------------------------------------------------------------------------------------------------------------------------------------
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/
 // copy and pasted.. made small adjustment
for (let gym of game.gyms) {
  if (gym.difficulty > 3 && gym.difficulty < 6) {
    gym.completed = true;
    console.log(`You defeated the gym leader of ${gym.location}!`);
  }
};

// console.log(game.gyms);

/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/


game.gymStatus = function() {
  const gymTally = { 
    complete: 0,
    incomplete: 0,
  }
  for (let gym of game.gyms) {
    if (gym.completed === true) {
      gymTally.complete = gymTally.complete +1;
    }
    else { 
      gymTally.incomplete = gymTally.incomplete +1;
    }
  }
  console.log("Current Gym Status:", gymTally);
  return gymTally;
};

game.gymStatus();

/*-----------------------------------------------------------------------------------------------------------------------------------------------------
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/

game.partyCount = function() {
  console.log(`You have a total of ${game.party.length} pokemon in your party!`);
};

game.partyCount();

/*----------------------------------------------------------------------------------------------------------------------------------------------
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/
 // again im just copy pasting and changing some of the values in the if statement

 for (let gym of game.gyms) {
  if (gym.difficulty > 6 && gym.difficulty < 8) {
    gym.completed = true;
    console.log(`You defeated the gym leader of ${gym.location}!`);
  }
};

/*--------------------------------------------------------------------------------------------------------------------------------------------------
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/
 
// i created a few methods that werent called for so far.. but i had a lot of fun and wanted to really challenge/learn myself
console.log(game);

/*----------------------------------------------------------------------------------------------------------------------------------------------------------------
Exercise 17
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 17 here:
*/

// used MDN .sort nto figure this out.  most of these methods and function setups ill need to see quite a few times to get use to them, but im getting there
function sortParty() {
  game.party.sort((lowHp, highHp) => highHp.hp - lowHp.hp)
};

sortParty()
console.log(game.party);

/*-------------------------------------------------------------------------------------------------------------------------------------------
Exercise 18
Add a new property to the `game` object called `collection` and initialize its value to an empty array.

Copy the `catchPokemon` method you wrote in Exercise Twelve and paste it below. Modify it so that:
  - Ensure that no more than six Pokemon can be in the party at any time. 
    Excess Pokemon should be placed in the `game.collection` array.
  - It's up to you how to distribute Pokemon in a situation where more than six 
    would be placed into the `game.party` array.

Again, for this exercise, it's okay to have a negative number of pokeballs.

After updating the method, use it by calling it and passing in a pokemon object of your choice from the `pokemon` data to catch it.

Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 18 here:
*/

game.collection = [];

function isPokemon(isPokemon) {
  for (let pokemon of pokedex) {
    if (pokemon.name.toLowerCase() === isPokemon.toLowerCase()) {
      return pokemon.name; 
    }
  }
};
function catchPokemon(catchPokemon) {
  for (let pokemon of pokedex) {
    if (pokemon.name.toLowerCase() === catchPokemon.toLowerCase()) {
      return pokemon;
    }
  }
};

game.throwPokeBall = function(throwBall) {
    if (game.items[1].quantity >= 1) {
      if (isPokemon(throwBall).toLowerCase() === throwBall.toLowerCase()) {
        this.party.push(catchPokemon(throwBall));
        sortParty();
        console.log(`You caught ${isPokemon(throwBall)}! Congrats!`);
        game.items[1].quantity = game.items[1].quantity - 1;
      }
      if (this.party.length > 5) {
        this.collection.push(this.party.pop()); 
        console.log(`${game.collection[game.collection.length-1].name} has been sent to collection.`);
      } 
    }
    else {
      console.log("You ran out of Pokeballs! You run away.");
    }
  };

game.throwPokeBall('mEwTwo');
game.throwPokeBall('mew');
game.throwPokeBall('squIrtle');
game.throwPokeBall('Mr. Mime');
game.throwPokeBall('Jynx');


/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------
Exercise 19
Copy the `catchPokemon` method that you just wrote above, and paste it below. The time has come to make it so that we cannot catch a Pokemon when we do not have any pokeballs to catch it with. 

Modify the method so that if there are no pokeballs a message will be displayed that there are not enough pokeballs to catch the desired Pokemon.

Also, ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 19 here:
*/

game.throwPokeBall = function(throwBall) {
  if (game.items[1].quantity >= 1) {
    if (isPokemon(throwBall).toLowerCase() === throwBall.toLowerCase()) {
      this.party.push(catchPokemon(throwBall));
      sortParty();
      console.log(`You caught ${isPokemon(throwBall)}! Congrats!`);
      game.items[1].quantity = game.items[1].quantity - 1;
    }
    if (this.party.length > 5) {
      this.collection.push(this.party.pop()); 
      console.log(`${game.collection[game.collection.length-1].name} has been sent to collection.`);
    } 
  }
  else {
    console.log("You ran out of Pokeballs! You run away.");
  }
};

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Exercise 20
Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify is so that you can just pass in the name of a Pokemon instead of an entire object, and the method will look up the Pokemon from the data set for you.

The string passed in should be allowed to be any case (for example, if the string 'PiKacHU' is passed to the function, it should match to 'Pikachu' in the data set). 

If there is not a match, then return a string noting that the selected Pokemon does not exist. Ensure you do not decrement the pokeball count if an invalid Pokemon name is passed in, and also ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 20 here:
*/

function checkExist(pokemonName) {
  return pokedex.some((pokemon) => pokemon.name.toLowerCase() === pokemonName.toLowerCase()); 
};

game.throwPokeBall = function(throwBall) {
  if (checkExist(throwBall) === true) {
    if (game.items[1].quantity >= 1) {
      if (isPokemon(throwBall).toLowerCase() === throwBall.toLowerCase()) {
        this.party.push(catchPokemon(throwBall));
        sortParty();
        console.log(`You caught ${isPokemon(throwBall)}! Congrats!`);
        game.items[1].quantity = game.items[1].quantity - 1;
      }
      if (this.party.length > 5) {
        this.collection.push(this.party.pop()); 
        console.log(`${game.collection[game.collection.length-1].name} has been sent to collection.`);
      } 
    }
    else {
      console.log("You ran out of Pokeballs! You run away.");
    }
  }
    else { 
    console.log('Pokemon does not exist, please check spelling.')
  }
};

game.throwPokeBall('aBra');
game.throwPokeBall('notApokemon');
game.throwPokeBall('sNoRlax');
game.throwPokeBall('Beedrill');
game.throwPokeBall('doesntExist');

console.log("Party:\n", game.party);
console.log("Items:\n", game.items);
console.log("Collection:\n", game.collection);

/* -------------------------------------------------------------------------------------------------------------------------------------------------------------
Exercise 21
Dynamically construct an object with the existing `pokemon` data sorted by the different pokemon types. The object will have this structure:

{
  grass: [
    { number: 1, name: 'Bulbasaur', type: 'grass', hp: 45, starter: true },
    { number: 2, name: 'Ivysaur', type: 'grass', hp: 60, starter: false },
    { number: 3, name: 'Venusaur', type: 'grass', hp: 80, starter: false },
    * more grass type Pokemon objects...
  ],
  fire: [
    { number: 4, name: 'Charmander', type: 'fire', hp: 39, starter: true },
    * more fire type Pokemon objects...
  ],
  water: [
    * water type Pokemon objects...
  ],
  * etc... until there is an array for every Pokemon type!
}

Log the object when it's constructed.

Solve Exercise 21 here:
*/

// create a function that goes through all the pokedex looking at type and sort into an object of arrays by type and also name the arrays...
// had to get a lot of help for this, and played around with the function to see how it works and understand it.  again replicating this
// kind of stuff will be difficult right away i need to see it in more cases in different ways to truly grasp it.

function sortByType() {
  let sorted = {};
// defining a new object that can change
  for (let pokemon of pokedex) {
    if (!sorted[pokemon.type]) {
 // if (sorted[pokemon.type] === undefined) {
 //  sorted[pokemon.type] comes back as the string of the type for the current pokemon iterated in the loop
      sorted[pokemon.type] = [];
//    new array under object named sorted [current pokemon.pokemon type] = the string of the type for that pokemon, 
//    and names a new array as that string
    }
    sorted[pokemon.type].push(pokemon);
// adds pokemon to the array with the type string that matches its type, after creating a new array or if it already exists it goes
// straight here to push the pokemon data to the array
  }  
  return sorted;
  // need to return the object that was created after the data was added to it, pokemon sorted by type
};

const sortedPokemon = sortByType(pokedex);
console.log("Pokemon sorted by type:\n", sortedPokemon);

// not sure what dynamically construct meant, probably do something like i was doing here in the following, but i decided to try to build
// the function instead

// const sortedByType = {
//   grass: const grassPokemon = pokedex.filter((pokemon) => {
//    return pokemon.type === 'grass';
// });
//   fire:
//   water:
//   bug:
//   normal:
//   poison:
//   electric:
//   ground:
//   fairy:
//   fighting:
//   psychic:
//   rock:
//   ghost:
//   ice:
//   dragon: };

// end note: most of these comments were for me as I was going along.. 