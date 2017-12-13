"use strict"
console.log("ISSUING the HTTP Reqest")
fetch('/towns.json')
  .then((resp) => {
    if(resp.ok){
      return resp.json()
    }
    else {
      throw('Something bad happened')
    }
  })
  .then(json => {
    let ol = document.getElementById('town-list')
    json.forEach((town) => {
      ol.innerHTML += `<li>TOWN: ${town}</li>`
    })
  })
  .catch((err) => {
    console.log('there was an error')
  })

console.log("Doing other things")
// let rollDie = () => {
//   return Math.floor(Math.random() * 6) + 1;
// }
//
// let rollFor = (num) => {
//   return new Promise((resolve, reject) => {
//     let result = rollDie()
//     if(result === num) {
//       resolve(num)
//     }
//     else{
//       reject(num)
//     }
//   })
// }
//
//
// console.log("rolling twice for a six")
// rollFor(6)
//   .then((num) => {
//     console.log("FIRST ROLL: a six!")
//   }).then(() => {
//     rollFor(6)
//   })
//   .catch((num) => {
//     console.log(`FIRST ROLL: You rolled a ${num}`)
//   })
//
// rollFor(6)
//   .then((num) => {
//     console.log("SECOND ROLL: a six on the second roll!")
//   })
//   .catch((num) => {
//     console.log(`SECOND ROLL: You rolled a ${num}`)
//   })
// console.log("DONE ROLLING")


// let sleep = (time) => {
//   return new Promise((resolve) => setTimeout(resolve, time));
// }
//
// sleep(5000).then(() => {
//   console.log('WAKE UP!')
// });