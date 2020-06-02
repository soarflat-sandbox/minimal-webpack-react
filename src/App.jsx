import React, { useState } from 'react';
import './style.scss';
import dog from './assets/images/dog.jpg';
import Logo from './logo.svg';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h2>Dog</h2>
      <img src={dog} alt="dog" width="400" />
      <h2>Logo</h2>
      <Logo className="logo" />
    </>
  );
}
