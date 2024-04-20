import React from "react";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import NavBar from "../components/NavBar/NavBar";
import Timeline from "../components/Timeline/Timeline";

import img1 from "../resources/images/Slideshow/story/1.jpg";
import img2 from "../resources/images/Slideshow/story/2.jpg";
import img3 from "../resources/images/Slideshow/story/3.jpg";
import img4 from "../resources/images/Slideshow/story/4.jpg";
import img5 from "../resources/images/Slideshow/story/5.jpg";
import img6 from "../resources/images/Slideshow/story/6.jpg";
import img7 from "../resources/images/Slideshow/story/7.jpg";
import img8 from "../resources/images/Slideshow/story/8.jpg";
import img11 from "../resources/images/Slideshow/story/11.jpg";
import img12 from "../resources/images/Slideshow/story/12.jpg";
import img13 from "../resources/images/Slideshow/story/13.jpg";

export default function OurStoryPage() {
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
		{
			src: img8,
		},
		{
			src: img11,
		},
		{
			src: img12,
		},
		{
			src: img13,
		},
	];

	return (
		<>
			<NavBar></NavBar>
			<div className="image-slider">
				<ImageSlider slideshowImages={slideshowImages}></ImageSlider>
				<div className="common-title-container">
					<div className="common-title-names-container">
						<p className="story-title">Our Story</p>
					</div>
				</div>
			</div>
			<Timeline></Timeline>
			<Footer></Footer>
		</>
	);
}
