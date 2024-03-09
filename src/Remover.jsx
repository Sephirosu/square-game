import Button from "./Button";

function Remover({ removeSquareHandler, square }) {
  return (
    <div>
      <Button
        onClick={() => removeSquareHandler(square.id)}
        className="px-1 m-10 text-xl bg-blue-500 border-black rounded "
      >
        -
      </Button>
    </div>
  );
}

export default Remover;
