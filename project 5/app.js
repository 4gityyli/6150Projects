const form = document.forms[0];
const output = document.getElementById('output');
const alphabet = [
  'A','B','C','D','E','F','G','H','I','J','K','L', 'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];


form.addEventListener ('submit',event => {
  event.preventDefault();
  output.innerHTML = [... form.input.value ].map(char => encrypt(char)).join('');
  input.value = "";
  degrees.value = "";
}
);

function encrypt(char) {
  const shift = Number(form.degrees.value);
  if (alphabet.includes(char.toUpperCase()))
  { 
    const position = alphabet.indexOf(char.toUpperCase());
    const newPosition = (position + shift)%26;
    return alphabet[newPosition] 
  }
  else { return char }
  }