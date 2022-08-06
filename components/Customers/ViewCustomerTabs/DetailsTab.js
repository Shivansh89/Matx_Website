import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
import Styles from "../../../styles/customers.module.css";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import PersonIcon from "@mui/icons-material/Person";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Avatar, Select, Button } from "antd";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
const { Option } = Select;

const userData = [
  {
    left: "Phone",
    right: "+1 439 327 546",
  },
  {
    left: "Country",
    right: "USA",
  },
  {
    left: "State/Region",
    right: "New York",
  },
  {
    left: "Address 1",
    right: "Street Tailwood, No. 17",
  },
  {
    left: "Address 2",
    right: "House #19",
  },
];

const billData = [
  {
    left: "Credit Card",
    right: "**** **** **** **** 4242",
  },
  {
    left: "Paid",
    right: "5 ($500.00)",
  },
  {
    left: "Draft",
    right: "2 ($150.00)",
  },
  {
    left: "Unpaid/Due",
    right: "1 ($355.00)",
  },
  {
    left: "Refunded",
    right: "0 ($0.00)",
  },
  {
    left: "Gross Income",
    right: "$2100.00",
  },
];

const DetailsTab = () => {
  return (
    <>
      <div className={`${Styles.details_row1_div}`}>
        <Card className={`${Styles.details_row1_card}`}>
          <div className={`${Styles.details_row1_card_left_top}`}>
            <Avatar
              size={84}
              src="https://matx-react.ui-lib.com/assets/images/faces/10.jpg"
            />
            <h3 className={`${Styles.details_row1_card_left_top_h3}`}>
              Ben Peterson
            </h3>
            <p className={`${Styles.details_row1_card_left_top_p}`}>
              CEO, Brack Ltd.
            </p>
          </div>
          <div className={`${Styles.details_row1_card_left_mid}`}>
            <div className={`${Styles.details_row1_card_left_mid_rows}`}>
              <div
                className={`${Styles.details_row1_card_left_mid_content_left}`}
              >
                <h4>Email</h4>
              </div>
              <div
                className={`${Styles.details_row1_card_left_mid_content_right}`}
              >
                <p className={`${Styles.right_row1_content_detail_page}`}>
                  ui-lib@example.com
                </p>
                <p className={`${Styles.right_email_verified}`}>
                  EMAIL VERIFIED
                </p>
              </div>
            </div>
            {userData.map((item) => {
              return (
                <div className={`${Styles.details_row1_card_left_mid_rows}`}>
                  <div
                    className={`${Styles.details_row1_card_left_mid_content_left}`}
                  >
                    <h4>{item.left}</h4>
                  </div>
                  <div
                    className={`${Styles.details_row1_card_left_mid_content_right}`}
                  >
                    <h3
                      className={`${Styles.right_row1_content_detail_page_h3}`}
                    >
                      {item.right}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={`${Styles.details_row1_card_left_bottom}`}>
            <LockOpenIcon
              className={`${Styles.right_row1_content_detail_page_icon}`}
            />
            <p className={`${Styles.right_row1_content_detail_page}`}>
              {" "}
              Reset & Send Password
            </p>
          </div>
          <div className={`${Styles.details_row1_card_left_bottom}`}>
            <PersonIcon
              className={`${Styles.right_row1_content_detail_page_icon}`}
            />
            <p className={`${Styles.right_row1_content_detail_page}`}>
              {" "}
              Login as Customer
            </p>
          </div>
        </Card>
        <Card className={`${Styles.details_row1_card_right}`}>
          <div className={`${Styles.details_row1_card_right_top}`}>
            <h3 className={`${Styles.details_row1_card_left_top_h3}`}>
              Ben Peterson
            </h3>
          </div>
          <div className={`${Styles.details_row1_card_left_mid}`}>
            {billData.map((item) => {
              return (
                <div className={`${Styles.details_row1_card_left_mid_rows}`}>
                  <div
                    className={`${Styles.details_row1_card_left_mid_content_left}`}
                  >
                    <h4>{item.left}</h4>
                  </div>
                  <div
                    className={`${Styles.details_row1_card_left_mid_content_right}`}
                  >
                    <h3
                      className={`${Styles.right_row1_content_detail_page_h3}`}
                    >
                      {item.right}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={`${Styles.details_row1_card_left_bottom}`}>
            <AttachMoneyIcon
              className={`${Styles.right_row1_content_detail_page_icon}`}
            />
            <p className={`${Styles.right_row1_content_detail_page}`}>
              {" "}
              Reset & Send Password
            </p>
          </div>
          <div className={`${Styles.details_row1_card_left_bottom}`}>
            <ReceiptIcon
              className={`${Styles.right_row1_content_detail_page_icon}`}
            />
            <p className={`${Styles.right_row1_content_detail_page}`}>
              {" "}
              Resend Due Invoices
            </p>
          </div>
        </Card>
      </div>
      <div className={`${Styles.details_row2_div}`}>
        <Card title="Send Email" className={`${Styles.details_row2_card}`}>
          <Select
            defaultValue="Resend Last Invoice"
            style={{
              width: "100%",
            }}
          >
            <Option value="Resend Last Invoice">Resend Last Invoice</Option>
            <Option value="Send Password Reset Email">
              Send Password Reset Email
            </Option>
            <Option value="Send Verification Email">
              Send Verification Email
            </Option>
          </Select>
          <Button className={`${Styles.details_row2_card_button}`}>
            <div className={`${Styles.details_row2_card_button_content}`}>
              <MailOutlineIcon />
              <p className={`${Styles.details_row2_card_button_content_p}`}>
                Send Email
              </p>
            </div>
          </Button>
          <div className={`${Styles.details_row1_card_left_mid_rows}`}>
            <div
              className={`${Styles.details_row1_card_left_mid_content_left}`}
            >
              <h4>27/10/2020 | 12:23</h4>
            </div>
            <div
              className={`${Styles.details_row1_card_left_mid_content_right}`}
            >
              <p className={`${Styles.right_row1_content_detail_page}`}>
                Order Received
              </p>
            </div>
          </div>
          <div className={`${Styles.details_row1_card_left_mid_rows}`}>
            <div
              className={`${Styles.details_row1_card_left_mid_content_left}`}
            >
              <h4>11/05/2020 | 01:19</h4>
            </div>
            <div
              className={`${Styles.details_row1_card_left_mid_content_right}`}
            >
              <p className={`${Styles.right_row1_content_detail_page}`}>
                Order Confimation
              </p>
            </div>
          </div>
        </Card>
        <Card title="Other Actions" className={`${Styles.details_row2_card2}`}>
          <div className={`${Styles.details_row1_card_left_bottom}`}>
            <NotInterestedIcon
              className={`${Styles.right_row1_content_detail_page_icon}`}
            />
            <p className={`${Styles.right_row1_content_detail_page}`}>
              {" "}
              Close Account
            </p>
          </div>
          <div className={`${Styles.details_row1_card_left_bottom}`}>
            <FileDownloadIcon
              className={`${Styles.right_row1_content_detail_page_icon}`}
            />
            <p className={`${Styles.right_row1_content_detail_page}`}>
              {" "}
              Export Data
            </p>
          </div>
          <div
            className={`${Styles.details_row1_card_left_bottom} ${Styles.details_row1_card_left_bottom_extra}`}
          >
            <InfoIcon
              className={`${Styles.right_row1_content_detail_page_icon} ${Styles.right_row1_content_detail_page_icon_extra}`}
            />
            <p
              className={`${Styles.right_row1_content_detail_page} ${Styles.right_row1_content_detail_page_extra}`}
            >
              {" "}
              Once you delete account, data will lost forever.
            </p>
          </div>
          <Button
            className={`${Styles.details_row2_card_button} ${Styles.details_row2_card_button_extra}`}
          >
            <div className={`${Styles.details_row2_card_button_content}`}>
              <DeleteIcon />
              <p className={`${Styles.details_row2_card_button_content_p}`}>
                Delete Account
              </p>
            </div>
          </Button>
        </Card>
      </div>
    </>
  );
};

export default DetailsTab;
