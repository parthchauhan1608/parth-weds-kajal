import React from "react";

export default function Venue({ venueLocation }) {
	const loctionIframe =
		`<iframe src="${venueLocation.mapLink}" width="100%" height="500px" frameborder="0" style="border:0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`;
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
				<h3>{venueLocation.date}</h3>
				<h5> {venueLocation.hallName}</h5>
				<p>{venueLocation.address}</p>
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
