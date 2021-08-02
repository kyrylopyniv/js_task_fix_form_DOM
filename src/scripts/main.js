'use strict';

const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  input.placeholder = firstLetterCaps(input.name);

  input.insertAdjacentHTML('beforebegin',
    `<label class='field-label' for=${input.id}>${input.name}</label>`
  );
};

function firstLetterCaps(text) {
  const result = text.toLowerCase();

  return result.charAt(0).toUpperCase() + result.slice(1);
}

// write code here
