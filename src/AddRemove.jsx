import Button from "./Button";

function AddRemove({ addNewSquare, removeSquareHandler, sortedSquares }) {
  return (
    <div className="flex">
      {sortedSquares.map((square, index) => (
        <div key={square.id} className="flex items-center">
          <div style={square} className="pl-1 pt-1">
            {square.id}
            <Button
              onClick={() => removeSquareHandler(square.id)}
              className="px-2 m-9 text-xl bg-blue-500 border-black  rounded"
            >
              -
            </Button>
          </div>
          {index < sortedSquares.length - 1 && (
            <Button onClick={() => addNewSquare(index)} className="ml-1 p-2">
              +
            </Button>
          )}
        </div>
      ))}
    </div>
  );
}

export default AddRemove;
