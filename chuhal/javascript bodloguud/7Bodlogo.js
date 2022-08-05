let a = 99999, p, l = 0, o = 0, k, m, y = true;
m = a;
while (a > 0) {
    k = a % 10;
    o = o + k;
    a = a / 10;
    p = Math.floor(a);
    a = p;
}
console.log(o);