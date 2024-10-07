import { useState } from "react"

function Square({value, onSquareClick}) {  

  return <button onClick={onSquareClick} className='h-16 w-16 text-[24px] font-bold border border-slate-500 bg-slate-100'>{value}</button>
}

export default function Board () {

  const [xIsNext, setXIsNext] = useState(true);
  const [square, setSquare] = useState(Array(9).fill(null))

  const handleclick = (i) => {

    if (square[i] || calculateWinner(square)) {
      return
    }

    const nextSquares = square.slice()
    if (xIsNext) {
      nextSquares[i] = 'X'
    }
    else {
      nextSquares[i] = 'O'
    }
    setSquare(nextSquares)
    setXIsNext(!xIsNext)
  }

  const winer = calculateWinner(square)

  let status;
  if (winer) {
    status = 'Winner is ' + winer
  }
  else {
    status = 'Player: ' + (xIsNext ? 'X': 'O')
  }

  return (
    <>
      <div className="status">{status}</div>
    <div className="grid grid-cols-3">
        <Square value={square[0]} onSquareClick={()=> handleclick(0)} />     
        <Square value={square[1]} onSquareClick={()=> handleclick(1)} />
        <Square value={square[2]} onSquareClick={()=> handleclick(2)} />
        <Square value={square[3]} onSquareClick={()=> handleclick(3)} />
        <Square value={square[4]} onSquareClick={()=> handleclick(4)} />
        <Square value={square[5]} onSquareClick={()=> handleclick(5)} />
        <Square value={square[6]} onSquareClick={()=> handleclick(6)} />
        <Square value={square[7]} onSquareClick={()=> handleclick(7)} />
        <Square value={square[8]} onSquareClick={()=> handleclick(8)} />
      </div>
    </>
  )

}

const calculateWinner = (square) => {
    const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a];
    }
  }
}