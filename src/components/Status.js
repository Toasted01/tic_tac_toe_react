import React from 'react';

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
export default Status;