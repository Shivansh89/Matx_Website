import React, { useState } from "react";
import Styles from "../../../styles/customers.module.css";
import "antd/dist/antd.css";
import { Form, Input, Radio, Select, Button } from "antd";
const { Option } = Select;

const MainForm = () => {
  const onFinish = (values) => {
    console.log(values);
    postDataToMainFormTable(values);
  };

  const postDataToMainFormTable = (values) => {
    const api = {
      method: "POST",
      headers: {
        "x-hasura-admin-secret":
          "CBsY9yd7AgpK2t97dOTJfVr1igNu2xuJ9DSdJoVSxou8kAdXcsI29IGGcNvrvni7",
      },
      body: JSON.stringify({
        query: `mutation MyMutation {
          insert_NewCustomer_one(object: {CompanyName: "${values.companyName}", CustomerEmail: "${values.customerEmail}", CustomerType: "${values.customerType}", DisplayName: "${values.displayName}", Mobile: "${values.mobile}", Name: "${values.fname}", Website: "${values.website}", WorkPhone: "${values.workPhone}"}) {
            CompanyName
            CustomerEmail
            CustomerType
            DisplayName
            Mobile
            Name
            Website
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
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 15,
        }}
        layout="horizontal"
        onFinish={onFinish}
      >
        <Form.Item label="Customer Type" name="customerType">
          <Radio.Group>
            <Radio value="business"> Business </Radio>
            <Radio value="individual"> Individual </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Name" name="name">
          <Input.Group compact>
            <Form.Item
              name="salutation"
              style={{
                display: "inline-block",
                width: "calc(25% - 8px)",
                margin: "0 8px",
              }}
              rules={[
                {
                  required: true,
                  message: "Province is required",
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
            <Form.Item
              name="fname"
              style={{
                display: "inline-block",
                width: "calc(25% - 8px)",
                margin: "0 8px",
              }}
            >
              <Input placeholder="First Name" />
            </Form.Item>
            <Form.Item
              name="lname"
              style={{
                display: "inline-block",
                width: "calc(25% - 8px)",
                margin: "0 8px",
              }}
            >
              <Input placeholder="Last Name" />
            </Form.Item>
          </Input.Group>
        </Form.Item>

        <Form.Item label="Company Name" name="companyName">
          <Input placeholder="Company Name" />
        </Form.Item>
        <Form.Item label="Display Name" name="displayName">
          <Input placeholder="Customer Display Name" />
        </Form.Item>
        <Form.Item label="Customer Email" name="customerEmail">
          <Input placeholder="Customer Email" />
        </Form.Item>
        <Form.Item label="Customer Phone">
          <Input.Group compact>
            <Form.Item
              name="workPhone"
              style={{
                display: "inline-block",
                width: "calc(35% - 8px)",
                margin: "0 8px",
              }}
            >
              <Input placeholder="Work Phone" />
            </Form.Item>
            <Form.Item
              name="mobile"
              style={{
                display: "inline-block",
                width: "calc(35% - 8px)",
                margin: "0px",
              }}
            >
              <Input placeholder="Mobile" />
            </Form.Item>
          </Input.Group>
        </Form.Item>

        <Form.Item label="Website" name="website">
          <Input placeholder="Website" />
        </Form.Item>
        <Form.Item>
          <Button
            type="submit"
            htmlType="submit"
            className={`${Styles.submit_button_forms}`}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default MainForm;
