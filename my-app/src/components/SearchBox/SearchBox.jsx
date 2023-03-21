import "./SearchBox.scss";

const SearchBox = (props) => {
  const { handleInput, searchTerm, handleSubmit } = props;

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <p>Search city:</p>
      <input
        type="text"
        label="Search"
        value={searchTerm}
        onInput={handleInput}
        className="search-box__input"
        onSubmit={handleSubmit}
      />
      <button onSubmit={handleSubmit}>Search</button>
    </form>
  );
};

export default SearchBox;
