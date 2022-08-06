import React, { useState, useEffect } from "react";
import Styles from "../../../styles/InventoryManagement/tabs.module.css";
import ReactECharts from "echarts-for-react";
import EditIcon from "@mui/icons-material/Edit";
import { Avatar, Image, Select, Table } from "antd";

const { Option } = Select;

const columns = [
  {
    title: "Name",
    dataIndex: "Name",
    render: (text) => (
      <>
        <div className={Styles.table_col1}>
          <Avatar
            src={
              <Image
                src="https://joeschmoe.io/api/v1/random"
                style={{
                  width: 32,
                }}
              />
            }
          />
          <h4 className={Styles.table_col1_h4}>{text}</h4>
        </div>
      </>
    ),
  },
  {
    title: "Revenue",
    dataIndex: "Revenue",
  },
  {
    title: "Stock Status",
    dataIndex: "Stock_Status",
    render: (text) => {
      {
        if (text === 0) {
          return (
            <>
              <p
                className={`${Styles.table_col1_p}`}
                style={{
                  color: "#fff",
                  background: "red",
                  marginBottom: 0,
                  fontSize: "11px",
                }}
              >
                out of stock
              </p>
            </>
          );
        } else if (text > 0 && text <= 20) {
          return (
            <>
              <p
                className={`${Styles.table_col1_p}`}
                style={{
                  color: "#fff",
                  background: "orange",
                }}
              >
                {text} available
              </p>
            </>
          );
        } else {
          return (
            <>
              <p
                className={`${Styles.table_col1_p}`}
                style={{
                  color: "#fff",
                  background: "green",
                }}
              >
                in stock
              </p>
            </>
          );
        }
      }
    },
  },
  {
    title: "Action",
    dataIndex: "Action",
    render: () => (
      <a>
        <EditIcon />
      </a>
    ),
  },
];

const stockData = {
  stockout: {
    name: "Stockout Items",
    value: 234,
  },
  low: {
    name: "Low Stock Items",
    value: 123,
  },
  available: {
    name: "Available Items",
    value: 342,
  },
};

const pieChart = {
  tooltip: {
    trigger: "item",
  },
  series: [
    {
      type: "pie",
      radius: ["40%", "60%"],
      avoidLabelOverlap: true,
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: false,
          fontSize: "10",
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: stockData.low.value, name: stockData.low.name },
        { value: stockData.available.value, name: stockData.available.name },
        { value: 0 },
        { value: stockData.stockout.value, name: stockData.stockout.name },
      ],
    },
  ],
};

const Row2 = () => {
  const [TopSellingData, setData] = useState();
  const getTableData = () => {
    const api = {
      method: "POST",
      headers: {
        "x-hasura-admin-secret":
          "CBsY9yd7AgpK2t97dOTJfVr1igNu2xuJ9DSdJoVSxou8kAdXcsI29IGGcNvrvni7",
      },
      body: JSON.stringify({
        query: `query {
                TopSellingProducts {
                  Name
                  Revenue
                  Stock_Status
                }
              }`,
      }),
    };
    fetch("https://matx-website.hasura.app/v1/graphql", api)
      .then(async (response) => {
        const Table_data = await response.json();
        setData(Table_data.data.TopSellingProducts);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getTableData();
  }, []);

  return (
    <>
      <div className={`${Styles.main_row2}`}>
        <div className={`${Styles.main_row2_left}`}>
          <div className={`${Styles.main_row2_left_first}`}>
            <div className={`${Styles.main_row2_left_first_left}`}>
              <div className={`${Styles.main_row2_left_first_left_content}`}>
                <h4 style={{ color: "red" }}>{stockData.stockout.name}</h4>
                <h4 style={{ color: "red" }}>{stockData.stockout.value}</h4>
              </div>
              <div className={`${Styles.main_row2_left_first_left_content}`}>
                <h4>{stockData.low.name}</h4>
                <h4>{stockData.low.value}</h4>
              </div>
              <div
                className={`${Styles.main_row2_left_first_left_content}`}
                style={{ color: "red" }}
              >
                <h4>{stockData.available.name}</h4>
                <h4>{stockData.available.value}</h4>
              </div>
            </div>
            <div className={`${Styles.main_row2_left_first_right}`}>
              <ReactECharts
                option={pieChart}
                style={{ height: "200px", width: "50px",top:'-20px' }}
              />
            </div>
          </div>
          <div className={`${Styles.main_row2_left_second}`}>
            <div className={`${Styles.main_row2_left_second_row1}`}>
              <h4 className={`${Styles.heading_h3}`}>Purchase Order</h4>
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
            <div className={`${Styles.main_row2_left_second_row2}`}>
              <div className={`${Styles.main_row2_left_second_row2_content}`}>
                <h4>Quantity Ordered</h4>
                <h4 style={{ color: "#1183af" }}>432</h4>
              </div>
              <div
                style={{
                  borderLeft: "1px solid rgb(214, 214, 214)",
                  height: "65px",
                }}
              ></div>
              <div className={`${Styles.main_row2_left_second_row2_content}`}>
                <h4>Total Cost</h4>
                <h4 style={{ color: "#1183af" }}>$432,432</h4>
              </div>
            </div>
          </div>
        </div>
        <div className={`${Styles.main_row2_right}`}>
          <div className={`${Styles.main_row2_left_second_row1}`}>
            <h4 className={`${Styles.heading_h3}`}>Purchase Order</h4>
            <Select
              defaultValue="This Month"
              style={{
                width: 120,
              }}
            >
              <Option value="This Month">This Month</Option>
              <Option value="Last Month">Last Month</Option>
            </Select>
          </div>
          <div className={`${Styles.main_row2_right_table}`}>
            <Table columns={columns} dataSource={TopSellingData} scroll={{x:850 ,y: 250 }}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Row2;
