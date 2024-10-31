// Import libraries using ES Module syntax
import sw from 'star-wars-quotes';
import superheroes, { randomSuperhero } from 'superheroes';  // Import full superheroes library
import supervillains, { randomSupervillain } from 'supervillains';
import fs from 'fs';


// Log a Star Wars quote
console.log("Hello, World!");

// Assuming sw() returns a random quote
console.log(sw());  // Logs a random Star Wars quote

// Get random superhero and supervillain
const hero = randomSuperhero();  // Get a random superhero
const villain = randomSupervillain();  // Get a random supervillain

// Log an epic battle
console.log(`Epic Battle: ${hero} vs. ${villain}`);

fs.readFile('./data/input.txt', 'utf8', (err,data) => {
    if (err) {
        console.error(err);
        return;

    };

});


