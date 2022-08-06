import React, { createContext, useState } from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import Navbar from "../../components/Navbar";
import Footer_matx from "../../components/Footer_matx";
import Slider from "../../components/Slider";
import NewCustomers from "../../components/Customers/NewCustomers";

const { Footer, Content } = Layout;
export const SiderContext = createContext();

const new_customer = () => {
    const [collapse, uncollapse] = useState(false);
  const [word, setWord] = useState(false);
  const toggle = () => setWord((value) => !value);
  return (
    
    <>
      <SiderContext.Provider value={collapse}>
        <Layout>
          <Slider val={word} />
          <Layout>
            <Navbar changeWord={() => setWord(toggle)} />
            <Content>
              <NewCustomers />
            </Content>
            <Footer>
              <Footer_matx />
            </Footer>
          </Layout>
        </Layout>
      </SiderContext.Provider>
      </>
    
  );
  }
export default new_customer;
