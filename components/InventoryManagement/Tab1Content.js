import React from "react";
import "antd/dist/antd.css";
import Row1 from "./Tab1Rows/Row1";
import Row2 from "./Tab1Rows/Row2";
import Row3 from "./Tab1Rows/Row3";

const Tab1Content = () => {
  return (
    <>
      <Row1 />
      <Row2 />
      <Row3 />
    </>
  );
};

export default Tab1Content;
