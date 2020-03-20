// Import stylesheets
import './style.css';

const form = document.querySelector('form');
let gender = 'female';

// - maiden name must be empty when gender is male
// - name must be at least 2 words, each word starts with capital letter,
//   and each of their length is more than 3 characters
// - email must have <username>@<host>.hu format

const radioButtons = document.querySelectorAll('input[type="radio"]');
for(let radioButton of radioButtons) {
  radioButton.addEventListener('change', function() {
    gender = radioButton.value
  });
}

function isMaidenNameValid() {
  if(gender === 'male') {
    const maidenNameInput = document.getElementById('maiden-name-input');
    return maidenNameInput.value === '' || maidenNameInput.value == null;
  }
  return true
}

function isNameValid() {
  const nameInput = document.getElementById('name-input');
  const names = nameInput.value.split(' ');
  if(names.length < 2) {
    return false;
  }
  for(let name of names) {
    if(name[0].toUpperCase() !== name[0] || name.length < 4) {
      return false;
    }
  }
  return true;
}

function isEmailValid() {
  const emailInput = document.getElementById('email-input');
  return emailInput.value.match(/\w+@\w+\.hu/);
}

form.addEventListener('submit', function(event) {
  if(!isMaidenNameValid() || !isNameValid() || !isEmailValid()) {
    alert('hibás adat');
    event.preventDefault();
    return;
  }
  const thankYouParagraph = document.createElement('p');
  const nameInput = document.getElementById('name-input');
  thankYouParagraph.innerText = 'Thank You, ' + nameInput.value;
  form.parentElement.appendChild(thankYouParagraph);
  form.parentElement.removeChild(form);
});