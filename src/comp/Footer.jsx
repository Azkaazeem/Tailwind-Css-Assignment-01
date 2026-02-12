import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import MapImg from "../assets/map.png";

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] text-gray-400">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1200px] px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 pb-16 text-center sm:text-left">

            <div className="grid justify-center">
              <img src={MapImg} alt="Map" className="w-48 mb-4" />
              <p className="text-sm flex items-center gap-1">
                Made with lots of
                <span className="inline-flex items-center">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="#ef4444"
                  >
                    <path d="M12 21s-6.7-4.35-9.5-7.14C.4 11.77.4 8.23 2.5 6.14 4.6 4.05 8.1 4.05 10.2 6.14L12 7.93l1.8-1.79c2.1-2.09 5.6-2.09 7.7 0 2.1 2.09 2.1 5.63 0 7.72C18.7 16.65 12 21 12 21z" />
                  </svg>
                </span>
                in San Francisco
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Products</h4>
              <ul className="space-y-3 text-sm">
                {["Delta", "Sigma", "Zeta", "Alpha", "Acumen"].map(item => (
                  <li key={item} className="hover:text-white cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-3 text-sm">
                {[
                  "Help",
                  "Training Videos",
                  "Webinars",
                  "Request a Demo",
                  "Create Surveys",
                  "Quiz Maker",
                ].map(item => (
                  <li key={item} className="hover:text-white cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-sm">
                {["About Us", "Careers", "Team", "Contact Us"].map(item => (
                  <li key={item} className="hover:text-white cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-16" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-6 text-sm">
            <p>Copyright © 2022 Circle. All rights reserved.</p>

            <div className="flex gap-4">
              <a className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-white hover:text-black transition">
                <FaLinkedinIn />
              </a>
              <a className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-white hover:text-black transition">
                <FaTwitter />
              </a>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              {["Privacy Policy", "Data & Security", "Terms of Service", "Data & Security"].map(
                (item, i) => (
                  <span key={i} className="hover:text-white cursor-pointer">
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
