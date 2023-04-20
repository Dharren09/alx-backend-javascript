export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') throw new TypeError('Size must be a number');
    if (typeof location !== 'string') throw new TypeError('Location must be a string');
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](caller) {
    if (caller === 'string') {
      return this._location;
    }
    if (caller === 'number') {
      return this._size;
    }
    return null;
  }
}
