const rabbitsDatabase = {
  female: {
    maturationPeriodMin: 91,
    maturationPeriodMax: 152,

    gestationPeriodMin: 28,
    gestationPeriodMax: 35,

    recoveryPeriodMin: 5,
    recoveryPeriodMax: 28,

    breedableAgeMax: 1461,

    kitsPerLitterMin: 4,
    kitsPerLitterMax: 6,

    naturalAgeMin: 365,
    naturalAgeMax: 730,
    // naturalAgeLimit: 3652,
  },
  male: {
    maturationPeriodMin: 100,
    maturationPeriodMax: 130,
    breedableAgeLimit: 2558,
    naturalAgeMin: 365,
    naturalAgeMax: 730,
  },
};

export { rabbitsDatabase };
