// function Prefixer(prefix) {
//   this.prefix = prefix
// }

// // Prefixer.prototype.prefixArray = function (arr) {
// //   const that = this
// //   return arr.map(function (x) {
// //     console.log(that.prefix + x)
// //   })
// // }

// // a lexical this
// Prefixer.prototype.prefixArray = function (arr) {
//   return arr.map(x => {
//     console.log(this.prefix + x)
//   })
// }

// const pre = new Prefixer('Hello ')
// pre.prefixArray(['Brad', 'Jeff'])


// const add = function (a, b) {
//   const sum = a + b
//   console.log(sum)
//   return false
// }

const add = (a, b) => {
  const sum = a + b
  console.log(sum)
  return false
}

add(10, 2)