import React from 'react';

export default function ReactButton({children}) {
  const buttonFunction = () => alert('you clicked me');

  return (
    <button onClick={buttonFunction}>
      {children}
    </button>
  );
}