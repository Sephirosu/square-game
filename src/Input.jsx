import Button from "./Button";

function Input({ numSquareHandler, addSquareHandler }) {
  return (
    <div>
      <input
        onChange={numSquareHandler}
        type="number"
        min={3}
        max={8}
        className="border-2 border-black m-2"
      />
      <Button
        onClick={addSquareHandler}
        className="border-2 border-blue-500 px-1"
      >
        Submit
      </Button>
    </div>
  );
}

export default Input;
