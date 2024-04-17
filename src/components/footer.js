import React from "react";
import { FaWallet } from "react-icons/fa6";
import { FaCompass } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";

const Footer = () => {
  return (
    <div>
        <div className="footer-card">
          <div className="wallet">
            <FaWallet />
          </div>
          <div>
            <FaCompass />
          </div>
          <div>
            <IoIosNotifications />
          </div>
          <div>
            <IoIosSettings />
          </div>
        </div>
    </div>
  );
};

export default Footer;
