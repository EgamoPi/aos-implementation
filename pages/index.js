import { createElement as $, useRef } from "react";
import styles from "../styles/Home.module.css";
import sectionOne from "../components/sectionOne";
import sectionTwo from "../components/sectionTwo";
import sectionThree from "../components/sectionThree";
import Menu from "../components/Menu";

const Index = () => {
	const overlayRef = useRef(null);
	const navElementRef = useRef(null);
	const nav1Ref = useRef(null);
	const nav2Ref = useRef(null);
	const nav3Ref = useRef(null);
	const nav4Ref = useRef(null);
	const menuBarsRef = useRef(null);
	const navItems = [nav1Ref, nav2Ref, nav3Ref, nav4Ref];

	return $(
		"div",
		{ className: styles.container },
		$(
			Menu,
			{
				ref: {
					ref1: overlayRef,
					ref2: nav1Ref,
					ref3: nav2Ref,
					ref4: nav3Ref,
					ref5: nav4Ref,
					ref6: navElementRef,
				},
			},
			null
		),
		$(
			"div",
			{ className: styles.menuBars, ref: menuBarsRef, onClick: toggleNav },
			$("div", { className: styles.bar1 }),
			$("div", { className: styles.bar2 }),
			$("div", { className: styles.bar3 })
		),
		$(sectionOne, null, null),
		$(sectionTwo, null, null),
		$(sectionThree, null, null)
	);

	console.log(menuBarsRef);
	//Function Declaration
	function navAnimation(direction1, direction2) {
		navItems.forEach((nav, index) => {
			navElementRef.current.classList.replace(
				`slide${direction1}${index + 1}`,
				`slide${direction2}${index + 1}`
			);
		});
	}

	function toggleNav() {
		// Toggle: Menu Bars Open/Close
		menuBarsRef.current.classList.toggle("change");
		//Toggle: Menu Active
		overlayRef.current.classList.toggle("overlayActive");
		if (overlayRef.current.classList.contains("overlayActive")) {
			//Animate In - Overlay
			overlayRef.current.classList.replace(
				"overlaySlideLeft",
				"overlaySlideRight"
			);
			//Animate In - Nav Items
			navAnimation("Out", "In");
		} else {
			//Animate Out - Overlay
			overlayRef.current.classList.replace(
				"overlaySlideRight",
				"overlaySlideLeft"
			);
			//Animate Out - Nav Items
			navAnimation("In", "Out");
		}
	}
};

export default Index;
