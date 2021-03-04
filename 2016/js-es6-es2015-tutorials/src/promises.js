// const myPromise = Promise.resolve('Foo')

// myPromise.then((res) => console.log(res))

// const myPromise = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(4), 2000)
// })

// myPromise.then((res) => {
//   res += 3
//   console.log(res)
// })

function getData(method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response)
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        })
      }
    }
    xhr.onerror = () => {
      reject({
        status: this.status,
        statusText: xhr.statusText
      })
    }
    xhr.send()
  })
}

getData('GET', 'https://jsonplaceholder.typicode.com/posts').then((data) => {
  const posts = JSON.parse(data)
  let output = ''
  for (let post of posts) {
    output += `
      <div>
        <h3>
          ${post.id}
          ${post.title}
        </h3>
      </div>
    `
  }

  document.getElementById('template').innerHTML = output
}).catch((err) => {
  console.log(err)
})