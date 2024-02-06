import { useState } from "react";
import "./App.css";

import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Arrancamos</h1>
      <Button variant="success" />
    </>
  );
}

export default App;
