import Button from "./Button";

function Input({ numSquareHandler, addSquareHandler, numSquares }) {
  const handleKeyPress = (e) => {
    if (
      !/^\d$/.test(e.key) &&
      !["Backspace", "ArrowLeft", "ArrowRight"].includes(e.key)
    ) {
      e.preventDefault();
    }

    const inputValue = Number(e.target.value + e.key, 10);
    if (inputValue < 1 || inputValue > 8) {
      e.preventDefault();
    }
  };

  return (
    <div>
      <input
        value={numSquares}
        type="number"
        min={3}
        max={8}
        onChange={numSquareHandler}
        onKeyDown={handleKeyPress}
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
