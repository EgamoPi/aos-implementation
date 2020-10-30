import Head from "next/head";
import styles from "../styles/Home.module.css";
import { createElement as $ } from "react";
import sectionOne from "../components/sectionOne";
import sectionTwo from "../components/sectionTwo";
import sectionThree from "../components/sectionThree";
import Menu from "../components/Menu";

//Function Declaration
function navAnimation(direction1, direction2) {
	navItems.forEach((nav, index) => {
		nav.classList.replace(
			`slide-${direction1}-${index + 1}`,
			`slide-${direction2}-${index + 1}`
		);
	});
}

function toggleNav() {
	// Toggle: Menu Bars Open/Close
	menuBars.classList.toggle("change");
	//Toggle: Menu Active
	overlay.classList.toggle("overlayActive");
	if (overlay.classList.contains("overlayActive")) {
		//Animate In - Overlay
		overlay.classList.replace("overlaySlideLeft", "overlaySlideRight");
		//Animate In - Nav Items
		navAnimation("out", "in");
	} else {
		//Animate Out - Overlay
		overlay.classList.replace("overlaySlideRight", "overlaySlideLeft");
		//Animate Out - Nav Items
		navAnimation("in", "out");
	}
}

const Index = () =>
	$(
		"div",
		{ className: styles.container },
		$(Menu, null, null),
		$(
			"div",
			{ className: styles.menuBars, onClick: toggleNav },
			$("div", { className: styles.bar1 }),
			$("div", { className: styles.bar2 }),
			$("div", { className: styles.bar3 })
		),
		$(sectionOne, null, null),
		$(sectionTwo, null, null),
		$(sectionThree, null, null)
	);

export default Index;
