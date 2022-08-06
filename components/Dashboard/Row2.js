import React from "react";
import Styles from "../../styles/Dashboard/Row.module.css";
import GroupIcon from "@mui/icons-material/Group";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import KeyboardVoiceRoundedIcon from "@mui/icons-material/KeyboardVoiceRounded";
import CardGiftcardRoundedIcon from "@mui/icons-material/CardGiftcardRounded";
import { Card } from "antd";
const { Meta } = Card;

const Row2 = () => {
  return (
    <>
      <div className={` ${Styles.body_cards} ${Styles.ant_card_bordered}`}>
        <Card>
          <Meta
            avatar={<GroupIcon className={`${Styles.light_color}`}/>}
            title="10,495"
            description="New Members"
            className={`${Styles.card_content}`}
          />
        </Card>
        <Card>
          <Meta
            avatar={<LocationOnRoundedIcon className={`${Styles.light_color}`}/>}
            title="30,492"
            description="Places added"
            className={`${Styles.card_content}`}
          />
        </Card>
        <Card>
          <Meta
            avatar={<KeyboardVoiceRoundedIcon className={`${Styles.light_color}`}/>}
            title="45,269"
            description="Support Members"
            className={`${Styles.card_content}`}
          />
        </Card>
        <Card>
          <Meta
            avatar={<CardGiftcardRoundedIcon className={`${Styles.light_color}`}/>}
            title="20,965"
            description="Tags Used"
            className={`${Styles.card_content}`}
          />
        </Card>
      </div>
    </>
  );
};

export default Row2;
