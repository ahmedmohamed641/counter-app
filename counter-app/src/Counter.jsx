import { useEffect, useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const randomColor = Math.floor(Math.random() * 16777215);
    document.body.style.backgroundColor = "#" + randomColor;
  }, [count]);

  const AddButton = () => {
    setCount(count + 1);
  };

  const SubstractButton = () => {
    setCount(count - 1);
  };

  const ResetButton = () => {
    setCount(count - count);
  };

  return (
    <>
      <p id="counter">{count}</p>
      <button onClick={AddButton}>+1</button>
      <button onClick={ResetButton}>Reset</button>
      <button onClick={SubstractButton}>-1</button>
    </>
  );
}
