import React, { useState, useEffect, useMemo, useCallback } from "react";

function App() {
  const [tech, setTech] = useState(["ReactJs", "React Native"]);
  const [newtech, setNewtech] = useState("");

  const handleAdd = useCallback(() => {
    setTech([...tech, newtech]);
    setNewtech("");
  }, [newtech, tech]);

  useEffect(() => {
    const storageTech = localStorage.getItem("tech");

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tech", JSON.stringify(tech));
  }, [tech]);

  const techSize = useMemo(() => tech.length, [tech]);

  return (
    <>
      <ul>
        {tech.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <strong>Você tem {techSize} tecnologias</strong>
      <input value={newtech} onChange={e => setNewtech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
