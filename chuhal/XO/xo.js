let box1 = document.getElementsByClassName('box');
let count = 0;
let btn = document.getElementsByClassName('btn')[0];
let winner = document.getElementsByClassName('winner')[0];
let background = document.getElementsByTagName('body');

function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++){
        color = color + letters[Math.floor(Math.random() * 16)]
    }
    return color;
}

for (let i = 0; i < box1.length; i++) {
    box1[i].addEventListener("click", function (e) {
        count++;
        // console.log(count)
        if(count % 2 === 1){
            box1[i].innerHTML = 'X';
            winner.innerHTML = 'O-iin eelj'
        }
        else{
            box1[i].innerHTML = 'O';
            winner.innerHTML = 'x-iin eelj'
        }

        //x

        if(box1[0].innerHTML === 'X' && box1[1].innerHTML === 'X' && box1[2].innerHTML === 'X'){
            winner.innerHTML = 'Winner X';
            document.body.style.backgroundImage = "url('winner.gif')";
            document.getElementsByClassName('omg')[0].style.display = 'none';
        }
        else if(box1[3].innerHTML === 'X' && box1[4].innerHTML === 'X' && box1[5].innerHTML === 'X'){
            winner.innerHTML = 'Winner X';
            document.body.style.backgroundImage = "url('winner.gif')";
            document.getElementsByClassName('omg')[0].style.display = 'none';
        }
        else if(box1[6].innerHTML === 'X' && box1[7].innerHTML === 'X' && box1[8].innerHTML === 'X'){
            winner.innerHTML = 'Winner X';
            document.body.style.backgroundImage = "url('winner.gif')";
            document.getElementsByClassName('omg')[0].style.display = 'none';
        }
        else if(box1[0].innerHTML === 'X' && box1[3].innerHTML === 'X' && box1[6].innerHTML === 'X'){
            winner.innerHTML = 'Winner X';
            document.body.style.backgroundImage = "url('winner.gif')";
            document.getElementsByClassName('omg')[0].style.display = 'none';
        }
        else if(box1[1].innerHTML === 'X' && box1[4].innerHTML === 'X' && box1[7].innerHTML === 'X'){
            winner.innerHTML = 'Winner X';
            document.body.style.backgroundImage = "url('winner.gif')";
            document.getElementsByClassName('omg')[0].style.display = 'none';
        }
        else if(box1[2].innerHTML === 'X' && box1[5].innerHTML === 'X' && box1[8].innerHTML === 'X'){
            winner.innerHTML = 'Winner X';
            document.body.style.backgroundImage = "url('winner.gif')";
            document.getElementsByClassName('omg')[0].style.display = 'none';
        }
        else if(box1[0].innerHTML === 'X' && box1[4].innerHTML === 'X' && box1[8].innerHTML === 'X'){
            winner.innerHTML = 'Winner X';
            document.body.style.backgroundImage = "url('winner.gif')";
            document.getElementsByClassName('omg')[0].style.display = 'none';
        }
        else if(box1[2].innerHTML === 'X' && box1[4].innerHTML === 'X' && box1[6].innerHTML === 'X'){
            winner.innerHTML = 'Winner X';
            document.body.style.backgroundImage = "url('winner.gif')";
            document.getElementsByClassName('omg')[0].style.display = 'none';
        }

        //o

        if(box1[0].innerHTML === 'O' && box1[1].innerHTML === 'O' && box1[2].innerHTML === 'O'){
            winner.innerHTML = 'Winner O';
            document.body.style.backgroundImage = "url('winner.gif')";
            document.getElementsByClassName('omg')[0].style.display = 'none';
        }
        else if(box1[3].innerHTML === 'O' && box1[4].innerHTML === 'O' && box1[5].innerHTML === 'O'){
            winner.innerHTML = 'Winner O';
            document.body.style.backgroundImage = "url('winner.gif')";
            document.getElementsByClassName('omg')[0].style.display = 'none';
        }
        else if(box1[6].innerHTML === 'O' && box1[7].innerHTML === 'O' && box1[8].innerHTML === 'O'){
            winner.innerHTML = 'Winner X';
            document.body.style.backgroundImage = "url('winner.gif')";
            document.getElementsByClassName('omg')[0].style.display = 'none';
        }
        else if(box1[0].innerHTML === 'O' && box1[3].innerHTML === 'O' && box1[6].innerHTML === 'O'){
            winner.innerHTML = 'Winner O';
            document.body.style.backgroundImage = "url('winner.gif')";
            document.getElementsByClassName('omg')[0].style.display = 'none';
        }
        else if(box1[1].innerHTML === 'O' && box1[4].innerHTML === 'O' && box1[7].innerHTML === 'O'){
            winner.innerHTML = 'Winner O';
            document.body.style.backgroundImage = "url('winner.gif')";
            document.getElementsByClassName('omg')[0].style.display = 'none';
        }
        else if(box1[2].innerHTML === 'O' && box1[5].innerHTML === 'O' && box1[8].innerHTML === 'O'){
            winner.innerHTML = 'Winner O';
            document.body.style.backgroundImage = "url('winner.gif')";
            document.getElementsByClassName('omg')[0].style.display = 'none';
        }
        else if(box1[0].innerHTML === 'O' && box1[4].innerHTML === 'O' && box1[8].innerHTML === 'O'){
            winner.innerHTML = 'Winner O';
            document.body.style.backgroundImage = "url('winner.gif')";
            document.getElementsByClassName('omg')[0].style.display = 'none';
        }
        else if(box1[2].innerHTML === 'O' && box1[4].innerHTML === 'O' && box1[6].innerHTML === 'O'){
            winner.innerHTML = 'Winner O';
            document.body.style.backgroundImage = "url('winner.gif')";
            document.getElementsByClassName('omg')[0].style.display = 'none';
        }
    });

    // function getRandomColor(){
    //     let letters = '0123456789ABCDEF';
    //     let color = '#';
    //     for (let i = 0; i < 6; i++){
    //         color = color + letters[Math.floor(Math.random() * 8)]
    //     }
    //     return color;
    // }

    btn.addEventListener('click', ()=>{
        winner.innerHTML = ''
        box1[i].innerHTML = '';
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = '#000';
        document.getElementsByClassName('omg')[0].style.display = 'grid'
    })
}