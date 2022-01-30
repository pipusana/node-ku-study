function waitForThreeSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log('ผ่านไป 3 วินาที'))
        }, 3000)
    })
}

function waitForFiveSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log('ผ่านไป 5 วินาที'))
        }, 5000)
    })
}

function waitForTwoSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log('ผ่านไป 2 วินาที'))
        }, 2000)
    })
}

waitForThreeSecond()
    .then((resolve) => {
        waitForFiveSecond()
            .then((resolve) => {
                waitForTwoSecond()
                    .then((resolve) => {
                        console.log('--- Complete Run ---')
                    })
            })
    })
// 1,2,3,4

// waitForThreeSecond() // 1
// waitForFiveSecond()  // 2
// waitForTwoSecond()   // 3
// console.log('--- Complete Run ---') // 4
// 4,3,1,2
