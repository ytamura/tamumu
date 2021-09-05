export const counters = [
  {counter: 'つ', filter: 'つ',
   note: 'Generic counter for objects, but only for 1-9'},
  {counter: '個', filter: '個',
   note: 'Generic counter for objects'},
  {counter: '人', filter: '人',
   note: 'Counter for people'},
  {counter: '本', filter: '本',
   note: 'Counter for lengthy objects, like pens'},
  {counter: '百', filter: '百',
   note: 'Hundred'},
  {counter: '時', filter: '時',
   note: 'Hour, when telling time. Same readings work for 時間 too.'},
  {counter: '分 (minutes)', filter: '分 (minute',
   note: 'Counter for the minutes time unit, not to be confused with percentages 分 (ぶ)'},
　{counter: '日', filter: '日',
   note: 'Counter for days'},
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