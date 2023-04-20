import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') throw new TypeError('Amount must be a number');
    if (!(currency instanceof Currency)) throw new TypeError('currency must be a Currency');
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof amount !== 'number') throw new Error('Amount must be a number');
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency({ code, name }) {
    if (!(this._currency instanceof Currency)) throw new TypeError('currency must be a Currency');
    this._currency = new Currency(code, name);
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}
