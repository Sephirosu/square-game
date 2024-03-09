function Sort({ sortByHandler, sortBy }) {
  return (
    <div className="m-2 border-2 border-black fixed">
      <select value={sortBy} onChange={sortByHandler}>
        <option value="ascending">ASC</option>
        <option value="descending">DESC</option>
      </select>
    </div>
  );
}

export default Sort;
