import { createContext, useState } from "react";

import PropTypes from "prop-types";
import createRandomPost from "../components/create-random-post/create-random-post";
import useSearchContext from "../hooks/useSearchContext";

const PostContext = createContext(null);

const PostContextProvider = ({ children }) => {
	const { searchQuery } = useSearchContext();
	const [posts, setPosts] = useState(() =>
		Array.from({ length: 30 }, () => createRandomPost())
	);

	const searchedPosts =
		searchQuery.length > 0
			? posts.filter(
					post =>
						`${post.title} ${post.body}`
							.toLowerCase()
							.includes(searchQuery.toLowerCase())
					// eslint-disable-next-line no-mixed-spaces-and-tabs
			  )
			: posts;

	function handleAddPost(post) {
		setPosts(posts => [post, ...posts]);
	}

	function handleClearPosts() {
		setPosts([]);
	}

	return (
		<PostContext.Provider
			value={{
				posts: searchedPosts,
				onClearPosts: handleClearPosts,

				onAddPost: handleAddPost
			}}>
			{children}
		</PostContext.Provider>
	);
};

PostContextProvider.propTypes = {
	children: PropTypes.node
};
export { PostContext, PostContextProvider };
