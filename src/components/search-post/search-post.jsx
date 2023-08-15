import useSearchContext from "../../hooks/useSearchContext";

function SearchPosts() {
	const { searchQuery, setSearchQuery } = useSearchContext();
	return (
		<input
			value={searchQuery}
			onChange={e => setSearchQuery(e.target.value)}
			placeholder="Search posts..."
		/>
	);
}

export default SearchPosts;
