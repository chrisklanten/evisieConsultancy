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

  onLinkClick = (e) => {
    e.preventDefault();
    const splittedUrl = e.target.href.split("/");
    const segment = splittedUrl[splittedUrl.length - 1];
    const element = document.querySelector(segment);
    const topPos = element.getBoundingClientRect().top;

    window.scroll({
      top: topPos,
      behavior: "smooth", // чтобы было плавным
    });
  };

  render() {
    return (
      <nav
        className="py-6 shadow-lg"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="menuContainer mx-auto block sm:flex items-center px-6 lg:px-0">
          <div className="navbar-brand flex items-center">
            <Link to="/" className="" title="Logo">
              <img
                src={logo}
                alt="Evisie Consultancy"
                className="w-32 md:w-40 "
              />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`ml-auto sm:hidden ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="button"
              tabindex={"0"}
              onClick={() => this.toggleHamburger()}
              onKeyDown={() => this.toggleHamburger()}
            >
              <BiMenu className="text-2xl" />
            </div>
          </div>
          <div
            id="navMenu"
            className={`ml-auto flex ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item px-3 pt-4 sm:pt-0" to="/">
                Home
              </Link>
              <Link className="navbar-item px-3" to="/diensten">
                Diensten
              </Link>
              <Link className="navbar-item px-3" to="/over-evisie">
                Over EvisieConsultancy
              </Link>
              <Link
                onClick={this.onLinkClick}
                className="navbar-item rounded py-2 pyx-4 bg-evisie-yellow hover:bg-evisie-yellow-100 text-white font-bold no-underline hover:no-underline transition duration-100 text-center"
                to="/#contact"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
