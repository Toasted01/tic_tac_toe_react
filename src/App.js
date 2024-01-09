import React, { useState } from 'react';
import './static/style/main.css';

const calculateWinner = (squares) => {
  const lines = [ 
    [0, 1, 2], // First row
    [3, 4, 5], // Second row
    [6, 7, 8], // Third row
    [0, 3, 6], // First column
    [1, 4, 7], // Second column
    [2, 5, 8], // Third column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6], // Diagonal from top-right to bottom-left
  ];

  for (const line of lines){
    const [a,b,c] = line;
    if (squares[a] && squares[a]===squares[b] && squares[a]===squares[c]){
      return squares[a];// returns the value of the square which is the winner
    }
  }
  return null;//no winner found returns null
}

const Status = ({ currentPlayer, winner, squares }) => {
  let statusText;

  const calculateTie = () => {
    return !winner && !squares.includes(null)
  }

  if (winner) {
    statusText = `Player ${winner} wins!`;
  }else if(calculateTie()){
    statusText = "Its a tie!";
  }else {
    statusText = `Player ${currentPlayer}'s turn`;
  }

  

  return <div className="Status">{statusText}</div>;
};

const Square = ({ onClick, value }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

const Grid = () => {
  const startingSquares = Array(9).fill(null)
  const [squares, setSquares] = useState(startingSquares);
  const [playerTurn, setPlayerTurn] = useState('X');

  const handleTurn = (row, col) => {
    const index = row * 3 + col;

    if (squares[index] === null &&!calculateWinner(squares)) {
      // Updating the value of the clicked button
      const newSquares = [...squares];
      newSquares[index] = playerTurn;
      setSquares(newSquares);

      // Toggle between "X" and "O" for the next turn
      setPlayerTurn((currentPlayer) => (currentPlayer === 'X' ? 'O' : 'X'));
    }
  };

  const handleReset = () => {
    setSquares(startingSquares);
    setPlayerTurn('X');
  }

  const renderRow = (row) => {
    return Array(3)
      .fill(null)
      .map((_, col) => (
        <Square key={col} value={squares[row * 3 + col]} onClick={() => handleTurn(row, col)} />
      ));
  };

  const renderGrid = () => {
    return Array(3)
      .fill(null)
      .map((_, row) => (
        <div className="Row" key={row}>
          {renderRow(row)}
        </div>
      ));
  };

 return (
    <div>
      <Status className="Status" currentPlayer={playerTurn} winner={calculateWinner(squares)} squares={squares} />
      <div className="Grid">{renderGrid()}</div>
      <button className="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

class App extends React.Component {
  render() {
    return (
      <div className = "Container">
        <Grid />
      </div>
    );
  }
}

export default App;