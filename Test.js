// var message = "Hello World"
// console.log(message)

function show(...args) {
  let sum = 1
  for(let i of args) {
    sum += i
  }
  console.log("Sum "+sum)
}

show(10,20, 30)