import React, { useState } from "react";
import Styles from "../../../styles/customers.module.css";
import "antd/dist/antd.css";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import { Form, Input, Button, Select } from "antd";
import { margin } from "@mui/system";

const { Option } = Select;

const ContactPersonForm = () => {
  const [isVisible, setisVisible] = useState(false);
  const onFinish = (values) => {
    pushDataToContactPersonTable(values);
  };
  const pushDataToContactPersonTable = (values) => {
    const api = {
      method: "POST",
      headers: {
        "x-hasura-admin-secret":
          "CBsY9yd7AgpK2t97dOTJfVr1igNu2xuJ9DSdJoVSxou8kAdXcsI29IGGcNvrvni7",
      },
      body: JSON.stringify({
        query: `mutation MyMutation {
          insert_ContactPersons_one(object: {Department: "${values.department}", Designation: "${values.designation}", EmailAddress: "${values.email}", FirstName: "${values.fname}", Mobile: ${values.mobile}, LastName: "${values.lname}", Salutaion: "${values.salutation}", WorkPhone: ${values.workPhone}}) {
            Department
            Designation
            EmailAddress
            FirstName
            LastName
            Mobile
            Salutaion
            WorkPhone
          }
        }
        `,
      }),
    };
    fetch("https://matx-website.hasura.app/v1/graphql", api);
  };

  return (
    <>
      <div
        className={`${Styles.contact_person_main_form_heading}`}
        style={isVisible == true ? { display: "none" } : { margin: 0 }}
      >
        <h3 className={`${Styles.contact_person_main_form_heading_h3}`}>
          Salutation
        </h3>
        <h3 className={`${Styles.contact_person_main_form_heading_h3}`}>
          First Name
        </h3>
        <h3 className={`${Styles.contact_person_main_form_heading_h3}`}>
          Last Name
        </h3>
        <h3 className={`${Styles.contact_person_main_form_heading_h3}`}>
          Email
        </h3>
        <h3 className={`${Styles.contact_person_main_form_heading_h3}`}>
          Work Phone
        </h3>
        <h3 className={`${Styles.contact_person_main_form_heading_h3}`}>
          Mobile
        </h3>
        <h3 className={`${Styles.contact_person_main_form_heading_h3}`}>
          Designation
        </h3>
        <h3 className={`${Styles.contact_person_main_form_heading_h3}`}>
          Department
        </h3>
      </div>
      {isVisible === true ? (
        <div className={`${Styles.contact_person_form_elements}`}>
          <Form
            layout="horizontal"
            onFinish={onFinish}
            className={`${Styles.contact_person_form_elements}`}
          >
            <Form.Item>
              <Input.Group compact>
                <Form.Item
                  name="salutation"
                  rules={[
                    {
                      required: true,
                      message: "Salutation is required",
                    },
                  ]}
                >
                  <Select placeholder="Salutation">
                    <Option value="Mr">Mr</Option>
                    <Option value="Mrs">Mrs</Option>
                    <Option value="Ms">Ms</Option>
                    <Option value="Dr">Dr</Option>
                  </Select>
                </Form.Item>
              </Input.Group>
            </Form.Item>
            <Form.Item name="fname">
              <Input placeholder="First Name" />
            </Form.Item>
            <Form.Item name="lname">
              <Input placeholder="Last Name" />
            </Form.Item>
            <Form.Item name="email">
              <Input placeholder=" Email" />
            </Form.Item>
            <Form.Item name="workPhone">
              <Input placeholder="Work Phone" />
            </Form.Item>
            <Form.Item name="mobile">
              <Input placeholder="Mobile" />
            </Form.Item>
            <Form.Item name="designation">
              <Input placeholder="Designation" />
            </Form.Item>
            <Form.Item name="department">
              <Input placeholder="Department" />
            </Form.Item>
            <Form.Item>
              <Button
                type="submit"
                htmlType="submit"
                className={`${Styles.done_button_contact_form}`}
              >
                <DoneIcon />
              </Button>
            </Form.Item>
            <button
              className={`${Styles.close_button_contact_form}`}
              onClick={() => setisVisible(false)}
            >
              <CloseIcon />
            </button>
          </Form>
        </div>
      ) : (
        ""
      )}
      <div className={`${Styles.contact_person_buttons}`}>
        <button
          type="primary"
          className={`${Styles.contact_person_add_button}`}
          onClick={() => setisVisible(true)}
        >
          + Add New Contact{" "}
        </button>
      </div>
    </>
  );
};

export default ContactPersonForm;
