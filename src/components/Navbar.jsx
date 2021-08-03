import React from "react";
import { motion } from "framer-motion";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { blue, green } from "@material-ui/core/colors";
import { pink } from "@material-ui/core/colors";

function Navbar() {
  return (
    <div className="navbar">
      <div className="app-name">PhotoGram</div>
      <div className="social-links">
        <motion.div>
          <FacebookIcon
            style={{ color: blue[500] }}
            className="icons"
            fontSize="medium"
          />
          <InstagramIcon
            style={{ color: pink[500] }}
            className="icons"
            fontSize="medium"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Navbar;
