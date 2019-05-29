import { Weekdays } from './../src/weekdays.js';

describe('Weekdays', function(){

  it('should take in a date and resturn that date', function(){
    let date = 7;
    expect(Weekdays(date)).toEqual(date);
  });
});
