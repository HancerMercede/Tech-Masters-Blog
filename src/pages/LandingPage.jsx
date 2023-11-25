import SearchBar from "../components/Home/SearchBar";
import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "../hooks/useQuery";
import DarkMode from "../components/DarkMode/DarkMode";
import Home from "./Home/Home";
// import Header from "../components/Home/Header/Header";

/*Note: here we pass the search as a key to reutilized the components that we already has and pass the search by props to used in the child component */
export const LandingPage = () => {
  const query = useQuery();
  const search = query.get("search");

  const debouncedSearch = useDebounce(search, 300);
  return (
    <div>
      {/* <Header /> */}
      <DarkMode />
      <SearchBar />
      <Home key={debouncedSearch} search={debouncedSearch} />
    </div>
  );
};
