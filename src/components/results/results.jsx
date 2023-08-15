import usePostContext from "../../hooks/usePostContext";

function Results() {
	const { posts } = usePostContext();
	return <p>🚀 {posts.length} atomic posts found</p>;
}

export default Results;
