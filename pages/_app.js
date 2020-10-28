import { useEffect } from "react";
import AOS from "aos";
import "../styles/globals.css";

import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		AOS.init({
			delay: 2000,
			duration: 800,
		});
	});

	return <Component {...pageProps} />;
}

export default MyApp;
