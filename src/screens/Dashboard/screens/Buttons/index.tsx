import Button from "../../../../components/Button";

const Buttons = () => {
  return (
    <div className="m-4 p-2" >
      <h1>Buttons</h1>
      <Button variant="outlined" startIcon="faceIcon" endIcon="cancelIcon" />
      <Button variant="text" startIcon="cancelIcon" />
      <Button size="lg" color="primary" />
      <Button variant="default" size="sm" disableShadow color="secondary" />
      <Button variant="default" disableShadow disabled color="danger"  />
    </div>
  );
};

export default Buttons;
