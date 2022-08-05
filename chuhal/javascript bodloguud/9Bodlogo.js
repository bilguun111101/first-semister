let a = 10, p = 0;
function h(a) {
for (let i = 1; i <= a; i++) {
    if (i % 2 == 0) {}
    else{
        console.log('i: ', i);
        p = p + i;
    }
}
console.log(p);
}
let l = h(a);
console.log(l);