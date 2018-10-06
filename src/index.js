class SmartCalculator {
  constructor(initialValue) {
    this.value = initialValue;
    // return eval(this.str);
  }
  valueOf() {
    return eval(this.value);
  }

  add(number) {
    this.value += `+ ${number}`;
    return this;
    // your implementation
  }

  subtract(number) {
    this.value += `- ${number}`;
    return this;
    // your implementation
  }

  multiply(number) {
    this.value += `* ${number}`;
    return this;
    // your implementation
  }

  devide(number) {
    this.value += `/ ${number}`;
    return this;
    // your implementation
  }

  pow(number) {
    this.value += `** ${number}`;
    return this;
    // your implementation
  }
}

module.exports = SmartCalculator;
