import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Styles from "../../../styles/customers.module.css";

const columns = [
  {
    title: "No",
    dataIndex: "No",
  },
  {
    title: "Date",
    dataIndex: "Date",
  },
  {
    title: "Description",
    dataIndex: "Description",
  },
  {
    title: "Method",
    dataIndex: "Method",
  },
  {
    title: "Total",
    dataIndex: "Total",
  },
  {
    title: "Status",
    dataIndex: "Status",
    render: (text) => (
      <p className={text === "paid" ? "color_green" : "color_red"}>{text}</p>
    ),
  },
  {
    title: "Action",
    dataIndex: "Action",
    render: () => (
      <ArrowRightAltIcon className={`${Styles.arrowButton_invoice}`} />
    ),
  },
];

const InvoiceTab = () => {
  const [invoiceData, setData] = useState();
  const getInvoiceTableData = () => {
    const api = {
      method: "POST",
      headers: {
        "x-hasura-admin-secret":
          "CBsY9yd7AgpK2t97dOTJfVr1igNu2xuJ9DSdJoVSxou8kAdXcsI29IGGcNvrvni7",
      },
      body: JSON.stringify({
        query: `query {
          invoiceTableCustomer {
            Action
            Date
            Description
            Method
            No
            Status
            Total
          }
        }`,
      }),
    };
    fetch("https://matx-website.hasura.app/v1/graphql", api)
      .then(async (response) => {
        const Table_data = await response.json();
        setData(Table_data.data.invoiceTableCustomer);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getInvoiceTableData();
  }, []);
  return (
    <>
      <div className={`${Styles.main_div_invoice} `}>
        <Table columns={columns} dataSource={invoiceData} scroll={{ x: 850 }} />
      </div>
    </>
  );
};

export default InvoiceTab;
