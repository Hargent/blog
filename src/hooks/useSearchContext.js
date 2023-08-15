import { SearchContext } from "../context/search-context";
import { useContext } from "react";

const useSearchContext = () => {
	const context = useContext(SearchContext);
	if (context === undefined)
		throw new Error("SearchContext was used outside of the SearchProvider");

	return context;
};

export default useSearchContext;
