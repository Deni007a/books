//Самозапоминаюбщиеся функции



function isPrime(value) {
    // если нету кеша то создаем его
    if (!isPrime.answers) {
        isPrime.answers = {};
    }
    // если значение не пустое добовляем его в кеш
    if (isPrime.answers[value] !== undefined) {
        return isPrime.answers[value];
    }

    // черная магия которая вычисляет простое число или нет
   let prime = value !== 1;
    for (let i = 2; i < value; i++) {
        if (value % i === 0) {
            prime = false;
            console.log(prime)
            break;
        }
    }
    // возврашем число из кеша попутно добовляем к нему флаг 
    return isPrime.answers[value] = prime;
}

console.assert(!isPrime(5), "это простое число!!" );
console.assert(!isPrime(9), "это не простое число!!" );
console.assert(!isPrime.answers[5], "Ответ закеширован!" );
// содержимое кеша
console.log(isPrime.answers);