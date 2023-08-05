import "./styles.css";

const SearchBar = ({ value, handleSearchKey, clearSearch, formSubmit }) => (
  <div className="searchBar-Wrap">
    <form onSubmit={formSubmit}>
      <input
        type="text"
        onChange={handleSearchKey}
        placeholder="Search by category"
        value={value}
      />

      {value && <span onClick={clearSearch}>❌</span>}

      <button type="submit">
        <span>🔎 Go</span>
      </button>
    </form>
  </div>
);

export default SearchBar;
