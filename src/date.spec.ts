import { expect } from 'chai';
import 'mocha';

import '../dist/date-extension';

describe('date function', () => {
  const originTime = new Date(2018, 0, 1, 12, 30, 30);
  it('add seconds', () => {
    const newTime = originTime.addSeconds(25);
    expect(newTime.toFormatString('YYYY/MM/DD hh:mm:ss')).to.equal('2018/01/01 12:30:55');
  });

  it('add minutes', () => {
    const newTime = originTime.addMinutes(10);
    expect(newTime.toFormatString('YYYY/MM/DD hh:mm:ss')).to.equal('2018/01/01 12:40:30');
  });

  it('add hours', () => {
    const newTime = originTime.addHours(4);
    expect(newTime.toFormatString('YYYY/MM/DD hh:mm:ss')).to.equal('2018/01/01 16:30:30');
  });

  it('add days', () => {
    const newTime = originTime.addDays(6);
    expect(newTime.toFormatString('YYYY/MM/DD hh:mm:ss')).to.equal('2018/01/07 12:30:30');
  });

  it('add weeks', () => {
    const newTime = originTime.addWeeks(1);
    expect(newTime.toFormatString('YYYY/MM/DD hh:mm:ss')).to.equal('2018/01/08 12:30:30');
  });

  it('add months', () => {
    const newTime = originTime.addMonths(2);
    expect(newTime.toFormatString('YYYY/MM/DD hh:mm:ss')).to.equal('2018/03/01 12:30:30');
  });

  it('add years', () => {
    const newTime = originTime.addYears(2);
    expect(newTime.toFormatString('YYYY/MM/DD hh:mm:ss')).to.equal('2020/01/01 12:30:30');
  });

  it('format datetime string', () => {
    expect(originTime.toFormatString('YYYY/MM/DD hh:mm:ss')).to.equal('2018/01/01 12:30:30');
  });

  it('get the number of day in month', () => {
    const days = originTime.getDaysInMonth(2020, 2);
    expect(days).to.equal(29);

    const days2 = originTime.getDaysInMonth(2019, 2);
    expect(days2).to.equal(28);
  });

  it('count the age of cur datetime', () => {
    const age = originTime.getCurrentAge();
    expect(age).to.equal(0);
  });

  it('count the age of paramter', () => {
    const age = originTime.countAge('1993/01/01');
    expect(age).to.equal(25);
  });


});
