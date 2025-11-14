const random = (j) => {
    let min = -1;
    let max = 1;
    let choice = Math.floor(Math.random() * (max - min + 1)) + min;
    for(let k=0;k<3;k++){
        btn[k].removeEventListener('click',random);
    }

    let playerChoice = null;
    if (j === 0) {                  //player
        playerChoice = "rock";
    } 
    else if (j === 1) {
        playerChoice = "paper";
    } 
    else if (j === 2) {
        playerChoice = "scissors";
    }

    function retChoice() {                //computer
        if (choice === -1) {
            return "rock";
        } 
        else if (choice === 0) {
            return "paper";
        } 
        else if (choice === 1) {
            return "scissors";
        }
    }

    if (playerChoice === retChoice()) {
        msgBtn.innerText = "It's a tie! You both chose " + playerChoice;
    }
    else if ((playerChoice === "rock" && retChoice() === "scissors") || (playerChoice === "paper" && retChoice() === "rock") || (playerChoice === "scissors" && retChoice() === "paper")) {
        msgBtn.innerText = "You win! " + playerChoice + " beats " + retChoice();
    }
    else {
        msgBtn.innerText = "You lose! " + retChoice() + " beats " + playerChoice;
    }
} 

btn = document.querySelectorAll("button");
for(let i = 0;i<3;i++){
    btn[i].addEventListener('click', () => {
        random(i);
    });
}

msgBtn = document.getElementById("msg");