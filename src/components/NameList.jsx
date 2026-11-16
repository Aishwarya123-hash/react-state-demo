
import { useState } from "react";

function NameList() {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);

  function addName() {
    if (name.trim() !== "") {
      setNames([...names, name]);
      setName("");
    }
  }

  return (
    <section>
      <h2>Name List</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />

      <button onClick={addName}>Add Name</button>

      <ul>
        {names.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default NameList;
