let roads = [
  ["A", "B"],
  ["A", "C"],
  ["A", "P"],
  ["B", "T"],
  ["D", "E"],
  ["E", "G"],
  ["G", "F"],
  ["G", "S"],
  ["M", "F"],
  ["M", "P"],
  ["M", "S"],
  ["M", "T"],
  ["S", "T"],
]
let edges = roads.reduce((a, b) => a.concat(b)).filter((a, b) => a != b);
function collect(arr){
  let newArr = [];
  for (let el of arr){
    if (!newArr.includes(el)){
      newArr.push(el);
    }
  }
  return newArr;
}
console.log(collect(edges))