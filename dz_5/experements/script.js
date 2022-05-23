const app = new Vue({
    el: '#app',
    data: {
        name: 'Geek'
    }
});
console.log(app);

let name = 'Dima'
let sername = 'Imad'
let phone = '79119266909'
let line = `BEGIN:VCARD\nVERSION:2.1\nN:${name};${sername}\nFN:${sername} ${name}\nORG:\nTEL;CELL:+${phone}\nEMAIL:\nEND:VCARD\n\n`
console.log(line)


let phones = [79876865659,79867281974,79881046746,79890313379,79103056169,79892825867,79852107452,79197441859,79828198632,79812139358]
let names = ['Дима','Коля','Вова','Митя','Олег','Антон','Марина','Ольга','Матрос','Коляныч','Николай']
let surnames = ['Коля','Вова','Митя','Олег','Антон','Марина','Ольга','Матрос']
function choose(choices) {
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function genFile(phones, names, surnames) {
    let rezult;
    for (let phone of phones) {
        let name = choose(names);
        let surname = choose(surnames);
        let line = `BEGIN:VCARD\nVERSION:2.1\nN:${name};${surname}\nFN:${surname} ${name}\nORG:\nTEL;CELL:+${phone}\nEMAIL:\nEND:VCARD\n\n`;
        rezult+=line;
    }
    return rezult
}

let rez = genFile(phones, names, surnames)

