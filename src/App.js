import React, { useState } from "react";

function App() {
  const [tech, setTech] = useState(["ReactJs", "React Native"]);
  const [newtech, setNewtech] = useState("");

  function handleAdd() {
    setTech([...tech, newtech]);
    setNewtech("");
  }

  return (
    <>
      <ul>
        {tech.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <input value={newtech} onChange={e => setNewtech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
