/*
 * Practice WOD: sum of numbers
 * Curtis Frifeldt
 * 2/5/17
 *
 * Try1: DNF
 * Try2: 19.21
 */

let numbers = [1, 2, 3, 4, 5];

function sumFor(list) {
  let total = 0;
  for (let num of list) {
    total += num;
  }
  return total;
}
console.log(sumFor(numbers));

function sumWhile(list) {
  let total = 0;
  let i = 0;
  while(i < list.length) {
    total += list[i];
    i++;
  }
  return total;
}
console.log(sumWhile(numbers));

function sumRecursion(list){
  if (list.length === 0) {
    return 0;
  }
  else {
    return list[0] + sumRecursion(list.slice(1, list.length));
  }
}
console.log(sumRecursion(numbers));

function sumTheSimpleWay(list) {
  return _.reduce(list, function(a, b){ return a + b; });
}
console.log(sumTheSimpleWay(numbers));