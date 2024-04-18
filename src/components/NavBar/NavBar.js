import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./NavBar.css";
import { FaHeart } from "react-icons/fa";

export default function NavBar() {
	return (
		<Navbar
			bg="light"
			expand="lg"
			fixed="top"
			className="nav-bar-container"
		>
			<Navbar.Brand href="/chooseSide" className="nav-logo">
				Parth <FaHeart className="footer-heart"></FaHeart> Kajal
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto nav-bar-links-container">
					<Nav.Link className="nav-bar-links" href="/chooseSide">
						Pick a Side
					</Nav.Link>
					<Nav.Link className="nav-bar-links" href="/ourStory">
						Our Story
					</Nav.Link>

					<NavDropdown
						title="Gallery"
						id="collasible-nav-dropdown"
						className="nav-bar-links nav-bar-dropdown-container"
					>
						<NavDropdown.Item
							target="_blank"
							rel="noopener noreferrer"
							href="https://drive.google.com/drive/folders/1kwMH1yq-PDCGUkJIbj8c0awvKynt7yCC?usp=drive_link"
						>
							Engagement
						</NavDropdown.Item>
						<NavDropdown.Item
							target="_blank"
							rel="noopener noreferrer"
							href="https://youtu.be/xgxEaJ_QyGc?si=fGJbbQdnrjc0Pvrr"
						>
							Pagla Ceremony
						</NavDropdown.Item>
					</NavDropdown>
					<Nav.Link className="nav-bar-links"></Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
