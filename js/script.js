'use strict';

//глубокое клонирование объекта

const persone = {
    name: 'Nikita',
    tel: '+79278210101',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Ann';
console.log(persone);
console.log(clone);

// калькулятор конвертированиявалюты

