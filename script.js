const num = [1, 2, 3, 4];
const hum = num[0];
num[0] = num[3];
num[3] = hum;
console.log(num);
