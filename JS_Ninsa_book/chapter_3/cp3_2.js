//Coxpaнениe уникальных функций в колекции

let store = {
    nextId: 1,
    cache: {},

    //поместить функцию в кеш если она уникальна
    add: function (fn) {
        if (!fn.id) {
            fn.id = this.nextId++;
            this.cache[fn.id] = fn;
            return true;
        }
    }
};

function ninja() {
};

function ninja2() {
};


// store.add(ninja)
// store.add(ninja)
// store.add(ninja2)


console.assert(!store.add(ninja),
    "Функция была благополучно добавлена.");
console.assert(store.add(ninja),
    "Но оно было добавлено только один раз.");

console.log(store.cache);


//в методе ID сначала проверяется находится ли водимая функция в коллекции по наличе свойства Id
//Если id есть то функция  обработанная  и не добавляется

