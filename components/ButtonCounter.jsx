import { useState } from 'react';

export const ButtonCounter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);
  return (
    <button className="block w-full p-3 my-1 rounded text-left bg-gray-600 opacity-50" onClick={increment}>
      {count}
    </button>
  );
};
