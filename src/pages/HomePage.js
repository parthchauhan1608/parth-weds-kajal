import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { Image } from "react-bootstrap";
import DateCountdown from "react-date-countdown-timer";
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
					<div className="timer-months">
						<DateCountdown
							dateTo="December 07, 2024 00:00:00 GMT+05:30"
							mostSignificantFigure="month"
							numberOfFigures="2"
							locales={[
								"Year",
								"Month",
								"Day",
								"Hr",
								"Min",
								"Sec",
							]}
							locales_plural={[
								"Years",
								"Months",
								"Days",
								"Hrs",
								"Mins",
								"Secs",
							]}
							callback={() => { }}
						/>
					</div>
					<div className="timer-hours">
						<DateCountdown
							className="timer-hours"
							dateTo="December 07, 2024 00:00:00 GMT+05:30"
							mostSignificantFigure="day"
							numberOfFigures="5"
							locales={[
								"Year",
								"Month",
								"Day",
								"Hr",
								"Min",
								"Sec",
							]}
							locales_plural={[
								"Years",
								"Months",
								"Days",
								"Hrs",
								"Mins",
								"Secs",
							]}
							callback={() => { }}
						/>
					</div>

					<Link to="/chooseSide" className="btn-primary">
						<FaHeart></FaHeart>
					</Link>
				</div>
			</div>
		</Hero>
	);
}
