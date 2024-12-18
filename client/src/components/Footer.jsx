import { Link } from 'react-router-dom';

const Footer = () => {
  const socialIcons = {
    facebook: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z" />
      </svg>
    ),
    twitter: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
        <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Z" />
      </svg>
    ),
    linkedin: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
        <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z" />
      </svg>
    )
  };

  return (
    <footer className="flex flex-col gap-6 px-5 py-10 border-t border-[#F4EFE6]">
      <div className="max-w-[960px] mx-auto w-full">
        <div className="flex flex-wrap items-center justify-center gap-6 md:flex-row md:justify-around">
          <Link to="/about" className="text-[#A18249] text-base font-normal leading-normal min-w-40 hover:text-[#1C160C]">
            About
          </Link>
          <Link to="/contact" className="text-[#A18249] text-base font-normal leading-normal min-w-40 hover:text-[#1C160C]">
            Contact
          </Link>
          <Link to="/privacy" className="text-[#A18249] text-base font-normal leading-normal min-w-40 hover:text-[#1C160C]">
            Privacy
          </Link>
          <Link to="/terms" className="text-[#A18249] text-base font-normal leading-normal min-w-40 hover:text-[#1C160C]">
            Terms
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {Object.entries(socialIcons).map(([name, icon]) => (
            <a
              key={name}
              href={`#${name}`}
              className="text-[#A18249] hover:text-[#1C160C] transition-colors"
              aria-label={`Visit our ${name} page`}
            >
              {icon}
            </a>
          ))}
        </div>

        <p className="text-[#A18249] text-base font-normal leading-normal text-center mt-6">
          © {new Date().getFullYear()} TechTonic SaaS. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
