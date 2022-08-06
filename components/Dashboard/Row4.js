import React from "react";
import Styles from "../../styles/Dashboard/Row.module.css";
import ColorizeIcon from "@mui/icons-material/Colorize";
import AttachmentIcon from "@mui/icons-material/Attachment";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Progress } from "antd";
import ReactECharts from "echarts-for-react";
import { Card } from "antd";

const getOptionForMap1 = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
    show: false,
  },
  series: [
    {
      data: [60, 120, 80, 100, 120, 140, 120],
      type: "line",
      color: "red",
    },
  ],
};
const getOptionForMap2 = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
    show: false,
  },
  series: [
    {
      data: [50, 65, 55, 75, 55, 70, 45],
      type: "line",
      color: "#4b96db",
      areaStyle: [],
    },
  ],
};

const Row4 = () => {
  return (
    <>
      <div className={`${Styles.main_div}`}>
        <div className={`${Styles.left_main_div}`}>
          <div className={`${Styles.left_main_div_row1}`}>
            <Card className={`${Styles.left_main_div_row1_centerAlign}`}>
              <div>
                <ColorizeIcon className={`${Styles.light_color}`} />
                <h2>48</h2>
                <p
                  className={`${Styles.left_main_div_row1_first_p} ${Styles.light_color}`}
                >
                  New Posts
                </p>
              </div>
            </Card>
            <Card className={`${Styles.left_main_div_row1_centerAlign}`}>
              <div>
                <AttachmentIcon className={`${Styles.light_color}`} />
                <h2 className={`${Styles.left_main_div_row1_first_h2}`}>291</h2>
                <p
                  className={`${Styles.left_main_div_row1_first_p} ${Styles.light_color}`}
                >
                  Attached Files
                </p>
              </div>
            </Card>
          </div>
          <div className={`${Styles.left_main_div_row2}`}>
            <Card className={`${Styles.left_main_div_row1_centerAlign}`}>
              <div>
                <ModeCommentIcon className={`${Styles.light_color}`} />
                <h2 className={`${Styles.left_main_div_row1_first_h2}`}>291</h2>
                <p
                  className={`${Styles.left_main_div_row1_first_p} ${Styles.light_color}`}
                >
                  Comments
                </p>
              </div>
            </Card>
            <Card className={`${Styles.left_main_div_row1_centerAlign}`}>
              <div>
                <RemoveRedEyeIcon className={`${Styles.light_color}`} />
                <h2 className={`${Styles.left_main_div_row1_first_h2}`}>110</h2>
                <p
                  className={`${Styles.left_main_div_row1_first_p} ${Styles.light_color}`}
                >
                  Total Views
                </p>
              </div>
            </Card>
          </div>
        </div>
        <div className={`${Styles.mid_main_div}`}>
          <div className={`${Styles.mid_main_div_row1}`}>
            <p
              className={` ${Styles.light_color} ${Styles.left_main_div_row1_first_p}`}
            >
              STATISTICS
            </p>
            <MoreHorizIcon className={` ${Styles.light_color}`} />
          </div>
          <div className={`${Styles.mid_main_div_progress}`}>
            <Progress type="dashboard" percent={75} showInfo={false} />
            <h2 className={`${Styles.mid_main_div_h2}`}>842K</h2>
            <p className={`${Styles.left_main_div_row1_first_p}`}>Awesome</p>
            <p
              className={`${Styles.left_main_div_row1_first_p} ${Styles.light_color}`}
            >
              Close to reach 1M followers!
            </p>
          </div>
        </div>
        <div className={`${Styles.right_main_div}`}>
          <div className={`${Styles.right_main_div_head}`}>
            <div className={`${Styles.right_main_div_head_row1}`}>
              <p className={`${Styles.right_main_div_head_p}`}>Followers</p>
              <div className={`${Styles.right_main_div_head_right}`}>
                <p className={`${Styles.right_main_div_head_p}`}>860K</p>
                <div className={`${Styles.right_main_div_head_right_info}`}>
                  <ArrowDropUpIcon
                    className={`${Styles.right_main_div_head_right_info_icon}`}
                  />
                  <p
                    className={` ${Styles.light_color} ${Styles.right_main_div_head_right_info_p}`}
                  >
                    +49%
                  </p>
                </div>
              </div>
            </div>
            <p className={`${Styles.right_main_div_p} ${Styles.light_color} `}>
              System Project
            </p>
            <div className={`${Styles.chart} `}>
              <ReactECharts
                option={getOptionForMap1}
                style={{ height: "100px" }}
              />
            </div>
          </div>
          <div className={`${Styles.right_main_div_head} ${Styles.padding}`}>
            <div className={`${Styles.right_main_div_head_row1}`}>
              <p className={`${Styles.right_main_div_head_p}`}>
                One Else Graph
              </p>
              <div className={`${Styles.right_main_div_head_right}`}>
                <p className={`${Styles.right_main_div_head_p}`}>429K</p>
                <div className={`${Styles.right_main_div_head_right_info}`}>
                  <ArrowDropUpIcon
                    className={`${Styles.right_main_div_head_right_info_icon}`}
                  />
                  <p
                    className={` ${Styles.light_color} ${Styles.right_main_div_head_right_info_p}`}
                  >
                    +35%
                  </p>
                </div>
              </div>
            </div>
            <p className={`${Styles.right_main_div_p} ${Styles.light_color} `}>
              System Project
            </p>
            <div>
              <ReactECharts
                option={getOptionForMap2}
                style={{ height: "100px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Row4;
