import Head from "next/head";
import styles from "../styles/Home.module.css";
import { createElement as $ } from "react";
import sectionOne from "../components/sectionOne";
import sectionTwo from "../components/sectionTwo";
import sectionThree from "../components/sectionThree";

const Index = () =>
	$(
		"div",
		{ className: styles.container },
		$(sectionOne, null, null),
		$(sectionTwo, null, null),
		$(sectionThree, null, null)
	);

export default Index;
