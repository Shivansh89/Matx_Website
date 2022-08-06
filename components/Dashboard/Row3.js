import React from "react";
import Styles from "../../styles/Dashboard/Row.module.css"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ReactECharts from "echarts-for-react";

const option = {
  legend: {},
  tooltip: {},
  dataset: {
    source: [
      ["Product", "2012", "2013", "2014", "2015"],
      ["App", 41.1, 30.4, 65.1, 53.3],
      ["Linux", 86.5, 92.1, 45.7, 83.1],
      ["Window", 24.1, 47.2, 89.5, 26.4],
      ["Website", 35.1, 45.2, 73.5, 56.4],
    ],
  },
  xAxis: [
    { type: "category", gridIndex: 0 },
    { type: "category", gridIndex: 1 },
  ],
  yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }],
  grid: [{ bottom: "23%" }, { top: "55%" }],
  series: [
    { type: "bar", seriesLayoutBy: "row" },
    { type: "bar", seriesLayoutBy: "row" },
    { type: "bar", seriesLayoutBy: "row" },
    { type: "bar", seriesLayoutBy: "row" },
  ],
};

const Row3 = () => {
  return (
    <>
      <div className={`${Styles.main_row3} contain`}>
        <div className={`${Styles.main_row3_head}`}>
          <p
            className={` ${Styles.light_color} ${Styles.left_main_div_row1_first_p}`}
          >
            STATISTICS
          </p>
          <MoreHorizIcon className={` ${Styles.light_color}`} />
        </div>

        <ReactECharts option={option} style={{ height: "400px" }} />
      </div>
    </>
  );
};

export default Row3;
