import Square from "./Square";

const SquareList = ({ squares, removeSquareHandler, addNewSquare }) => (
  <div className="flex mt-10">
    {squares.map((square, index) => (
      <React.Fragment key={square.id}>
        <Square square={square} removeSquareHandler={removeSquareHandler} />
        {index < squares.length - 1 && (
          <button onClick={() => addNewSquare(index)} className="ml-1 p-2">
            +
          </button>
        )}
      </React.Fragment>
    ))}
  </div>
);

export default SquareList;
