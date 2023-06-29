const parametresPrix = {
  ram: {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    6: 20,
    8: 20,
    12: 40,
    16: 40,
  },
  stock: {
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
  anciennete_emmaus: {
    periode: 6,
    remise: 5,
  },
  reseau: {
    troisG: 0,
    quatreG: 70,
    cinqG: 100,
  },
  anciennete_mobile: {
    basePoint: 100,
    decotePoint: 20,
  },
  ecouteur: {
    non: 0,
    oui: 40,
  },
};

export default parametresPrix;
