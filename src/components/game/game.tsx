import React, { useState } from 'react';
import { Board } from '../board/board';
import { calculateWinner } from '../../shared/utils';

export interface ISquares {
  squares: string[] | null[];
}
export const Game = (): JSX.Element => {
  const [history, setHistory] = useState<ISquares[]>([
    {
      squares: Array(9).fill(null),
    },
  ]);
  const [winner, setWinner] = useState<string | null>(null);
  const [step, setStep] = useState<number>(0);

  const handeClickSquare = (i: number) => {
    const currentItemHistory = history[step];
    if (currentItemHistory.squares[i] || winner) return;
    const newSquares = currentItemHistory.squares.slice();
    newSquares[i] = !(step % 2) ? 'X' : 'O';
    const newHistory = history.slice(0, step + 1);
    setHistory(newHistory.concat([{ squares: newSquares }]));
    setWinner(calculateWinner({ squares: newSquares }));
    setStep(newHistory.length);
  };

  const jumpToHistory = (index: number) => {
    setStep(index);
    setWinner(null);
  };

  return (
    <div>
      <Board
        squaresValue={history[step]}
        winner={winner}
        isXNest={!(step % 2)}
        onClickSquare={handeClickSquare}
      />
      <div>
        Step:
        {history.map((itemHistory, index) => (
          <div key={index}>
            {`${index + 1}:`}
            <button onClick={() => jumpToHistory(index)}>
              {!index ? `Go to start` : `Go to step #${index}`}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
