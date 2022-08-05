let n = 40, l = true;
if (n > 3) {
    console.log(1);
    console.log(2);
}
for (let i = 2; i < n; i++){
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            l = false;
            break;
        }
        else{
            l = true;
        }
    }
    if (l == true) {
        console.log(i)
    }
}