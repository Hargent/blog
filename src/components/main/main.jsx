import FormAddPost from "../form-add-post/form-add-post";
import Posts from "../post/post";
import PropTypes from "prop-types";

function Main({ posts, onAddPost }) {
	return (
		<main>
			<FormAddPost onAddPost={onAddPost} />
			<Posts posts={posts} />
		</main>
	);
}
Main.propTypes = {
	posts: PropTypes.array,
	onAddPost: PropTypes.func
};
export default Main;
