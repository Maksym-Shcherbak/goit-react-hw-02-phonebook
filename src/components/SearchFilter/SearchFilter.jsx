export const SearchFilter = ({ filter, onHandleChange }) => {
  return (
    <>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        className="filterInput"
        id="filter"
        value={filter}
        onChange={onHandleChange}
      />
    </>
  );
};
