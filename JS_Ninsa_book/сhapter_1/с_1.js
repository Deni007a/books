
// console.time("my") и console.timeEnd("my")  используют для тестирования времени где в скобочках имя метки
// ВОЖНО !!! имя метки должно совпадать

console.time("my");
for (let i = 0; i <100 ; i++) {
    //console.log(i)
}
console.timeEnd("my");