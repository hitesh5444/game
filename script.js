let music = new Audio("pic/Background.mp3");
let audioTurn = new Audio("pic/click.wav");
let turn = "X"

const changeTurn = ()=> {
return turn === "X"? "O" : "X"
}

const checkwin = ()=> {

    let boxtext = document.getElementsByClassName('boxtext');

    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],

    ]

        wins.forEach(e =>{
            
            if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== ''))
            document.querySelector('.print').innerText = boxtext[e[0]].innerText + " Is Won"

        })

}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
          turn = changeTurn();
            audioTurn.play();
            music.play();
            checkwin(); 

            document.getElementsByClassName("info_1")[0].innerText = " TURN => " + turn;

        }
    })
})

reset.addEventListener('click', ()=> {

    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = ""
    });

    turn = "X";

    document.getElementsByClassName("info_1")[0].innerText = " TURN => " + turn;

})


    function main() {

        const x = document.getElementById("h1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

    }
