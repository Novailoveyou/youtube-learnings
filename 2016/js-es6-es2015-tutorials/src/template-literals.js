const el = document.getElementById('template')

const name = 'John'
const template = `<h1>${toUppercase(`Hello, ${name}`)}<p>This is a simple template in JavaScript</p></h1>`

function toUppercase(word) {
  return word.toUpperCase()
}

el.innerHTML = template