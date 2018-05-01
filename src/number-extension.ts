interface Number {
  padLeftZero: (length: number) => string;
}

Number.prototype.padLeftZero = function (length: number): string {
  const value = this.toFixed(0);
  const arr = new Array(length);
  const zeros = arr.join('0');
  const str = zeros + value;
  return str.slice(-length);
};
