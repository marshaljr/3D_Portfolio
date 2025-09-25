import React from "react";

const Footer = () => {
  return (
    <section className="footer-icon c-space pt-7 pb-3 border-t border-neutral-700 flex justify-between items-center flex-wrap gap-5">
      <div className="grid-subtext flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a
          href="https://github.com/marshaljr"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon bg-neutral-800 cursor-pointer flex items-center justify-center">
          <img
            src="/assets/github.svg"
            alt="github"
            className="w-1/2 h-1/2 icon"
          />
        </a>
        <a
          href="https://www.facebook.com/scanzer.juniour.9"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon bg-neutral-800 cursor-pointer flex items-center justify-center">
          <img
            src="/assets/facebook.svg"
            alt="facebook"
            className="w-1/2 h-1/2 icon "
          />
        </a>
        <a
          href="https://www.instagram.com/react_next/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon bg-neutral-800 cursor-pointer flex items-center justify-center">
          <img
            src="/assets/instagram.svg"
            alt="instagram"
            className="w-1/2 h-1/2 icon"
          />
        </a>
      </div>

      <p className="grid-subtext">© 2025 Marshal, All rights reserved.</p>
    </section>
  );
};

export default Footer;
