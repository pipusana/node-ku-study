const score = 80

if (score >= 80) {
    console.log('Grade: A')
} else if (score >= 50 && score < 80) {
    console.log('Grade: D')
} else {
    console.log('Grade: F')
}
// --------------------
// Ternary operator
const score = 79
const grade = score >= 80 ? 'A': 'F' // (condition) ? true : false
console.log(`Grade: ${grade}`)
