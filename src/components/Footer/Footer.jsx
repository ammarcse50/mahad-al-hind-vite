import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";

const Footer = () => {
  return (
    <div>
      <footer className="w-full bg-gray-800 p-8">
        <div className="flex bg-gray-800  flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
          <img
            src="https://i.ibb.co/WshBJnK/mahad-al-hind-logo.png"
            alt="logo-ct"
            className="w-24"
          />
          <ul className="flex  bg-gray-800 flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal text-white transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                About Us
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal text-white transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                License
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal text-white transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Contribute
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal text-white transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Contact Us
              </Typography>
            </li>
          </ul>
        </div>
        <hr className="my-8 border-blue-sky-500" />
        <Typography color="blue-gray" className="text-center text-white font-normal">
          &copy; 2023 Copyright by Mohammad Ammar
        </Typography>
      </footer>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
