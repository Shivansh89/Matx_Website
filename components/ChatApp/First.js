import React, { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  addDoc,
} from "firebase/firestore/lite";
import Styles from "../../styles/chat.module.css";
import { Breadcrumb, Avatar, Image } from "antd";
import Link from "next/link";
import "antd/dist/antd.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Dropdown, Menu, Space } from "antd";
import SendIcon from "@mui/icons-material/Send";
import CircleIcon from "@mui/icons-material/Circle";
import { app } from "../../pages/chat/chat-app";

const data = [
  {
    name: "user1",
    id: "user_1",
    imgUrl: "https://matx-react.ui-lib.com/assets/images/faces/13.jpg",
  },
  {
    name: "user2",
    id: "user_2",
    imgUrl: "https://matx-react.ui-lib.com/assets/images/faces/13.jpg",
  },
  {
    name: "user3",
    id: "user_3",
    imgUrl: "https://matx-react.ui-lib.com/assets/images/faces/13.jpg",
  },
  {
    name: "user4",
    id: "user_4",
    imgUrl: "https://matx-react.ui-lib.com/assets/images/faces/13.jpg",
  },
  {
    name: "user5",
    id: "user_5",
    imgUrl: "https://matx-react.ui-lib.com/assets/images/faces/13.jpg",
  },
  {
    name: "user6",
    id: "user_6",
    imgUrl: "https://matx-react.ui-lib.com/assets/images/faces/13.jpg",
  },
  {
    name: "user7",
    id: "user_7",
    imgUrl: "https://matx-react.ui-lib.com/assets/images/faces/13.jpg",
  },
  {
    name: "user8",
    id: "user_8",
    imgUrl: "https://matx-react.ui-lib.com/assets/images/faces/13.jpg",
  },
];

const replyMsg = "Hi there....";

const dropmenu = (
  <Menu
    items={[
      {
        label: "Contact",
        key: "0",
      },
      {
        label: "Mute",
        key: "1",
      },

      {
        label: "Clear Chat",
        key: "3",
      },
    ]}
  />
);

const First = () => {
  const [recieverName, setRecieverName] = useState("user1");
  const [name, setName] = useState("John Doe");
  const [chats, setChats] = useState([]);

  const [msg, setMsg] = useState("");

  const db = getFirestore(app);

  const getData = async () => {
    const messagesArr = [];

    const allMsgRef = await getDocs(
      collection(db, "chats", recieverName, "messages")
    );
    allMsgRef.forEach((doc) => {
      messagesArr.push(doc.data());
    });
    messagesArr.sort((a, b) => {
      return a.time - b.time;
    });
    setChats(messagesArr);
    setMsg("");
  };
  const addDocument = () => {
    const dateDoc = new Date();
    const docRef = doc(db, "chats", `${recieverName}`);
    if (docRef) {
      const colRef = collection(docRef, "messages");
      if (colRef) {
        addDoc(colRef, {
          sender: name,
          message: msg,
          time: dateDoc,
        });
      }
    }
    setMsg("");
    getData();
  };
  const date = new Date();
  useEffect(() => {
    getData();
  }, [recieverName]);
  return (
    <>
      <div className={`${Styles.breadcumb_wrapper}`}>
        <div className={`${Styles.chat_head}`}>
          <h3 className={`${Styles.chat_head_h3}`}>Chat</h3>
        </div>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link href="/" className={`${Styles.breadcumb_home}`}>
              HOME
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Chat</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className={`${Styles.main_chat_div}`}>
        <div className={`${Styles.main_chat_div_left}`}>
          <div className={`${Styles.main_chat_div_left_head}`}>
            <div className={`${Styles.main_chat_div_left_head_avatar_div}`}>
              <Avatar
                className={`${Styles.main_chat_div_left_head_avatar}`}
                src={
                  <Image src="https://matx-react.ui-lib.com/assets/images/face-1.jpg" />
                }
              />
              <CircleIcon
                className={`${Styles.main_chat_div_left_head_avatar_online}`}
              />
            </div>
            <h4 className={`${Styles.main_chat_div_left_head_h4}`}>{name}</h4>
          </div>
          <div className={`${Styles.main_chat_div_left_bottom_all}`}>
            {data.map((item) => (
              <div
                className={`${Styles.main_chat_div_left_bottom}`}
                onClick={async () => {
                  getData();
                  setRecieverName(item.name);
                }}
              >
                <div className={`${Styles.main_chat_div_left_bottom_user}`}>
                  <Avatar
                    className={`${Styles.main_chat_div_left_head_avatar}`}
                    src={<Image src={item.imgUrl} />}
                  />
                  <div className={`${Styles.main_chat_div_left_bottom_info}`}>
                    <h3 className={`${Styles.main_chat_div_left_bottom_h3}`}>
                      {item.name}
                    </h3>
                    <p
                      className={`${Styles.main_chat_div_left_bottom_p} light_color`}
                    >{`${date.getDate()}/${
                      date.getMonth() + 1
                    }/${date.getFullYear()} `}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={`${Styles.main_chat_div_right}`}>
          <div className={`${Styles.main_chat_div_right_head}`}>
            <div className={`${Styles.main_chat_div_right_head_left}`}>
              <Avatar
                className={`${Styles.main_chat_div_left_head_avatar}`}
                src={
                  <Image src="https://matx-react.ui-lib.com/assets/images/faces/13.jpg" />
                }
              />
              <h2 className={`${Styles.main_chat_div_left_right_h2}`}>
                {recieverName}
              </h2>
            </div>
            <div className={`${Styles.main_chat_div_right_head_right}`}>
              <Dropdown overlay={dropmenu} trigger={["click"]}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <MoreVertIcon
                      className={`${Styles.main_chat_div_right_head_right_icon}`}
                    />
                  </Space>
                </a>
              </Dropdown>
            </div>
          </div>
          <div className={`${Styles.chat_box}`}>
            {chats.map((item) => (
              <div className={`${Styles.chat_container}`}>
                <div className={`${Styles.me} `}>
                  <p className={`${Styles.chatbox}`}>
                    <span>{item.message}</span>
                  </p>
                </div>
                <div className={`${Styles.other} `}>
                  <p className={`${Styles.chatbox}`}> {replyMsg}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={`${Styles.main_chat_div_right_bottom}`}>
            <input
              type="text"
              onInput={(e) => setMsg(e.target.value)}
              value={msg}
              placeholder="Enter your message"
              className={`${Styles.main_chat_div_right_bottom_input}`}
            ></input>
            <button
              onClick={(e) => {
                if (msg != "") {
                  addDocument();
                }
              }}
              className={`${Styles.main_chat_div_right_bottom_button}`}
            >
              <SendIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default First;
