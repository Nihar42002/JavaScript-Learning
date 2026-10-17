let boxes = document.querySelectorAll(".cell");

let resetButton = document.getElementById("resetButton");

let trun_o = true;

const winningConditions = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((cell) => {
    cell.addEventListener("click", () => {
       console.log("clicked");

       if(trun_o){
        cell.textContent = "O";
        trun_o = false;
    }
    else{
        cell.textContent = "X";
        trun_o = true;
    }

    cell.disabled = true;

    checkWinner();
  });

});

checkWinner = () => {
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (boxes[a].textContent && boxes[a].textContent === boxes[b].textContent && boxes[a].textContent === boxes[c].textContent) 
            {
    if (
        boxes[a].textContent &&
        boxes[a].textContent === boxes[b].textContent &&
        boxes[a].textContent === boxes[c].textContent
        ) 

        {
        winnerMessage.textContent = `${boxes[a].textContent} wins! 🏆`;
winnerMessage.style.display = "flex";

            resetButton.disabled = false;
            return;
        }
        }
    }
};

function resetGame() {
    boxes.forEach(box => {
        box.textContent = "";
        box.disabled = false;
    });

    winnerMessage.textContent = "";
    winnerMessage.style.display = "none";

    currentPlayer = "X";
    gameOver = false;
}

resetButton.addEventListener("click", () => {
    resetButton.classList.add("clicked");

    resetGame();

    setTimeout(() => {
        resetButton.classList.remove("clicked");
    }, 150);
});

