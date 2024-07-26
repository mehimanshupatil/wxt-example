import { useState } from "react";
import { href } from './constant';

export default () => {
  const [count, setCount] = useState(1);
  const increment = () => setCount((count) => count + 1);

  return (
    <div>
      <p>{href}</p>
      <p>This is React. {count}</p>
      <button type='button' onClick={increment}>Increment</button>
    </div>
  );
};
