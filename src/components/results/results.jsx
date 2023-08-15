import PropTypes from "prop-types";

function Results({ posts }) {
	return <p>🚀 {posts.length} atomic posts found</p>;
}
Results.propTypes = {
	posts: PropTypes.array
};
export default Results;
