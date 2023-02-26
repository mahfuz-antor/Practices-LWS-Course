const getMax = (a, b) => Math.max(a, b);

const result = [1, 5, 7, 10, 0, 22, 37].reduce(getMax);

console.log(result);
