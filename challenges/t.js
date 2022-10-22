let arr = [1, 2, 3];

let arr2 = arr.filter((num) => {
  if (num >= 3) {
    return num;
  }
});

console.log(arr2);
