import React from "react";
import "antd/dist/antd.css";
import Styles from "../../../styles/InventoryManagement/tabs.module.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CardGiftcardRoundedIcon from "@mui/icons-material/CardGiftcardRounded";
import { Card } from "antd";
const { Meta } = Card;

const Row1 = () => {
  return (
    <>
      <div className={`${Styles.tab1row1} `}>
        <div className={`${Styles.content_left} `}>
          <h3 className={`${Styles.heading_h3} light_color`}>Sales Activity</h3>
          <div>
            <div
              className={` ${Styles.body_cards} ${Styles.ant_card_bordered}`}
            >
              <Card className={` ${Styles.ant_card_bordered} ${Styles.setHeight}`}>
                <Meta
                  avatar={<CardGiftcardRoundedIcon className={`light_color`} />}
                  title="10,495"
                  description="To Be Packed"
                  className={`${Styles.card_content}`}
                />
              </Card>
              <Card className={`${Styles.ant_card_bordered_for_extra_small}`}>
                <Meta
                  avatar={<LocalShippingIcon className={`light_color`} />}
                  title="30,492"
                  description="To Be Shipped"
                  className={`${Styles.card_content} ${Styles.ant_card_bordered_for_extra_small}`}
                />
              </Card>
              <Card className={` ${Styles.ant_card_bordered_for_small}`}>
                <Meta
                  avatar={<AssignmentTurnedInIcon className={`light_color`} />}
                  title="45,269"
                  description="To Be Delivered"
                  className={`${Styles.card_content}`}
                />
              </Card>
              <Card className={`${Styles.ant_card_bordered_for_extra_small}`}>
                <Meta
                  avatar={<AssignmentIcon className={`light_color`} />}
                  title="20,965"
                  description="To Be Invoiced"
                  className={`${Styles.card_content}`}
                />
              </Card>
            </div>
          </div>
        </div>
        <div className={`${Styles.content_right} `}>
          <h3 className={`${Styles.heading_h3} light_color`}>
            Inventory Summary
          </h3>
          <div className={`${Styles.right_cards}`}>
            <Card className={` ${Styles.ant_card_bordered} ${Styles.right_content_margin} ${Styles.ant_card_bordered_col_cards}`}>
            <div className={` ${Styles.right_card_content}`}>
                    <h4>QUANTITY IN HAND</h4>
                    <h4>540</h4>
                </div>
            </Card>
            <Card className={` ${Styles.ant_card_bordered} ${Styles.ant_card_bordered_col_cards}`}>
                <div className={` ${Styles.right_card_content} `}>
                    <h4>QUANTITY TO BE RECIEVED</h4>
                    <h4>120</h4>
                </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Row1;
