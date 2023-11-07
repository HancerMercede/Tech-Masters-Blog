import Header from "../components/Home/Header";
import SearchBar from "../components/Home/SearchBar";
import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "../hooks/useQuery";
import Home from "./Home/Home";

/*Note: here we pass the search as a key to reutilized the components that we already has and pass the search by props to used in the child component */
export const LandingPage = () => {
  const query = useQuery();
  const search = query.get("search");

  const debouncedSearch = useDebounce(search, 300);
  return (
    <>
      <Header />
      <SearchBar />
      <Home key={debouncedSearch} search={debouncedSearch} />
    </>
  );
};
