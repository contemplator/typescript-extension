import { expect } from 'chai';
import 'mocha';

import '../dist/number-extension';

describe('number function', () => {
  it('add zero to number left', () => {
    const num = 1;
    expect(num.padLeft(2)).to.equal('01');
  });
});
