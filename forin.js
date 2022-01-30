const numberList = [10, 20, 30, 40, 50, 60, 70];
for (const index in numberList) {
  console.log(index);
}

const object = { 1: 'One', 2: 'Two'}
for (const key in object) {
    console.log('key', key)
    // console.log(object[key]);
}