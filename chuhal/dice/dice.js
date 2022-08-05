const dice2 = document.getElementsByClassName('dice2')[0];
const dice1 = document.getElementsByClassName('dice1')[0];
const btn = document.getElementsByClassName('start')[0];
let out = document.getElementsByClassName('out')[0];
let out1 = document.getElementsByClassName('out1')[0];
let index1 = 0;
let index = 0;
let count = 0;
let running = false;
let win, win1;

// function show(){
//     index++;
//     for(let i = 0; i < dice1.length; i++){
//         dice1[i].style.display = 'none';
//     }
//     if(index === dice1.length){
//         index = 0;
//     }
//     dice1[index].style.display = 'block';
//     out.innerText = index + 1;
//     setTimeout(show, 100);
//     running = true;
// }

// function show1(){
//     index1++;
//     for(let j = 0; j < dice2.length; j++){
//         dice2[j].style.display = 'none';
//     }
//     if(index1 === dice2.length){
//         index1 = 0;
//     }
//     dice2[index1].style.display = 'block';
//     out1.innerText = index1 + 1;
//     setTimeout(show1, 80);
//     running = true;
// }

// btn.addEventListener('click', ()=>{
//     count++;
//     for(;;){
//         if(count % 2 === 1){
//             show();
//             show1();
//         }
//         else{
//             running = false;
//             break;
//         }
//     }
// })

let smile = document.getElementsByClassName('smile')[0];
let onoo1 = document.getElementsByClassName('onoo1')[0];
let onoo2 = document.getElementsByClassName('onoo2')[0];
let hariu1 = 0;
let hariu2 = 0;

function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++){
        color = color + letters[Math.floor(Math.random() * 16)]
    }
    return color;
}

function show(count){
    if(count % 2 === 1){
        onoo1.style.color = getRandomColor();
        let p = 0;
        let add = 0;
        let textNumber = 0;
        p = Math.ceil(Math.random() * 6);
        dice1.src = `dice${p}.webp`;
        textNumber = parseInt(onoo1.innerText);
        add = textNumber + p;
        onoo1.innerText = add;
        if(parseInt(onoo1.innerText) >= 50){
            onoo1.innerText = 0;
        }
    }
    return win = parseInt(onoo1.innerText);
}

function show1(count){
    if(count % 2 === 0){
        onoo2.style.color = getRandomColor();
        let o = 0;
        let add1 = 0
        let textNumber1 = 0;
        o = Math.ceil(Math.random() * 6);
        dice2.src = `dice${o}.webp`;
        textNumber1 = parseInt(onoo2.innerText);
        add1 = textNumber1 + o;
        onoo2.innerText = add1;
        if(parseInt(onoo2.innerText) >= 50){
            onoo2.innerText = 0;
        }
    }
    return win1 = parseInt(onoo2.innerText);
}

btn.addEventListener('click', ()=>{
    count++;
    show(count);
    if(win >= 48){
        // smile.src = mouth.png;
        onoo1.innerText = 'WINNER';
    }
    show1(count);
    if(win1 >= 48){
        // smile.src = mouth.png;
        onoo2.innerText = 'WINNER';
    }
})