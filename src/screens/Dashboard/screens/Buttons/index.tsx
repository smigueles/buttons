import Button from "../../../../components/Button";

const Buttons = () => {
  return (
    <div className="m-4 p-2 flex flex-col items-start gap-5 w-full overflow-y-auto">
      <h1>Buttons</h1>
      <h4>{"<Button />"}</h4>
      <Button />
      <h4>{"<Button variant='outlined'/>"}</h4>
      <Button variant="outlined" />
      <h4>{"<Button variant='text'/>"}</h4>
      <Button variant="text" />
      <h4>{"<Button disableShadow/>"}</h4>
      <Button disableShadow />
      <div className="flex gap-6">
        <div className="flex flex-col gap-5">
          <h4>{"<Button disabled/>"}</h4>
          <Button disabled />
        </div>
        <div className="flex flex-col gap-5">
          <h4>{"<Button variant='text' disabled/>"}</h4>
          <Button disabled variant="text" />
        </div>
      </div>
      <div className="flex gap-6">
        <div className="flex flex-col gap-5">
          <h4>{"<Button startIcon='faceIcon'/>"}</h4>
          <Button color="primary" startIcon="faceIcon" />
        </div>
        <div className="flex flex-col gap-5">
          <h4>{"<Button endIcon='faceIcon'/>"}</h4>
          <Button color="primary" endIcon="faceIcon" />
        </div>
      </div>
      <div className="flex gap-6">
        <div className="flex flex-col gap-5">
          <h4>{"<Button size='sm'/>"}</h4>
          <Button color="primary" size="sm" />
        </div>
        <div className="flex flex-col gap-5">
          <h4>{"<Button size='md'/>"}</h4>
          <Button color="primary" size="md" />
        </div>
        <div className="flex flex-col gap-5">
          <h4>{"<Button size='lg'/>"}</h4>
          <Button color="primary" size="lg" />
        </div>
      </div>
      <div className="flex gap-6">
        <div className="flex flex-col gap-5">
          <h4>{"<Button color='default'/>"}</h4>
          <Button />
        </div>
        <div className="flex flex-col gap-5">
          <h4>{"<Button color='primary'/>"}</h4>
          <Button color="primary" />
        </div>
        <div className="flex flex-col gap-5">
          <h4>{"<Button color='secondary'/>"}</h4>
          <Button color="secondary" />
        </div>
        <div className="flex flex-col gap-5">
          <h4>{"<Button color='danger'/>"}</h4>
          <Button color="danger" />
        </div>
      </div>
    </div>
  );
};

export default Buttons;
