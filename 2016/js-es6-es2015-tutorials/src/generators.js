function* g1() {
  console.log('Hello')
  yield 'Yield 1 Ran...'
  console.log('World')
  yield 'Yield 2 Ran...'
  return 'Returned...'
}

const g = g1()

// console.log(g.next())
// console.log(g.next())
// console.log(g.next())

for (let val of g) {
  console.log(val)
}