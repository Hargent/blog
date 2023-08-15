import { useEffect, useState } from "react";

import Archive from "../components/archive/archive";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Main from "../components/main/main";
import { PostContextProvider } from "../context/post-context";
import { SearchContextProvider } from "../context/search-context";

function App() {
	const [isFakeDark, setIsFakeDark] = useState(false);

	// Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
	useEffect(
		function () {
			document.documentElement.classList.toggle("fake-dark-mode");
		},
		[isFakeDark]
	);

	return (
		<section>
			<SearchContextProvider>
				<PostContextProvider>
					<button
						onClick={() => setIsFakeDark(isFakeDark => !isFakeDark)}
						className="btn-fake-dark-mode">
						{isFakeDark ? "☀️" : "🌙"}
					</button>

					<Header />
					<Main />
					<Archive />
					<Footer />
				</PostContextProvider>
			</SearchContextProvider>
		</section>
	);
}

export default App;
