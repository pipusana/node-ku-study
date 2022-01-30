// const array = [10, 20, 30, 40, 50]
// const result = array.reduce((previousValue, currentValue) => {
//     return previousValue + currentValue
// }, 0) // default value
// console.log('result', result) // 152
// ---------------------
// loop   previousValue                  currentValue      return 
//   1      0(default value)               10            (0+10) = 10
//   2      10                             20            (10+20) = 30
//   3      30                             30            (30+30) = 60
//   4      60                             40            (60+40) = 100
//   5      100                            50            (100+50) = 150

const userInfoList = [
    {
        name: 'jim',
        age: 27,
    },
    {
        name: 'Por',
        age: 25,
    },
    {
        name: 'lukgolf',
        age: 20,
    },
    {
        name: 'lukpat',
        age: 19,
    }
]
const result = userInfoList
                .filter(userInfo => userInfo.age >= 20)
                .reduce((sumAge, userInfo) => sumAge + userInfo.age, 0)
console.log('result', result)