import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows=3, ncols=3, chanceLightStartsOn=.5 }) {
  const [board, setBoard] = useState(createBoard());
  /** create a board nrows high/ncols wide, each cell randomly lit or unlit 
   *
   * Is there a better way to do this??
  */
  function createBoard() {
    let initialBoard = [];    
    for(let i = 0; i < nrows; i++){
      let col = [];
      for (let k = 0; k < ncols; k++){
        if(Math.random() < chanceLightStartsOn) col.push(true)
        else col.push(false)
      }
      initialBoard.push(col)
    }
    return initialBoard;
  }

  /**Checks board state if all lights are off
   * returns boolean
   */
  function hasWon() {
    return board.reduce((acc, row) => {
      const rowVal = row.reduce((acc, val) => {
        if(!val && acc) return true
        return false
      },true)
      if(rowVal && acc) return true
      return false
    }, true)
  }

  function flipCellsAround(coord) {
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      // TODO: Make a (deep) copy of the oldBoard
      let boardCopy = board.map(row => [...row])

      // TODO: in the copy, flip this cell and the cells around it
      flipCell(y,x, boardCopy)
      flipCell(y-1,x, boardCopy)
      flipCell(y+1,x, boardCopy)
      flipCell(y,x-1, boardCopy)
      flipCell(y,x+1, boardCopy)

      // TODO: return the copy
      return boardCopy
    });
  }

  // if the game is won, just show a winning msg & render nothing else
  if(hasWon()){
    return(
      <div className="Board">
        <h1>You Win!</h1>
      </div>
    )
  }

  // make table board
  return (
    <table className="Board">
      <tbody>
      {board.map((row, y) => (
          <tr key={y}>
            {row.map((val, x) => (
              <Cell 
                isLit={val} 
                flipCellsAroundMe={()=>flipCellsAround(`${y}-${x}`)}
                id={`${y}${x}`}
                key={x}
              />
            ))}          
          </tr>
        ))}
      </tbody>
    </table>
    )
}
export default Board;
