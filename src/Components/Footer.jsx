import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Footer = () => {
  return (
    <div className="bg-red-100 w-full py-2 flex flex-col justify-center items-center space-y-1">
      <h4 className="text-sm">ContactUs</h4>
      <div className="flex items-center space-x-4">
        <a href="https://wa.me/+917905917189" target="_blank">
          <WhatsAppIcon className="text-green-500" />
        </a>
        <a
          href="www.linkedin.com/in/hemansh-srivastava-16b59a284"
          target="_blank"
        >
          <LinkedInIcon className="text-blue-500" />
        </a>
        <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noreferrer">
          <EmailIcon className="text-red-500" />
        </a>
      </div>
      <span className="text-xs text-gray-600">
        Designed by <FavoriteIcon className="text-red-500 text-2xl" height="20px"/> from Hemansh Srivastava
      </span>
    </div>
  );
};

export default Footer;
