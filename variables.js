// Function scope or Global scope
// var name = "Pipusana Petgumpoom" // -> ตัวแปรที่สามารถเปลี่ยนแปลงค่าได้


// Block scope
// let age = 27 // -> ตัวแปรที่สามารถเปลี่ยนแปลงค่าได้
// const sex = "Male" // -> ตัวแปรที่ [ไม่] สามารถเปลี่ยนแปลงค่าได้


// ---------------------------------

// Function scope or Global scope
var number = 1
if (number) {
    var number = 1
    number = 5
}

console.log('number', number) 


// Block scope -> { // Block scope }
// let number = 1
// if (number) {
//    let number = 2
//    number = 4
//    console.log('[if] number:', number)
// }

// console.log('[not if] number', number)