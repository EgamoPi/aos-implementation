import { createElement as $ } from "react";
import styles from "../styles/Home.module.css";
import sectionOne from "../components/sectionOne";
import sectionTwo from "../components/sectionTwo";
import sectionThree from "../components/sectionThree";
import Menu from "../components/Menu";

//For jacinto
// Of course toggleNav and navAnimation function will not work since their variables are not declared
// Because cant use getElementById in react, because of how it renders
//From googling I should be using refs, but refs only work on class component not functional component
//Can you help me ?
// Also I had to change to camelCase just to follow "the way" of noting things.

//Function Declaration
function navAnimation(direction1, direction2) {
	navItems.forEach((nav, index) => {
		nav.classList.replace(
			`slide${direction1}${index + 1}`,
			`slide${direction2}${index + 1}`
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
		navAnimation("Out", "In");
	} else {
		//Animate Out - Overlay
		overlay.classList.replace("overlaySlideRight", "overlaySlideLeft");
		//Animate Out - Nav Items
		navAnimation("In", "Out");
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
