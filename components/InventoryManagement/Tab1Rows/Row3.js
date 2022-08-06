import React from "react";
import Styles from "../../../styles/InventoryManagement/tabs.module.css";
import ReactECharts from "echarts-for-react";
import { Select } from "antd";
const { Option } = Select;

const lineChart = {
  xAxis: {
    type: "category",
    data: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    axisTick: {
      alignWithLabel: true,
    },
  },
  yAxis: {
    type: "value",
    max: 42,
    interval:7,
    min:7
  },
  tooltip: {
    triggerOn: "onmousemove",
  },
  series: [
    {
      data: [14, 29, 18, 20, 20, 40, 20, 30, 24, 18, 30, 15],
      type: "line",
      smooth: true,
      itemStyle: {
        color: "#1f81ff ",
      },
    },
  ],
};

const Row3 = () => {
  return (
    <>
      <div className={`${Styles.row3_main}`}>
        <div className={`${Styles.main_row2_left_second_row1}`}>
          <h4 className={`${Styles.heading_h3}`}>Sales Order Summary</h4>
          <Select
            defaultValue="This Year"
            style={{
              width: 120,
            }}
          >
            <Option value="This Year">This Year</Option>
            <Option value="Last Year">Last Year</Option>
          </Select>
        </div>
        <ReactECharts option={lineChart} style={{height:'400px'}}/>
      </div>
    </>
  );
};

export default Row3;
