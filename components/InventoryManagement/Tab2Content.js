import React from "react";
import "antd/dist/antd.css";
import { Timeline } from "antd";
import Styles from "../../styles/InventoryManagement/tabs.module.css";

const data = {
  row1: {
    date: "15 SEP,2020",
    title: "What is Lorem Ipsum?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nostrum ipsam minima? Est obcaecati reprehenderit quae fuga doloribus odio sapiente voluptates, nisi animi inventore optio vero culpa vel necessitatibus ducimus dignissimos veritatis perferendis nesciunt maiores quam. Explicabo voluptatibus assumenda culpa tenetur magni pariatur nisi minus nemo aperiam.",
  },
  row2: {
    date: "01 AUG,2020",
    title: "Why do we use it?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nostrum ipsam minima? Est obcaecati reprehenderit quae fuga doloribus odio sapiente voluptates, nisi animi inventore optio vero culpa vel necessitatibus ducimus dignissimos veritatis perferendis nesciunt maiores quam. Explicabo voluptatibus assumenda culpa tenetur magni pariatur nisi minus nemo aperiam.",
  },
  row3: {
    date: "05 JUL,2020",
    title: "Where can i get some?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nostrum ipsam minima? Est obcaecati reprehenderit quae fuga doloribus odio sapiente voluptates, nisi animi inventore optio vero culpa vel necessitatibus ducimus dignissimos veritatis perferendis nesciunt maiores quam. Explicabo voluptatibus assumenda culpa tenetur magni pariatur nisi minus nemo aperiam.",
  },
  row4: {
    date: "12 MAY,2020",
    title: "Where does it come from?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nostrum ipsam minima? Est obcaecati reprehenderit quae fuga doloribus odio sapiente voluptates, nisi animi inventore optio vero culpa vel necessitatibus ducimus dignissimos veritatis perferendis nesciunt maiores quam. Explicabo voluptatibus assumenda culpa tenetur magni pariatur nisi minus nemo aperiam.",
  },
};

const Tab2Content = () => {
  return (
    <>
      <div className={`${Styles.tab2_main}`}>
        <Timeline>
          <Timeline.Item>
            <p className={`${Styles.date}`}>{data.row1.date}</p>
            <p className={`${Styles.title}`}>{data.row1.title}</p>
            <p>{data.row1.description}</p>
          </Timeline.Item>
          <Timeline.Item>
            <p className={`${Styles.date}`}>{data.row2.date}</p>
            <p className={`${Styles.title}`}>{data.row2.title}</p>
            <p>{data.row2.description}</p>
          </Timeline.Item>
          <Timeline.Item>
            <p className={`${Styles.date}`}>{data.row3.date}</p>
            <p className={`${Styles.title}`}>{data.row3.title}</p>
            <p>{data.row3.description}</p>
          </Timeline.Item>
          <Timeline.Item>
            <p className={`${Styles.date}`}>{data.row4.date}</p>
            <p className={`${Styles.title}`}>{data.row4.title}</p>
            <p>{data.row4.description}</p>
          </Timeline.Item>
          <Timeline.Item className={`${Styles.not_display}`}></Timeline.Item>
        </Timeline>
      </div>
    </>
  );
};

export default Tab2Content;
