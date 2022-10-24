class VendingMachine {
  constructor() {
    this.credit = 0;
    this.stock = {
      A: {},
      B: {},
      C: {},
    };
  }
  addStock(itemObj, position) {
    this.stock[position] = itemObj;
  }
}

module.exports = { VendingMachine };
