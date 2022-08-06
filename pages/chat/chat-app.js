import React, { createContext, useState } from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import Navbar from "../../components/Navbar";
import Footer_matx from "../../components/Footer_matx";
import Slider from "../../components/Slider";
import { initializeApp } from "firebase/app";
import First from "../../components/ChatApp/First";

const { Footer, Content } = Layout;
export const SiderContext = createContext();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaIbDIg3SKI1j6Neswmj7XB9eryIOMr8o",
  authDomain: "matx-chat-app.firebaseapp.com",
  databaseURL: "https://matx-chat-app-default-rtdb.firebaseio.com",
  projectId: "matx-chat-app",
  storageBucket: "matx-chat-app.appspot.com",
  messagingSenderId: "814073176966",
  appId: "1:814073176966:web:d36f6826829dfddc5dc207",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const chat_app = () => {
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
              <First />
            </Content>
            <Footer>
              <Footer_matx />
            </Footer>
          </Layout>
        </Layout>
      </SiderContext.Provider>
    </>
  );
};

export default chat_app;
