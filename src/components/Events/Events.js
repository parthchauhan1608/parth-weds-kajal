import React from "react";
import Event from "./Event";

export default function Events({ events }) {
	return (
		<div className="events-container">
			{events.map((event) => (
				<Event event={event}></Event>
			))}
		</div>
	);
}
