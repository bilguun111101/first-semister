const canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
canvas.width = 560;
canvas.height = 560;
let startX = 0;
let d = 1;
let p = 0;

function black(i, j){
    ctx.fillStyle = "#000"
    if(i % 2 === 0){
        startX = (j + 1) * 70;
        d++;
    }
    else{
        startX = j * 70;
        p++;
    }
    ctx.fillRect(startX, (i * 70) , 70, 70);
}

// function white(i, j){
//     ctx.fillStyle = "transparent"
//     if(i % 2 === 0){
//         let zai = j * 70;
//         ctx.fillRect(zai, i * 70, 70, 70)
//     }
//     else{
//         let zai = (j + 1) * 70;
//         ctx.fillRect(zai, i * 70, 70, 70)
//     }
// }

for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j += 2){
        black(i, j);
        white(i, j);
    }
}