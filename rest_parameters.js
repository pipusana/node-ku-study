function myFunction(a,  b, ...manyMoreArgs) {
    console.log('a', a) // 1
    console.log('b', b) // 2
    console.log('manyMoreArgs', manyMoreArgs) // [3, 4, 5]
}

myFunction(1, 2, 3, 4, 5)

// console.log('-------------------')
// myFunction(1, 2, '3', [4], {number:5})
