import React from "react";
import Invitation from "../components/Invitation/Invitation";
import Events from "../components/Events/Events";
import { ladkewale } from "../resources/data/ladke-wale/ladkewaleData";
import NavBar from "../components/NavBar/NavBar.js";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import Venue from "../components/Venue";
import Footer from "../components/Footer";

import img1 from "../resources/images/Slideshow/main/1.jpg";
import img2 from "../resources/images/Slideshow/main/2.jpg";
import img3 from "../resources/images/Slideshow/main/3.jpg";
import img4 from "../resources/images/Slideshow/main/4.jpg";
import img5 from "../resources/images/Slideshow/main/5.jpg";
import img6 from "../resources/images/Slideshow/main/6.jpg";
import img7 from "../resources/images/Slideshow/main/7.jpg";

export default function LadkeWale() {
	const textData = ladkewale[0];

	const slideshowImages = [
		{
			src: img1,
		},
		{
			src: img2,
		},
		{
			src: img3,
		},
		{
			src: img4,
		},
		{
			src: img5,
		},
		{
			src: img6,
		},
		{
			src: img7,
		},
	];

	return (
		<>
			<NavBar></NavBar>
			<div className="image-slider">
				<ImageSlider slideshowImages={slideshowImages}></ImageSlider>
				<div className="common-title-container">
					<div className="common-title-names-container">
						<p>Parth</p>
						<span className="common-and">&</span>
						<p>Kajal</p>
					</div>
					<h3 className="common-subtitle">are getting married on</h3>
					<h2 className="common-date">7st Dec 2024</h2>
				</div>
			</div>
			<Invitation textData={textData}></Invitation>
			<Events events={textData.functions}></Events>
			<Venue></Venue>
			<Footer></Footer>
		</>
	);
}