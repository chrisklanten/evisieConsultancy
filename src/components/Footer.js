import React from "react";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="-mt-6 pt-6 bg-evisie-black z-0 px-8 sm:px-0">
        <div className="container box-border sm:mx-auto">
          <div className="flex">
            <p className="text-xs md:text-base text-white font-bold py-4">
              © {new Date().getFullYear()} Evisie Consultancy
            </p>
            <p className="text-xs md:text-base text-white font-bold py-4 ml-auto flex items-center">
              Made with&nbsp;<span id="heart" className="block"></span>
              &nbsp;by&nbsp;
              <a
                title="webdesigner rotterdam freelance"
                href="https://www.chrisonline.nl"
                target="_blank"
                rel="noreferrer"
                className="no-underline text-xs md:text-base hover:underline text-blue-500"
              >
                Chris Online
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
