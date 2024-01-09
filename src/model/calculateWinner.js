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
  export default calculateWinner;