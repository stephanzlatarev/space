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
    label: "Относителна влажност на въздуха",
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

  {
    label: "Влажност на почвата",
    unit: "pF",
    projections: {
      daily: 3.2,
      yearly: 3.2,
    },
    limits: {
      min: 2,
      max: 4,
      daily: {
        lower: 3.0,
        upper: 3.4,
      },
      yearly: {
        lower: 3.0,
        upper: 3.4,
      },
    }
  },

];
