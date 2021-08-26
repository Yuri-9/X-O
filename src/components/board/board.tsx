import './board.scss';
import React, { useState } from 'react';
import { Square } from '../square/square';

import { ISquares } from '../game/game';

interface IBoard {
  squaresValue: ISquares;
  winner: string | null;
  isXNest: boolean;
  onClickSquare: (i: number) => void;
}

export const Board = ({
  squaresValue,
  winner,
  isXNest,
  onClickSquare,
}: IBoard): JSX.Element => {
  return (
    <div>
      <div className="status">
        {winner ? `Won ${winner} !!!!!` : `Next: ${isXNest ? 'X' : 'O'}`}
      </div>
      <div className="board">
        {squaresValue.squares.map((value, i) => (
          <Square
            value={value}
            key={i}
            onClick={() => {
              onClickSquare(i);
            }}
          />
        ))}
      </div>
    </div>
  );
};
