const itemKey = 'example';
const fieldId = 'field';
const finish = window.innerWidth - 100;

const field = document.getElementById(fieldId);
field.style.width = `${finish}px`;

let key = window.localStorage.getItem('example');

if (!key) {
    key = Example.SINGLE;
    window.localStorage.setItem('example', key);
}

document.getElementById('single').addEventListener('click', () => {
    window.localStorage.setItem(itemKey, Example.SINGLE);
    window.location.reload();
});

document.getElementById('all').addEventListener('click', () => {
    window.localStorage.setItem(itemKey, Example.ALL);
    window.location.reload();
});

document.getElementById('race').addEventListener('click', () => {
    window.localStorage.setItem(itemKey, Example.RACE);
    window.location.reload();
});

// change this to true if you want rejecting promises
window.canFall = true;

new Example(fieldId, finish).start(key)
    .then(horse => {
        console.log(horse, ':)');
    })
    .catch(horse => {
        console.log(horse, ':(');
    })
