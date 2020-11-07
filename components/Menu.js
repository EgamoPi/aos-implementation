import React, { createElement as $, useRef } from "react";
import styles from "../styles/Menu.module.css";

const Menu = React.forwardRef((props, ref) => {
	const { ref1, ref2, ref3, ref4, ref5, ref6 } = ref;

	return $(
		"div",
		{
			className: styles.overlay + " " + styles.overlaySlideLeft,
			id: styles.overlay,
			ref: ref1,
		},
		$(
			"nav",
			{ ref: ref6, ...props },
			$(
				"ul",
				null,
				$(
					"li",
					{ className: styles.slideOut1, id: styles.nav1, ref: ref2, ...props },
					$("a", { href: "#home" }, "Home")
				),
				$(
					"li",
					{ className: styles.slideOut2, id: styles.nav2, ref: ref3, ...props },
					$("a", { href: "#about" }, "About")
				),
				$(
					"li",
					{ className: styles.slideOut3, id: styles.nav3, ref: ref4, ...props },
					$("a", { href: "#skills" }, "Skills")
				),
				$(
					"li",
					{ className: styles.slideOut4, id: styles.nav4, ref: ref5, ...props },
					$("a", { href: "#projects" }, "Contact")
				)
			)
		)
	);
});

export default Menu;
