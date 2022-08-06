import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
import Styles from "../../../styles/customers.module.css";

const columns = [
  {
    title:'Method',
    dataIndex: "Method",
  },
  {
    title:'Status',
    dataIndex: "Status",
    render: (text) => (
      <p className={text === "200" ? "color_green" : "color_red"}>{text}</p>
    ),
  },
  {
    title:'Route',
    dataIndex: "Route",
  },
  {
    title:'IP',
    dataIndex: "IP",
  },
  {
    title:'Date',
    dataIndex: "Date",
  },
  
];

const LogsTab = () => {
  const [logsData, setData] = useState();
  const getLogTableData = () => {
    const api = {
      method: "POST",
      headers: {
        "x-hasura-admin-secret":
          "CBsY9yd7AgpK2t97dOTJfVr1igNu2xuJ9DSdJoVSxou8kAdXcsI29IGGcNvrvni7",
      },
      body: JSON.stringify({
        query: `query {
          logsTableCustomers {
            IP
            Date
            Route
            Method
            Status
          }
        }`,
      }),
    };
    fetch("https://matx-website.hasura.app/v1/graphql", api)
      .then(async (response) => {
        const Table_data = await response.json();
        setData(Table_data.data.logsTableCustomers);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getLogTableData();
  }, []);
  return (
    <>
      <div className={`${Styles.main_div_invoice} `}>
        <Table columns={columns} dataSource={logsData} scroll={{ x: 850 }} />
      </div>
    </>
  );
};

export default LogsTab;
