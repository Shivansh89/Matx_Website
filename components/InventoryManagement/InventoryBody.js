import React from "react";
import Tab1Content from "./Tab1Content";
import Tab2Content from "./Tab2Content";
import { Tabs } from "antd";
const { TabPane } = Tabs;

const InventoryBody = () => {
  return (
    <>
      <div className={`contain`}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Dashboard" key="1">
            <Tab1Content />
          </TabPane>
          <TabPane tab="Recent Updates" key="2">
            <Tab2Content />
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default InventoryBody;
