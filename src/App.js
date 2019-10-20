import React, { useState, useEffect } from "react";

function App() {
  const [tech, setTech] = useState(["ReactJs", "React Native"]);
  const [newtech, setNewtech] = useState("");

  function handleAdd() {
    setTech([...tech, newtech]);
    setNewtech("");
  }

  useEffect(() => {
    const storageTech = localStorage.getItem("tech");

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tech", JSON.stringify(tech));
  }, [tech]);

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
