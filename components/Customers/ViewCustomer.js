import React from "react";
import { Breadcrumb } from "antd";
import Styles from "../../styles/customers.module.css";
import "antd/dist/antd.css";
import Link from "next/link";
import { Tabs } from "antd";
const { TabPane } = Tabs;
import DetailsTab from "./ViewCustomerTabs/DetailsTab";
import InvoiceTab from "./ViewCustomerTabs/InvoiceTab";
import LogsTab from "./ViewCustomerTabs/LogsTab";

const ViewCustomer = () => {
  return (
    <>
      <div className={`${Styles.breadcumb_wrapper}`}>
        <div className={`${Styles.newCustomer_head}`}>
          <h3 className={`${Styles.newCustomer_head_h3}`}>View Customer</h3>
        </div>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link href="/" className={`${Styles.breadcumb_home}`}>
              HOME
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#">Pages</Breadcrumb.Item>
          <Breadcrumb.Item>View Customer</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className={`contain`}>
        <Tabs defaultActiveKey="moreDetails">
          <TabPane tab="Details" key="details">
            <DetailsTab />
          </TabPane>
          <TabPane tab="Invoices" key="invoices">
            <InvoiceTab />
          </TabPane>
          <TabPane tab="Logs" key="logs">
          <LogsTab />
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default ViewCustomer;
