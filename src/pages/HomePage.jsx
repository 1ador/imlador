import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="page-wrapper home">
      <main className="home-content-wrapper ">
        <div className="name-wrapper" aria-hidden="true">
          <span id="l1" className="block-letter">H</span>
          <span id="l1" className="block-letter">i</span>
          <span id="l2" className="block-letter">!</span>
          <span id="l3" className="block-letter">I</span>
          <span id="l3" className="block-letter">'</span>
          <span id="l4" className="block-letter">m</span>
        </div>
        <div className="name-wrapper" aria-hidden="true">
          <span id="l1" className="block-letter">L</span>
          <span id="l1" className="block-letter">a</span>
          <span id="l2" className="block-letter">d</span>
          <span id="l3" className="block-letter">o</span>
          <span id="l4" className="block-letter">r</span>
        </div>
        <div className="home-link-wrapper">
          <div className="home-link-space"></div>
          <div className="social-icons-wrapper">
            <a
              className="home-link icon-link"
              href="https://github.com/1ador"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 0C5.37321 0 0 5.50743 0 12.306C0 17.7438 3.43929 22.3512 8.20714 23.9798C8.80714 24.0923 9.02679 23.712 9.02679 23.3852C9.02679 23.0905 9.01607 22.319 9.01071 21.2904C5.67321 22.0351 4.96607 19.6403 4.96607 19.6403C4.41964 18.2206 3.63214 17.8402 3.63214 17.8402C2.54464 17.0741 3.7125 17.0902 3.7125 17.0902C4.91786 17.1759 5.55 18.3599 5.55 18.3599C6.62143 20.2404 8.35714 19.6993 9.04286 19.3832C9.15 18.5903 9.46071 18.0438 9.80357 17.7384C7.14107 17.4277 4.33929 16.3723 4.33929 11.6578C4.33929 10.313 4.80536 9.21477 5.57143 8.35758C5.44821 8.04685 5.03571 6.79322 5.68929 5.10027C5.68929 5.10027 6.69643 4.76811 8.98929 6.35926C9.94821 6.08604 10.9714 5.9521 11.9946 5.94674C13.0125 5.9521 14.0411 6.08604 15 6.35926C17.2929 4.76811 18.2946 5.10027 18.2946 5.10027C18.9482 6.79322 18.5357 8.04685 18.4125 8.35758C19.1786 9.22013 19.6446 10.3184 19.6446 11.6578C19.6446 16.383 16.8375 17.4223 14.1643 17.7277C14.5929 18.1081 14.9786 18.8581 14.9786 20.0046C14.9786 21.6494 14.9625 22.978 14.9625 23.3798C14.9625 23.7066 15.1768 24.0923 15.7875 23.9691C20.5661 22.3458 24 17.7384 24 12.306C24 5.50743 18.6268 0 12 0Z" />
              </svg>
            </a>
            <a
              className="home-link icon-link"
              href="https://www.linkedin.com/in/xuehui-lan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0.304343 7.48089H5.44783V23H0.304343V7.48089ZM2.91051 0C1.15011 0 0 1.15875 0 2.67966C0 4.16928 1.11646 5.36172 2.8432 5.36172H2.876C4.67006 5.36172 5.78731 4.16922 5.78731 2.67966C5.75366 1.15875 4.67011 0 2.91051 0ZM18.0765 7.11633C15.3463 7.11633 14.1231 8.62199 13.4408 9.67791V7.48089H8.29577C8.36389 8.93676 8.29577 23 8.29577 23H13.4408V14.333C13.4408 13.8688 13.4745 13.4064 13.6098 13.0738C13.9823 12.1472 14.8289 11.1876 16.2488 11.1876C18.1118 11.1876 18.8558 12.6114 18.8558 14.6967V22.9999H24V14.101C24 9.33426 21.4627 7.11633 18.0765 7.11633Z" />
              </svg>
            </a>
          </div>
          <div className="home-link-space"></div>
          <div className="home-link text-large " tabIndex="0" role="link" aria-label="Contact me"
            onClick={() => window.location.href = "mailto:ameyamakeiko@gmail.com"}>get in touch</div>
          <div className="home-link-space"></div>
        </div>
      </main >
      <Footer />
    </div >
  );
}