import React from "react";
import { Card } from "react-bootstrap";

export default function Event({ event }) {
	return (
		<Card className="event" text="white">
			<Card.Body>
				<div className="event-name">{event.name}</div>
				<div className="event-details-container">
					<div className="event-date">
						<p className="event-prop">Date</p>
						<p className="event-val">{event.date}</p>
					</div>
					<div className="event-time">
						<p className="event-prop">Time</p>
						<p className="event-val">{event.time}</p>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
}
