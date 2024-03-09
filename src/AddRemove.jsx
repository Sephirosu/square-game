import Button from "./Button";
import Remover from "./Remover";

function AddRemove({ sortedSquares, addNewSquare, removeSquareHandler }) {
  return (
    <div className="flex mt-10">
      {sortedSquares.map((square, index) => (
        <div key={square.id} className="flex items-center">
          <div style={square} className="pl-1 pt-1">
            {square.id}
            <Remover
              removeSquareHandler={removeSquareHandler}
              square={square}
            />
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
