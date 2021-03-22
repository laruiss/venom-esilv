console.log(1)
const myPromise = new Promise((resolve, reject) => {
  reject('Erreur inattendue')
})

myPromise.then(val => {
  console.log('first', val)
  return 'first'
}).then(str => {
  console.log(str)
}).catch(err => {
  console.error(err)
})

myPromise.then(val => {
  console.log('second', val)
}).catch(err => {
  console.error(err)
})

console.log(2)