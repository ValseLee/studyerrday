// Logical Operators
// &&(and), ||(or), !(negative), !!(booleanize)

let num = 21;
if(!(num >= 0 && num < 9)) {
    console.log('Thumbs up');
} else {
    console.log('Too big');
}

if (num != 8) {
    console.log('nono');
}

console.log(true && true);
console.log(true && false);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || false);


console.log(!!'text');
console.log(!'text');
