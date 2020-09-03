import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";
import { BiMenu } from "react-icons/bi";

const Navbar = class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false,
			navBarActiveClass: "",
		};
	}

	toggleHamburger = () => {
		// toggle the active boolean in the state
		this.setState(
			{
				active: !this.state.active,
			},
			// after state has been updated,
			() => {
				// set the class in state for the navbar accordingly
				this.state.active
					? this.setState({
							navBarActiveClass: "is-active",
					  })
					: this.setState({
							navBarActiveClass: "",
					  });
			}
		);
	};

	render() {
		return (
			<nav
				className="py-6 shadow-lg"
				role="navigation"
				aria-label="main-navigation"
			>
				<div className="container block sm:flex items-center px-6">
					<div className="navbar-brand flex items-center">
						<Link to="/" className="" title="Logo">
							<img
								src={logo}
								alt="Evisie Consultancy"
								style={{ width: "197px" }}
							/>
						</Link>
						{/* Hamburger menu */}
						<div
							className={`ml-auto sm:hidden ${this.state.navBarActiveClass}`}
							data-target="navMenu"
							onClick={() => this.toggleHamburger()}
						>
							<BiMenu className="text-2xl" />
						</div>
					</div>
					<div id="navMenu" className={`flex ${this.state.navBarActiveClass}`}>
						<div className="navbar-start has-text-centered">
							<Link className="navbar-item" to="/about">
								About
							</Link>
							<Link className="navbar-item" to="/products">
								Products
							</Link>
							<Link className="navbar-item" to="/blog">
								Blog
							</Link>
							<Link className="navbar-item" to="/contact">
								Contact
							</Link>
							<Link className="navbar-item" to="/contact/examples">
								Form Examples
							</Link>
						</div>
					</div>
				</div>
			</nav>
		);
	}
};

export default Navbar;
