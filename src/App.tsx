import "./App.css";

import Button from "./components/Button";

function App() {
  return (
    <>
      <h1>Buttons</h1>
      <Button variant="outlined" />
      <Button variant="text" />
      <Button variant="default" />
      <Button variant="default" disableShadow />
    </>
  );
}

export default App;
