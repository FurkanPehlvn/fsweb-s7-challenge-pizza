import { useState } from "react";
import { Button } from "reactstrap";
export const Counter = () => {
  const [counter, setCounter] = useState(1);

  const arttir = () => setCounter(counter + 1);
  const azalt = () => setCounter(counter - 1);

  return (
    <>
      <div className="counter">{counter}</div>
      <div>
        <Button onClick={arttir} color="primary">
          +
        </Button>

        <Button onClick={azalt} color="primary">
          -
        </Button>
      </div>
    </>
  );
};
