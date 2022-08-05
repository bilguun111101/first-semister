let p = 0;
function b(a) {
for (let i = 1; i <= a; i++) {
    if (i % 2 == 0) {
        console.log('i: ', i);
        p = p + i;
    }
}
console.log(p);
}
let y = 10;
let q = b(y);
console.log(q);