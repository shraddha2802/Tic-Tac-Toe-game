let boxes = document.querySelectorAll(".box");
let resetbtn =  document.querySelector("#reset_btn");
let newgamebtn = document.querySelector("#new_btn");
let msgcontanier = document.querySelector(".msg_contanier");
let msg = document.querySelector("#msg");

let turnO = true;  //playerX,playerO

const Winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]; 

 const resetGme = () => {
turnO = true;
enableBoxes();
msgcontanier.classList.add("hide");
}

boxes.forEach ((box) => {
   box.addEventListener("click" ,() => {
    if(turnO){
        box.innerText = "O";
        box.style.color = "green";
        turnO = false;

    }else{
        box.innerText = "X";
        box.style.color = "#b0413e";
        turnO = true;
    }
    box.disabled = true;
    checkWinner();
   });
});
 
const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
}
 

const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const ShowWinner = (Winner) => {
    msg.innerText = `Congratulation,winner is ${Winner}`;
    msgcontanier.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for(let pattern of Winpattern){
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val === pos2val && pos2val === pos3val){
           console.log("Winner" ,pos1val);
            ShowWinner(pos1val);

        }
    }
    }
}

newgamebtn.addEventListener("click",resetGme);
resetbtn.addEventListener("click",resetGme);
