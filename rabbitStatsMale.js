import { rabbitsDatabase } from './database.js';

function randIntOfInts(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function randStatsMale() {
  const sex = 0;

  const randMaturationPeriod = randIntOfInts(
    rabbitsDatabase.male.maturationPeriodMin,
    rabbitsDatabase.male.maturationPeriodMax,
  );
  // console.log('randMaturationPeriod', randMaturationPeriod);

  const randNaturalAge = randIntOfInts(
    rabbitsDatabase.male.naturalAgeMin,
    rabbitsDatabase.male.naturalAgeMax,
  );
  // console.log('randNaturalAge', randNaturalAge);

  return {
    sex,
    randMaturationPeriod,
    randNaturalAge,
  };
}

// console.log('randStatsMale', randStatsMale());
