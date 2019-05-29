export function Weekdays(date) {
  let dateArray = date.split('-');
  let m = parseInt(dateArray[1]);
  let k = parseInt(dateArray[2]);
  let d = 0;
  let c = 0;
  let f = 0;

  findDay(dateArray);

  function findDay(dateArray){
    c = parseInt(dateArray[0].slice(0,2));
    d = parseInt(dateArray[0].slice(2,4));
    if (m == 1){
      d = (parseInt(dateArray[0].slice(2,4)))-1;
      m = 11;
    }else if (m == 2){
      d = (parseInt(dateArray[0].slice(2,4)))-1;
      m = 12;
    }else{m-=2}
  }
  console.log(d);
  console.log(c);
  console.log(m);

  f = k + Math.floor(((13*m-1)/5)) + d + Math.floor((d/4)) + Math.floor((c/4)) - 2*c;

  console.log(f);
  return dateArray;
}
