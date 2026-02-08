import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section
      className="footer-icon c-space pt-7 pb-3 border-t border-neutral-700 flex justify-between items-center flex-wrap gap-5"
      role="contentinfo"
      aria-label="Footer">
      <div className="grid-subtext flex gap-4 flex-wrap justify-center sm:justify-start">
        <a
          href="/terms"
          className="hover:text-yellow-400 transition-colors"
          aria-label="Terms and Conditions">
          Terms &amp; Conditions
        </a>
        <span aria-hidden="true">|</span>
        <a
          href="/privacy"
          className="hover:text-yellow-400 transition-colors"
          aria-label="Privacy Policy">
          Privacy Policy
        </a>
      </div>

      <div className="flex gap-3" role="list" aria-label="Social media links">
        <a
          href="https://github.com/marshaljr"
          target="_blank"
          rel="noopener noreferrer"
          role="listitem"
          aria-label="GitHub profile - opens in new tab"
          className="social-icon bg-neutral-800 cursor-pointer flex items-center justify-center min-w-[44px] min-h-[44px]">
          <img
            src="/assets/github.svg"
            alt="GitHub"
            className="w-1/2 h-1/2 icon"
          />
        </a>
        <a
          href="https://www.facebook.com/scanzer.juniour.9"
          target="_blank"
          rel="noopener noreferrer"
          role="listitem"
          aria-label="Facebook profile - opens in new tab"
          className="social-icon bg-neutral-800 cursor-pointer flex items-center justify-center min-w-[44px] min-h-[44px]">
          <img
            src="/assets/facebook.svg"
            alt="Facebook"
            className="w-1/2 h-1/2 icon"
          />
        </a>
        <a
          href="https://www.instagram.com/react_next/"
          target="_blank"
          rel="noopener noreferrer"
          role="listitem"
          aria-label="Instagram profile - opens in new tab"
          className="social-icon bg-neutral-800 cursor-pointer flex items-center justify-center min-w-[44px] min-h-[44px]">
          <img
            src="/assets/instagram.svg"
            alt="Instagram"
            className="w-1/2 h-1/2 icon"
          />
        </a>
      </div>

      <p className="grid-subtext text-center sm:text-right">
        © {currentYear} Marshal, All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
