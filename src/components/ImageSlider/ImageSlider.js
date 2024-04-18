import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Image } from "react-bootstrap";

export default function ImageSlider({ slideshowImages }) {
	return (
		<div className="slide-container">
			<Fade indicators={false} arrows={false}>
				{slideshowImages.map((image) => (
					<div className="each-fade">
						<div className="image-container">
							<Image src={image.src} fluid />
						</div>
					</div>
				))}
			</Fade>
		</div>
	);
}
