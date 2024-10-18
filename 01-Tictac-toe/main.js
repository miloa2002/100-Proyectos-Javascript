
document.addEventListener("DOMContentLoaded", () => {
    const figures = document.querySelectorAll(".figure");
    const btnNewGame = document.querySelector(".btn-new-game");
    const pickPlayer = document.querySelector(".pick-player");
    const boardGame = document.querySelector(".board-game");
    const winner = document.querySelector(".winner");
    const result = document.querySelector(".result");

    boardGame.style.display = "none";
    winner.style.display = "none";

    const board = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer;
    
    figures.forEach(figure => {
        figure.addEventListener("click", () => {
            figures.forEach(e => e.classList.remove("active"));
            figure.classList.add("active")
            
            currentPlayer = figure.textContent
            if(currentPlayer) {
                btnNewGame.addEventListener("click", () => {
                    pickPlayer.classList.add("pick-player-inactive");
                    boardGame.style.display = "grid";
                    winner.style.display = "block";
                });
                return;
            }
        });
    });

    board.forEach((element, index) => {
        const div = document.createElement("DIV");
        div.classList.add("cell");

        div.addEventListener("click", (e) => createGame(e, index));

        div.innerText = element;
        boardGame.appendChild(div);
    });

    function createGame(e, index) {

        if(board[index] !== "") {
            alert("La celda ya está ocupada");
            return;
        }
        
        board[index] = currentPlayer;
        e.target.innerText = currentPlayer;

        currentPlayer = currentPlayer === "X" ? "O" : "X";

        validateWinner(0,1,2);
        validateWinner(3,4,5);
        validateWinner(6,7,8);
        validateWinner(0,3,6);
        validateWinner(1,4,7);
        validateWinner(2,5,8);
        validateWinner(2,4,6);
        validateWinner(0,4,8);
    };

    function validateWinner(c1, c2, c3) {
        if(board[c1].length > 0 && board[c1] === board[c2] && board[c2] === board[c3]) {
            result.textContent = board[c1];

            setTimeout(() => {
                location.reload();
            }, 1000)
        }
    }

});