const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  const gabungData = [...await promiseTheaterIXX(), ...await promiseTheaterVGC()];
  let hitung = 0;
  gabungData.forEach(dataHasil => {
    if (dataHasil.hasil === emosi) {
      hitung++;
    }
  });
  return hitung;
};

module.exports = {
  promiseOutput,
};
