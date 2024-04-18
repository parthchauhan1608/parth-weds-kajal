import React from "react";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { Image } from "react-bootstrap";
import Hero from "../components/Hero/Hero";
import mandala from "../resources/images/bg/Mandala.png";
import mandalafg from "../resources/images/bg/MandalaTextFG.png";

export default function HomePage() {
	return (
		<Hero hero="homepageHero">
			<div className="manadala-container">
				<Image src={mandala} fluid className="mandala"></Image>
				<div className="mandala-fg-container">
					<Image src={mandalafg} fluid rounded></Image>
				</div>
				<div className="timer-container">
					<div className="error">
						<h4>Some Erorr Occured</h4>
						<h4>Go Back</h4>
					</div>
					<Link to="/chooseSide" className="btn-primary">
						<MdArrowBack></MdArrowBack>
					</Link>
				</div>
			</div>
		</Hero>
	);
}
