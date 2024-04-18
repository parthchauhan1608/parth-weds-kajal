import React from "react";
import Hero from "../components/Hero/Hero";
import { Link } from "react-router-dom";

export default function ChooseSidePage() {
	return (
		<Hero hero="choosePageHero">
			<div className="choose-side-container">
				<div className="names-container">
					<p>Parth</p>
					<p>&</p>
					<p>Kajal</p>
				</div>
				<div className="choose-side">
					<Link className="side-container btn-primary" to="/parth">
						<p className="side-title">Ladke wale</p>
						<p>Click here</p>
					</Link>
					<Link className="side-container btn-primary" to="/kajal">
						<p className="side-title">Ladki wale</p>
						<p>Click here</p>
					</Link>
				</div>
			</div>
		</Hero>
	);
}
