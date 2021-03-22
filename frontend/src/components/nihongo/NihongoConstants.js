export const counters = [
  {counter: 'つ', note: 'Generic counter for objects, but only for 1-9'},
  {counter: '個', note: 'Generic counter for objects'},
  {counter: '人', note: 'Counter for people'},
  {counter: '本', note: 'Counter for lengthy objects, like pens'},
  {counter: '百', note: 'Hundred'},
  {counter: '分 (minutes)', note: 'Counter for the minutes time unit, not to be confused with percentages'},
];

export const trickQuestion = 'Trick Question!';

var kansuujiOrder = ['零'];
const tens = ['','二','三','四','五','六','七','八','九'];
const ones = ['','一','二','三','四','五','六','七','八','九'];
ones.slice(1).forEach(n => kansuujiOrder.push(n));
for (var i=0; i<tens.length; i++) {
  for (var j=0; j<ones.length; j++) {
    kansuujiOrder.push(tens[i] + '十' + ones[j]);
  }
}
export var kansuujiOrder;