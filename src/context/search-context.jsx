import { createContext, useState } from "react";

import PropTypes from "prop-types";

const SearchContext = createContext(null);

const SearchContextProvider = ({ children }) => {
	const [searchQuery, setSearchQuery] = useState("");
	return (
		<SearchContext.Provider
			value={{
				searchQuery: searchQuery,
				setSearchQuery: setSearchQuery
			}}>
			{children}
		</SearchContext.Provider>
	);
};

SearchContextProvider.propTypes = {
	children: PropTypes.node
};
export { SearchContext, SearchContextProvider };
