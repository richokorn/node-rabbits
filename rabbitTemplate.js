import randStatsFemale from './rabbitStatsFemale.js';
import randStatsMale from './rabbitStatsMale.js';

const allRabbits = {
  1: randStatsMale(),

  2: randStatsFemale(),
};

// rabbitTemplate aufrufen, und neue stats von rabbitStatsFemale hinzufügen mit neue ID
console.log(allRabbits);

console.log(Object.keys(allRabbits).length); // rechnet aus wie "lang" der allRabbits Object ist.
