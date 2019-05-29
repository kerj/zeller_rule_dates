export function Weekdays(date) {
  let dateArray = date.split('-');
  let m = parseInt(dateArray[1]);
  let k = parseInt(dateArray[2]);
  let d = 0;
  let c = 0;

  findDay(dateArray);

  function findDay(dateArray){
    let year = dateArray[0].slice(0, 0);



    console.log(year);
  }

  // f = k + [(13*m-1)/5] + D + [D/4] + [C/4] - 2*C
  return dateArray;
}
