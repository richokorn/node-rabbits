import { rabbitsDatabase } from './database.js';

function randIntOfInts(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function randStatsFemale() {
  const sex = 1;

  const randMaturationPeriod = randIntOfInts(
    rabbitsDatabase.female.maturationPeriodMin,
    rabbitsDatabase.female.maturationPeriodMax,
  );
  // console.log('randMaturationPeriod', randMaturationPeriod);

  const randGestationPeriod = randIntOfInts(
    rabbitsDatabase.female.gestationPeriodMin,
    rabbitsDatabase.female.gestationPeriodMax,
  );
  // console.log('randGestationPeriod', randGestationPeriod);

  const randRecoveryPeriod = randIntOfInts(
    rabbitsDatabase.female.recoveryPeriodMin,
    rabbitsDatabase.female.recoveryPeriodMax,
  );
  // console.log('randRecoveryPeriod', randRecoveryPeriod);

  const randKits = randIntOfInts(
    rabbitsDatabase.female.kitsPerLitterMin,
    rabbitsDatabase.female.kitsPerLitterMax,
  );
  // console.log('randKits', randKits);

  const randNaturalAge = randIntOfInts(
    rabbitsDatabase.female.naturalAgeMin,
    rabbitsDatabase.female.naturalAgeMax,
  );
  // console.log('randNaturalAge', randNaturalAge);

  return {
    sex,
    randMaturationPeriod,
    randGestationPeriod,
    randRecoveryPeriod,
    randKits,
    randNaturalAge,
  };
}

// console.log('randStatsFemale', randStatsFemale());
