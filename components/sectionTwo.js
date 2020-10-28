import { createElement as $ } from "react";
import styles from "./../styles/Home.module.css";

const sectionTwo = () =>
	$(
		"div",
		{ className: styles.sectionTwoContainer },
		$(
			"p",
			{ className: styles.paragraph, "data-aos": "fade-right" },
			"Hi there"
		)
	);

export default sectionTwo;
