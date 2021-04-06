const data = [

  {
    label: "Температура",
    unit: "Градуси (Целзий)",
    projections: {
      daily: 20,
      yearly: 20,
    },
    limits: {
      min: 0,
      max: 40,
      daily: {
        lower: 10,
        upper: 30,
      },
      yearly: {
        lower: 10,
        upper: 30,
      },
    }
  },

  {
    label: "Относителна влажност",
    unit: "Проценти",
    projections: {
      daily: 40,
      yearly: 40,
    },
    limits: {
      min: 0,
      max: 100,
      daily: {
        lower: 20,
        upper: 80,
      },
      yearly: {
        lower: 20,
        upper: 80,
      },
    }
  },

];
