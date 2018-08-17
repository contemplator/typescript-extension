declare interface Number {
  padLeft: (len: number) => string;
}

/**
 * 左邊補 0
 */
Number.prototype.padLeft = function (len: number): string {
  console.log(this);
  const str = this + '';
  if (this > 10) {
    return str;
  } else {
    return new Array(len - str.length + 1).join('0') + str;
  }
};
