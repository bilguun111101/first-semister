let p = 0;
let numberElement = document.getElementById("too")

const addElement = document.getElementById("nemeh")
const minusElement = document.getElementById("hasah")

// function op(){
//     p++;
//     document.getElementById('too').innerHTML = p;
// }

// function up(){
//     p--;
//     document.getElementById('too').innerHTML = p;
// }

addElement.addEventListener('click', () =>{
    p++;
    numberElement.innerText = p;
});
minusElement.addEventListener('click', () => {
    p--;
    numberElement.innerText = p;
});