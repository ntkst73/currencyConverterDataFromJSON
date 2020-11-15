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

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

      inputRub.addEventListener('input', () => {
        const request = new XMLHttpRequest(); //запрос
        //методы
        request.open('GET', 'js/current.json');  // собираем настрйоки
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); //тип
        request.send();  // принимает данные
        
        //свойства
        /* 
        status  200 успешно 
        statusText 200 успешно
        response ответ от сервера
        readyState состояние запроса  1 -был вызван 4 завершено
        */

        request.addEventListener('load', () => {
            if (request.status === 200) {
                const data = JSON.parse(request.response);
                inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
            }

            else {
                inputUsd.value = "Что то пошло не так";
            }
        });
    });