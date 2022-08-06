import React from "react";
import Styles from "../styles/Footer_matx.module.css";

const Footer_matx = () => {
  return (
    <>
      <div className={`${Styles.main_footer}`}>
        <a href="https://ui-lib.com/downloads/matx-pro-react-admin/" className={`${Styles.main_footer_a}`}>
        <button className={`${Styles.main_footer_button}`}>Get MatX Pro</button>
        </a>
        <h3 className={`${Styles.main_footer_info}`}>
          Design and Developed by UI Lib
        </h3>
      </div>
    </>
  );
};

export default Footer_matx;
