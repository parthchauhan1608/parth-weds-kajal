import React from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaHeart } from "react-icons/fa";
import { Image } from "react-bootstrap";
import img1 from "../../resources/images/Timeline/1.jpg";
import img2 from "../../resources/images/Timeline/2.jpg";
import img3 from "../../resources/images/Timeline/3.jpg";
import img4 from "../../resources/images/Timeline/4.jpg";
import img5 from "../../resources/images/Timeline/5.jpg";
import Hero from "../Hero/Hero";
import DateCountdown from "react-date-countdown-timer";

export default function Timeline() {
	return (
		<Hero hero="timelineHero">
			<VerticalTimeline className="timeline-container">
				<VerticalTimelineElement
					className="vertical-timeline-element--work timeline-even-container"
					contentStyle={{
						background:
							"radial-gradient( circle, rgba(115, 11, 15, 0.98) 0%, rgba(79, 10, 10, 0.94) 52%,  rgba(64, 8, 8, 0.9) 100% )",
						color: "var(--primaryColor)",
						textShadow: "var(--text-shadow)",
					}}
					contentArrowStyle={{
						borderRight: "7px solid  rgb(115, 11, 15)",
					}}
					date="29th July 2023"
					dateClassName="timeline-date"
					iconStyle={{
						background:
							"radial-gradient( circle, rgba(115, 11, 15, 0.98) 0%, rgba(79, 10, 10, 0.94) 52%,  rgba(64, 8, 8, 0.9) 100% )",
						color: "var(--primaryColor)",
					}}
					icon={<FaHeart />}
				>
					<div className="timeline-title-container">
						<h3 className="vertical-timeline-element-title">
							Fist time meet
						</h3>
						<Image
							className="timeline-img-container"
							src={img1}
							fluid
						></Image>
					</div>
					<p>
						Story Line
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work timeline-even-container"
					contentStyle={{
						background:
							"radial-gradient( circle, rgba(115, 11, 15, 0.98) 0%, rgba(79, 10, 10, 0.94) 52%,  rgba(64, 8, 8, 0.9) 100% )",
						color: "var(--primaryColor)",
						textShadow: "var(--text-shadow)",
					}}
					contentArrowStyle={{
						borderRight: "7px solid  rgb(115, 11, 15)",
					}}
					date="30nd Sep 2023"
					dateClassName="timeline-date"
					iconStyle={{
						background:
							"radial-gradient( circle, rgba(115, 11, 15, 0.98) 0%, rgba(79, 10, 10, 0.94) 52%,  rgba(64, 8, 8, 0.9) 100% )",
						color: "var(--primaryColor)",
					}}
					icon={<FaHeart />}
				>
					<div className="timeline-title-container">
						<h3 className="vertical-timeline-element-title">
							Propose Day
						</h3>
						<Image
							className="timeline-img-container"
							src={img3}
							fluid
						></Image>
					</div>
					<p>
						The day when i express my feeling to her with megical line, <strong><i>They say in coding, it's all about finding the right syntax. Well, I've found the perfect syntax to complete my life, and it's you. Will you marry me and be my life, and it's you. Will you marry me and be my forever 'semicolon' ?</i></strong>
					</p>
				</VerticalTimelineElement>
				{/* <VerticalTimelineElement
					className="vertical-timeline-element--work timeline-odd-container"
					contentStyle={{
						background:
							"radial-gradient( circle, rgba(73, 73, 73, 0.98) 0%, rgba(47, 47, 47, 0.94) 52%,  rgba(33, 33, 33, 0.9) 100% )",
						color: "var(--primaryColor)",
						textShadow: "var(--text-shadow)",
					}}
					contentArrowStyle={{
						borderRight: "7px solid  rgb(73, 73, 73)",
					}}
					date="22nd Oct 2023"
					dateClassName="timeline-date"
					iconStyle={{
						background:
							"radial-gradient( circle, rgba(73, 73, 73, 0.98) 0%, rgba(47, 47, 47, 0.94) 52%,  rgba(33, 33, 33, 0.9) 100% )",
						color: "var(--primaryColor)",
					}}
					icon={<FaHeart />}
				>
					<div className="timeline-title-container">
						<h3 className="vertical-timeline-element-title">
							Engagement
						</h3>
						<Image
							className="timeline-img-container"
							src={img2}
							fluid
						></Image>
					</div>
					<p>
						Story
					</p>
				</VerticalTimelineElement> */}
				<VerticalTimelineElement
					className="vertical-timeline-element--work timeline-odd-container"
					contentStyle={{
						background:
							"radial-gradient( circle, rgba(73, 73, 73, 0.98) 0%, rgba(47, 47, 47, 0.94) 52%,  rgba(33, 33, 33, 0.9) 100% )",
						color: "var(--primaryColor)",
						textShadow: "var(--text-shadow)",
					}}
					contentArrowStyle={{
						borderRight: "7px solid  rgb(73, 73, 73)",
					}}
					date="22th Dec 2023"
					dateClassName="timeline-date"
					iconStyle={{
						background:
							"radial-gradient( circle, rgba(73, 73, 73, 0.98) 0%, rgba(47, 47, 47, 0.94) 52%,  rgba(33, 33, 33, 0.9) 100% )",
						color: "var(--primaryColor)",
					}}
					icon={<FaHeart />}
				>
					<div className="timeline-title-container">
						<h3 className="vertical-timeline-element-title">
							Engagement
						</h3>
						<Image
							className="timeline-img-container"
							src={img4}
							fluid
						></Image>
					</div>

					<p>
						Today was the best day of our lives. We both were happy
						for the fact that we are both getting best life
						partners. First Chapter is written to our book of life.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					contentStyle={{
						background:
							"radial-gradient(circle, rgba(45,193,14,0.9139005944174545) 0%, rgba(35,138,14,0.846673703661152) 52%, rgba(14,56,6,0.8550770650056898) 100%)",
						color: "var(--primaryColor)",
						textShadow: "var(--text-shadow)",
					}}
					contentArrowStyle={{
						borderRight: "7px solid  rgb(45,193,14)",
					}}
					date="22nd Oct 2023"
					iconStyle={{
						background: "rgb(16, 204, 82)",
						color: "#fff",
					}}
					dateClassName="timeline-date"
					icon={<FaHeart />}
				>
					<div className="timeline-title-container">
						<h3 className="vertical-timeline-element-title">
							Wedding
						</h3>
						<Image
							className="timeline-img-container"
							src={img5}
							fluid
						></Image>
						<div
							style={{
								marginTop: "1rem",
								textAlign: "center",
								fontSize: "1.4rem",
							}}
						>
							<DateCountdown
								dateTo="December 07, 2024 00:00:00 GMT+05:30"
								mostSignificantFigure="month"
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
					</div>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</Hero>
	);
}
