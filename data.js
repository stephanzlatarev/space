const data = [

  {
    label: "Температура",
    unit: "Градуси (Целзий)",
    projections: {
      daily: [ 18, 18.5, 19, 20, 21.5, 22, 21, 19, 18 ],
      yearly: [ 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21 ],
    },
    limits: {
      min: 0,
      max: 40,
      daily: {
        lower: [ 14, 14.5, 15, 15.5, 16, 16, 15.5, 15, 14 ],
        upper: [ 30, 30.5, 31, 31.5, 32, 32, 31.5, 31, 30 ],
      },
      yearly: {
        lower: 14,
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
