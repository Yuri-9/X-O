import './square.scss';
import React, { useState } from 'react';

interface ISquare {
  value: string | null;
  onClick: () => void;
}

export const Square = ({ value, onClick }: ISquare): JSX.Element => {
  return (
    <div className="square" onClick={() => onClick()}>
      {value}
    </div>
  );
};
