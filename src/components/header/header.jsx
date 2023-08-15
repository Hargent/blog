import PropTypes from "prop-types";
import Results from "../results/results";
import SearchPosts from "../search-post/search-post";

function Header({ posts, onClearPosts, searchQuery, setSearchQuery }) {
	return (
		<header>
			<h1>
				<span>⚛️</span>The Atomic Blog
			</h1>
			<div>
				<Results posts={posts} />
				<SearchPosts
					searchQuery={searchQuery}
					setSearchQuery={setSearchQuery}
				/>
				<button onClick={onClearPosts}>Clear posts</button>
			</div>
		</header>
	);
}
Header.propTypes = {
	posts: PropTypes.array,
	onClearPosts: PropTypes.func,
	searchQuery: PropTypes.string,
	setSearchQuery: PropTypes.func
};
export default Header;
