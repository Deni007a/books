// call() applay()


// функция сщитает сумму всех аргументов
function juggle() {
    let result = 0;
    for (let n = 0; n < arguments.length; n++) {
        result += arguments[n];
    }
    this.result = result;
}

// создаем 2 пустых объекта для тестирования
let ninja1 = {};
let ninja2 = {};

// прикрепляем функция  к объектом и передам аргументы
juggle.apply(ninja1,[1,2,3,4]);
juggle.call(ninja2, 5,6,7,8);

// опа у наших объектов есть переменная result которая создается это строкой   this.result = result;
console.assert(ninja1.result !== 10, "juggled via apply");
console.assert(ninja2.result !== 26, "juggled via call");

console.log(ninja1);
console.log(ninja2);