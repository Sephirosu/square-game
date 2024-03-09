import { useState, useMemo } from "react";
import Button from "./Button";

function App() {
  const [squares, setSquares] = useState([]);
  const [numSquares, setNumSquares] = useState(3);
  const [sortBy, setSortBy] = useState("ascending");

  const newSquare = (id) => ({
    width: "60px",
    height: "60px",
    backgroundColor: "white",
    border: "solid",
    margin: "5px",
    id: id,
  });

  const newSquares = () =>
    Array.from({ length: numSquares }, (_, index) => newSquare(index + 1));

  const sortedSquares = useMemo(() => {
    const copySquares = [...squares];
    if (sortBy === "ascending") {
      copySquares.sort((a, b) => a.id - b.id);
    } else if (sortBy === "descending") {
      copySquares.sort((a, b) => b.id - a.id);
    }
    return copySquares;
  }, [squares, sortBy]);

  const addSquareHandler = () => {
    setSquares(newSquares());
  };

  const addNewSquare = (index) => {
    setSquares((prevSquares) => {
      if (prevSquares.length < 8) {
        const newSquaresArray = [...prevSquares];
        let newSquareId = newSquaresArray.length + 1;

        while (newSquaresArray.some((square) => square.id === newSquareId)) {
          newSquareId++;
        }

        newSquaresArray.splice(index + 1, 0, newSquare(newSquareId));
        return newSquaresArray;
      }
      return prevSquares;
    });
  };

  const numSquareHandler = (e) => {
    setNumSquares(Math.min(e.target.value, 8));
  };

  const sortByHandler = (e) => {
    setSortBy(e.target.value);
  };

  const removeSquareHandler = (id) => {
    setSquares((prevSquares) =>
      prevSquares.filter((square) => square.id !== id)
    );
  };

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

      <div className="m-2 border-2 border-black fixed">
        <select value={sortBy} onChange={sortByHandler}>
          <option value="ascending">ASC</option>
          <option value="descending">DESC</option>
        </select>
      </div>

      <div className="flex mt-10">
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
    </div>
  );
}

export default App;
