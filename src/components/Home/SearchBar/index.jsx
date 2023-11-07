import { useNavigate } from "react-router-dom";
import { useQuery } from "../../../hooks/useQuery";
import "./styles.css";

const SearchBar = () => {
  const query = useQuery();
  const search = query.get("search");

  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="searchBar-Wrap">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search by category"
          value={search ?? ""}
          onChange={(e) => {
            const value = e.target.value;
            history("/?search=" + value);
          }}
          onKeyDown={(e) => e.target.value}
        />
        <button type="submit">
          <span>🔎 Go</span>
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
