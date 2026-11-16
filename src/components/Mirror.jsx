
import { useState } from "react";

function Mirror() {
  const [text, setText] = useState("");

  return (
    <section>
      <h2>Mirror Text</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your name"
      />

      <p>You typed: {text}</p>
    </section>
  );
}

export default Mirror;
