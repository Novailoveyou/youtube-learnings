// const myArr = [11, 22, 34, 65, 34]
// const mySet = new Set(myArr)

// mySet.add('100')
// mySet.add({ a: 1, b: 2 })
// mySet.delete(22)
// mySet.clear()
// mySet.add('100')
// mySet.add('200')

// console.log(mySet.size)

// mySet.forEach(item => {
//   console.log(item)
// })

// const myMap = new Map([['a1', 'Hello'], ['b2', 'Goodbye']])

// myMap.set('c3', 'Foo')

// myMap.delete('a1')

// console.log(myMap)

// const carWeakSet = new WeakSet()

// const car1 = {
//   make: 'Honda',
//   model: 'Civic',
// }

// const car2 = {
//   make: 'Toyota',
//   model: 'Camry',
// }

// carWeakSet.add(car1)
// carWeakSet.add(car2)

// carWeakSet.delete(car2)

// console.log(carWeakSet)

const carWeakMap = new WeakMap()

const key1 = {
  id: 1
}

const car1 = {
  make: 'Honda',
  model: 'Civic',
}

const key2 = {
  id: 2
}

const car2 = {
  make: 'Toyota',
  model: 'Camry',
}

carWeakMap.set(key1, car1)
carWeakMap.set(key2, car2)

carWeakMap.delete(key1)

console.log(carWeakMap)