const parametresPrix = {
  ram_go: {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    6: 20,
    8: 20,
    12: 40,
    16: 40,
  },
  stockage_go: {
    4: 10,
    8: 20,
    16: 30,
    32: 45,
    64: 70,
    128: 110,
    256: 180,
    512: 310,
    1024: 560,
  },
  etat: {
    DEEE: -100,
    reparable: -50,
    bloque: -20,
    reconditionnable: -5,
    reconditionne: 0,
    quasineuf: 10,
    neuf: 20,
  },
  aspect: {
    ME: 0,
    correct: 50,
    BE: 100,
  },
  reseau: {
    3: 0,
    4: 70,
    5: 100,
  },
  ecouteurs: {
    false: 0,
    true: 40,
  },
  categorie: {
    0: 1,
    90: 2,
    165: 3,
    255: 4,
    375: 5,
  },
  prix: {
    1: 10,
    2: 25,
    3: 35,
    4: 50,
    5: 80,
  },
};

export default parametresPrix;
