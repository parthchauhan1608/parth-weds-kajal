import React from "react";

import Hero from "../Hero/Hero";

export default function Invitation({ textData }) {
	return (
		<Hero hero="invitaionHero">
			<div className="invitation-container">
				<h2 className="invitation-title">Invitation</h2>
				<p className="invitation-text">{textData.invitation}</p>
				<h2 className="invitation-title">{textData.firstName}</h2>
				<p className="invitation-subtext">
					{textData.firstNameSubtitle}
				</p>
				<p className="invitation-subtext" style={{ paddingBottom: 0 }}>
					with
				</p>
				<h2 className="invitation-title">{textData.secondName}</h2>
				<p className="invitation-subtext">
					{textData.secondNameSubtitle}
				</p>
				<p className="invitation-text">{textData.description}</p>
			</div>
		</Hero>
	);
}
