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
            const msg = 'ผ่านไป 2 วินาที'
            resolve(msg)
        }, 2000)
    })
}

const time = async () => {
    try{
        await waitForThreeSecond()
        await waitForFiveSecond()
        const time = await waitForTwoSecond()
        console.log('--> time', time)
        console.log('--- Complete Run ---')
    } catch (err) {
        console.log(`******ERROR****** ${err}`)
    }
}

time()