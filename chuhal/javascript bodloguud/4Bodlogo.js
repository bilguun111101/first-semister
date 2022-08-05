let n = 9;
let l = true;
for (let i = 2; i < n; i++){
    if (n % i == 0){
        console.log("anhnii too bish");
        l = false;
        break;
    }
    else{
        l = true;
    }
}
if (l == true) {
    console.log("anhnii too mun");
}