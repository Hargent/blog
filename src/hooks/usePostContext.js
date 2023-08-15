import { PostContext } from "../context/post-context";
import { useContext } from "react";

const usePostContext = () => {
	const context = useContext(PostContext);
	if (context === undefined)
		throw new Error("PostContext was used outside of the PostProvider");

	return context;
};
export default usePostContext;
