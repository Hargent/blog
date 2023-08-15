import List from "../list/list";
import PropTypes from "prop-types";

function Posts({ posts }) {
	return (
		<section>
			<List posts={posts} />
		</section>
	);
}
Posts.propTypes = {
	posts: PropTypes.array
};
export default Posts;
