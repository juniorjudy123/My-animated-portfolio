import React from "react"
import "./navbar.scss"

export default function Navbar() {
	return (
		<div className="navbar">
			<div className="wrapper">
				<span>Benoy Judy</span>
				<div className="social">
					<a href="#">
						<img src="/facebook.png"></img>
					</a>
					<a href="#">
						<img src="/instagram.png"></img>
					</a>
					<a href="#">
						<img src="/youtube.png"></img>
					</a>
					<a href="#">
						<img src="/dribbble.png"></img>
					</a>
				</div>
			</div>
		</div>
	)
}
