import React, { useState } from "react";
import Styles from "../../styles/Dashboard/Row.module.css";
import { Select } from "antd";
const { Option } = Select;

const Row1 = () => {
  return (
    <>
      <div className={`${Styles.row1} contain`}>
        <h3 className={`${Styles.row1_overview}`}>Overview</h3>
        <Select
          defaultValue="This month"
          style={{
            width: 120,
          }}
        >
          <Option value="This month">This month</Option>
          <Option value="Last month">Last month</Option>
          <Option value="Six month">Six month</Option>
          <Option value="Last Year">Last Year</Option>
        </Select>
      </div>
    </>
  );
};

export default Row1;
