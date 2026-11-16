
import { useState } from "react";

function BrokenCounter() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h2>Broken Counter</h2>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Add 1
      </button>
    </section>
  );
}

export default BrokenCounter;
