import React from "react";

// Icons
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram, FaTiktok, FaPinterestSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";

// Images
import visa from "/asset_83.png";
import paypal from "/asset_84.png";
import masterCard from "/asset_85.png";
import amex from "/asset_86.png";
import dinnerclub from "/asset_87.png";
import Logo from "../assets/logo.svg";

const help_detail = [
  { desc: "Privacy Policy" },
  { desc: "Returns + Exchanges" },
  { desc: "Shipping" },
  { desc: "Terms & Conditions" },
  { desc: "FAQ's" },
  { desc: "Compare" },
  { desc: "My Wishlist" },
];

const about_detail = [
  { desc: "Our Story" },
  { desc: "Visit Our Store" },
  { desc: "Contact Us" },
  { desc: "Account" },
];

const social_detail = [
  { desc: <BiLogoFacebook /> },
  { desc: <FaXTwitter /> },
  { desc: <FaInstagram /> },
  { desc: <FaTiktok /> },
  { desc: <FaPinterestSquare /> },
];

export default function Footers() {
  return (
    <footer className="bg-white text-black flex flex-col px-4 sm:px-8 w-full border-t-2 mt-14">
      {/* Main Content */}
      <div className="container flex flex-wrap justify-between gap-8 py-8">
        {/* Column 1 */}
        <div className="w-full md:w-[45%] lg:w-[30%] flex flex-col gap-4">
          <a href="/">
            <img src={Logo} alt="Logo" className="w-32 sm:w-40" />
          </a>
          <p className="text-sm text-gray-600">
            Address: 1234 Fashion Street, Suite 567 <br />
            New York, NY 10001
          </p>
          <p className="text-sm">
            Email:{" "}
            <a href="mailto:info@fashionshop.com" className="font-semibold text-gray-700">
              info@fashionshop.com
            </a>
          </p>
          <p className="text-sm text-gray-600">
            Phone: <span>(212) 555-1234</span>
          </p>
          <a
            href="#"
            className="flex items-center text-sm text-blue-500 underline hover:text-red-500"
          >
            Get Direction <MdOutlineArrowOutward className="ml-1" />
          </a>
          <div className="flex gap-3">
            {social_detail.map((current, index) => (
              <Social_media key={index} details={current} />
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div className="w-full md:w-[20%] lg:w-[15%]">
          <h3 className="mb-5 text-base font-semibold">Help</h3>
          <ul className="space-y-2 text-sm">
            {help_detail.map((current, index) => (
              <Help_details key={index} details={current} />
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div className="w-full md:w-[20%] lg:w-[15%]">
          <h3 className="mb-5 text-base font-semibold">About Us</h3>
          <ul className="space-y-2 text-sm">
            {about_detail.map((current, index) => (
              <About_details key={index} details={current} />
            ))}
          </ul>
        </div>

        {/* Column 4 */}
        <div className="w-full md:w-[45%] lg:w-[30%]">
          <h3 className="font-semibold mb-3">Sign Up for Email</h3>
          <p className="text-sm text-gray-600 mb-4">
            Sign up to get first dibs on new arrivals, sales, exclusive content,
            events, and more!
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email..."
              className="border rounded-l-lg px-4 py-2 w-full text-sm"
            />
            <button className="bg-black text-white px-4 py-2 rounded-r-lg flex items-center">
              Subscribe
              <MdOutlineArrowOutward className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t mt-4"></div>

      {/* Footer Bottom */}
      <div className="container flex flex-wrap justify-between items-center gap-4 py-4">
        <p className="text-sm text-gray-500">
          © 2024 Ecomus Store. All Rights Reserved.
        </p>
        <div className="flex gap-2">
          <img src={visa} alt="Visa" className="h-6" />
          <img src={paypal} alt="Paypal" className="h-6" />
          <img src={masterCard} alt="MasterCard" className="h-6" />
          <img src={amex} alt="Amex" className="h-6" />
          <img src={dinnerclub} alt="Dinner Club" className="h-6" />
        </div>
      </div>
    </footer>
  );
}

function Help_details({ details }) {
  return (
    <li>
      <a href="#" className="hover:text-red-500">
        {details.desc}
      </a>
    </li>
  );
}

function About_details({ details }) {
  return (
    <li>
      <a href="#" className="hover:text-red-500">
        {details.desc}
      </a>
    </li>
  );
}

function Social_media({ details }) {
  return (
    <div className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-100">
      <i className="text-lg">{details.desc}</i>
    </div>
  );
}
