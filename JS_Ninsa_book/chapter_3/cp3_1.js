// простой пример функции обратного вызова

let text = 'Domo arigato!';
console.log("Прежде чем определять функции");

function useless(ninjaCallback) {
    console.log("Использование бесполезной функции");
    // тут обратный вызов
    return ninjaCallback();
}

function getText() {
    console.log("текстовая функция");
    return text;
}

console.log("Прежде чем совершать все вызовы");

// ВЫЗЫВАЕТСЯ при false, поэтому инвертируем чтобы вызвалось на true
// Тут мы вызываем бесполезную функцию  и передаем ей функцию обратного вызова getText()
console.assert(!useless(getText) === text,
    "Бесполезная функция работает! " + text);


console.log("После совершения вызовов");


// *************************
// Типичны пример функции обратного вызова это сортировка

let values = [0, 3, 2, 5, 7, 4, 8, 1];

values.sort( (value1, value2)=> {
    return value1 - value2;
});

console.log(values)

