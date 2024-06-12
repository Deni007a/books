"use strict"



// видим без "use strict" аргумент можно искуственно изменить
//Assertion failed: The person is a gardener
// Assertion failed: The first argument is a gardener
// Assertion failed: The first argument is now a ninja

// с использование "use strict" это не проходит и вывод
//Assertion failed: The person is a gardener
// Assertion failed: The first argument is a gardener
// Assertion failed: The first argument is now a ninja
// как мы видим отЛИЧИЕ ТУТ!!!!!!!
// Assertion failed: The person is still a gardener
function infiltrate(person){
    console.assert(person !== 'gardener',
        'The person is a gardener');
    console.assert(arguments[0] !== 'gardener',
        'The first argument is a gardener');

    arguments[0] = 'ninja';

    console.assert(arguments[0] !== 'ninja',
        'The first argument is now a ninja');

    console.assert(person !== 'gardener',
        'The person is still a gardener');
}

infiltrate("gardener");