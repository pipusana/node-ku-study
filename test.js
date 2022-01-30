const number = 3
const convertToText = number => {
    const nums = {1: 'one', 2: 'two', 3: 'three'}
    return nums[number] // nums[3] -> three
}
const result = convertToText(number)
console.log(result)