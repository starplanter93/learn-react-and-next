import React from 'react';
import './button.css';

export default function Button({ text, color, children }) {
  const onClick = (e) => {
    console.log(e);
  };

  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className='button'
    >
      {children}
    </button>
  );
}
