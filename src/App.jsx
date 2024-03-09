import { useState, useMemo } from "react";

import Input from "./Input";
import Sort from "./Sort";
import AddRemove from "./AddRemove";

const sqr = {
  width: "60px",
  height: "60px",
  backgroundColor: "white",
  border: "solid",
  margin: "5px",
};

function App() {
  const [squares, setSquares] = useState([]);
  const [numSquares, setNumSquares] = useState(3);
  const [sortBy, setSortBy] = useState("ascending");

  const newSquare = (id) => ({
    ...sqr,
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
    const inputValue = e.target.value.trim();

    setNumSquares(inputValue !== "" ? Math.min(inputValue, 8) : "");
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
      <Input
        addSquareHandler={addSquareHandler}
        numSquareHandler={numSquareHandler}
        numSquares={numSquares}
      />
      <Sort sortByHandler={sortByHandler} sortBy={sortBy} />

      <AddRemove
        sortedSquares={sortedSquares}
        removeSquareHandler={removeSquareHandler}
        addNewSquare={addNewSquare}
      />
    </div>
  );
}

export default App;
