import React, { useState } from 'react';
import calculateWinner from '../model/calculateWinner';
import Status from './Status';
import Square from './Square';

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

  export default Grid;