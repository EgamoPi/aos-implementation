import { createElement as $ } from "react";
import styles from "./../styles/Home.module.css";

const sectionThree = () =>
	$(
		"div",
		{ className: styles.sectionThreeContainer },
		$("p", { className: styles.paragraph, "data-aos": "fade-left" }, "Welcome")
	);

export default sectionThree;
