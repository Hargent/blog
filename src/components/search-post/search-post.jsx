import PropTypes from "prop-types";

function SearchPosts({ searchQuery, setSearchQuery }) {
	return (
		<input
			value={searchQuery}
			onChange={e => setSearchQuery(e.target.value)}
			placeholder="Search posts..."
		/>
	);
}
SearchPosts.propTypes = {
	searchQuery: PropTypes.string,
	setSearchQuery: PropTypes.func
};
export default SearchPosts;
