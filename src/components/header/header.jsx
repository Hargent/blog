import Results from "../results/results";
import SearchPosts from "../search-post/search-post";
import usePostContext from "../../hooks/usePostContext";

function Header() {
	const { onClearPosts } = usePostContext();
	return (
		<header>
			<h1>
				<span>⚛️</span>The Atomic Blog
			</h1>
			<div>
				<Results />
				<SearchPosts />
				<button onClick={onClearPosts}>Clear posts</button>
			</div>
		</header>
	);
}

export default Header;
