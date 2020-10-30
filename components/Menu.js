import { createElement as $ } from "react";
import styles from "../styles/Menu.module.css";

const Menu = () =>
	$(
		"div",
		{
			className: styles.overlay + " " + styles.overlaySlideLeft,
			id: styles.overlay,
		},
		$(
			"nav",
			null,
			$(
				"ul",
				null,
				$(
					"li",
					{ className: styles.slideOut1, id: styles.nav1 },
					$("a", { href: "#home" }, "Home")
				),
				$(
					"li",
					{ className: styles.slideOut2, id: styles.nav2 },
					$("a", { href: "#about" }, "About")
				),
				$(
					"li",
					{ className: styles.slideOut3, id: styles.nav3 },
					$("a", { href: "#skills" }, "Skills")
				),
				$(
					"li",
					{ className: styles.slideOut4, id: styles.nav4 },
					$("a", { href: "#projects" }, "Contact")
				)
			)
		)
	);

export default Menu;
