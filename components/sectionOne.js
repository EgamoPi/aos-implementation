import { createElement as $ } from "react";
import styles from "./../styles/Home.module.css";

const sectionOne = () =>
	$(
		"div",
		{ className: styles.sectionOneContainer },
		$("p", { className: styles.paragraph, "data-aos": "fade-up" }, "Welcome")
	);

export default sectionOne;
