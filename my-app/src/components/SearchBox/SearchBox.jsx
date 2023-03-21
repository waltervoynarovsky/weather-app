import "./SearchBox.scss";

const SearchBox = (props) => {
  const { handleInput, searchTerm } = props;

  return (
    <form className="search-box">
      <p>Search city:</p>
      <input
        type="text"
        label="Search"
        value={searchTerm}
        onInput={handleInput}
        className="search-box__input"
      />
    </form>
  );
};

export default SearchBox;
