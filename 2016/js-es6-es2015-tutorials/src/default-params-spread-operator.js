// function greet($greeting = 'Hello World') {
//   console.log($greeting)
// }

// greet()

const args = [1, 2, 3]
const args2 = [4, 5, 6]

function test() {
  console.log(`${args},${args2}`)
}

// test.apply(null, args)
test(...args, ...args2)