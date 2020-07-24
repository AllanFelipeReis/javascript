// Stacks
var myStack = []
myStack.push(1) // Adiciona um item no final do array
myStack.push(10)
myStack.push(100)
console.log(myStack) // output = [1, 10, 100]
console.log(myStack.pop()) // output = 100 Retira o ultimo item
console.log(myStack) // output = 1, 10

// Queue
var myQueue = []
myQueue.push(1)
myQueue.push(10)
myQueue.push(100)

console.log(myQueue.shift()) // output = 1 Retira o primeiro
console.log(myQueue.shift()) // output = 10
console.log(myQueue.shift()) // output = 100

var myArray = [1, 2, 3]
myArray.unshift(0) // Adiciona na primeira posicao do array
console.log(myArray) // output = 0, 1, 2, 3

// Splice
myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var splice = myArray.splice(3, 5) // Divide o array (init, len)
console.log(splice) // output = 3, 4, 5, 6, 7
console.log(myArray) // output = 0, 1, 2, 8, 9
