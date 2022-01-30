const numberList = [10, 20, 30, 40, 50]
numberList.forEach(value => {
    console.log('value', value)
    // 10
    // 20
    // 30
    // 40
    // 50
});

const stringList = ['A', 'B', 'C', 'D', 'E']
stringList.forEach(value => {
    console.log('value', value)
    // 1 -> A
    // 2 -> B
    // 3 -> C
    // 4 -> D
    // 5 -> E
})

// --------------------
// for (let i=0; i<5; i++){
//     console.log(numberList[i])
//     numberList[0] -> 10
//     numberList[1] -> 20
//     numberList[2] -> 30
//     numberList[3] -> 40
//     numberList[4] -> 50
// }

// let loop=0
// while(loop<5) {
//     console.log(numberList[loop])
//     loop++
// }