import React, { useRef } from 'react';

export default function App25() {
  const divRef = useRef(null);
  const handleColorChange = () => {
    divRef.current.style.backgroundColor = 'skyblue';
  };
  return (
    <div ref={divRef}>
      <p>Hello! Welcome to Lyros</p>
      <button onClick={handleColorChange}>Click</button>
    </div>
  );
};