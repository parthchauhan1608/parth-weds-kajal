import React from "react";

export default function Venue() {
	const loctionIframe =
		'<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14680.985071613663!2d72.5267816!3d23.0880791!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xab78e79d47fd2996!2sShree%20Sthal%20Hall!5e0!3m2!1sen!2sin!4v1603181408740!5m2!1sen!2sin" width="100%" height="500px" frameborder="0" style="border:0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>';
	function LocationIframeDiv(props) {
		return (
			<div
				dangerouslySetInnerHTML={{
					__html: props.iframe ? props.iframe : "",
				}}
			/>
		);
	}
	return (
		<div className="venue-container">
			<div className="address-container">
				<h1 className="address-title">Venue</h1>
				<h3> Hall</h3>
				<p>Address
				</p>
			</div>
			<div className="map-container">
				<LocationIframeDiv
					iframe={loctionIframe}
					style={{
						borderRadius: "1rem",
						overflow: "hidden",
					}}
				/>
			</div>
		</div>
	);
}
