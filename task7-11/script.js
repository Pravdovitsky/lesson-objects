const d1  = [45,78,10,3];
const d2 = d1.slice();
const d3 = d1.slice();
const d4 = d1.slice();

//===== Задание 7 =====
d1[7] = 100;

console.log(d1);
console.log(d1[6]);
console.log(d1[7]);

//=====Задание 8 =====
let sum2 = 0;
for (let i = 0; i < d2.length; i++){
    sum2 += d2[i];
}

console.log(`Сумма массива задания 8: ${sum2}`);

//===== Задание 9 =====
d3[7] = 100;
let sum3 = 0;

for (let i in d3){
    sum3 += d3[i];
}

console.log(`Сумма массива задания 9: ${sum3}`);

//===== Задание 10 =====
const my = (a,b) => b - a;

console.log(`Отсортированный массив по убыванию: ${d4.sort(my)}`);

//===== Задание 11 =====
const d5 = [];

for (let i = 0; i < 3; i++){
    d5[i] = [];
    for (let j = 0; j < 3; j++){
        d5[i][j] = 5;
    }
}

console.log(d5);
