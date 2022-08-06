import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Select, Button } from "antd";
import Styles from "../../../styles/customers.module.css";
const { Option } = Select;

const OtherDetailsForm = () => {
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
      >
        <Form.Item label="Currency">
          <Input.Group compact>
            <Form.Item
              name={["currency", "currency"]}
              style={{
                display: "inline-block",
                width: "calc(35% - 8px)",
                margin: "0 8px",
              }}
            >
              <Select placeholder="Currency">
                <Option value="USD">USD</Option>
                <Option value="CNY">CNY</Option>
                <Option value="EUR">EUR</Option>
                <Option value="AUD">AUD</Option>
                <Option value="JPY">JPY</Option>
              </Select>
            </Form.Item>
          </Input.Group>
        </Form.Item>
        <Form.Item label="Payment Terms">
          <Input.Group compact>
            <Form.Item
              name={["payment-terms", "payment-terms"]}
              style={{
                display: "inline-block",
                width: "calc(35% - 8px)",
                margin: "0 8px",
              }}
            >
              <Select placeholder="Terms">
                <Option value="NET 15">NET 15</Option>
                <Option value="NET 30">NET 30</Option>
                <Option value="NET 45">NET 45</Option>
                <Option value="NET 60">NET 60</Option>
                <Option value="Due end of month">Due end of month</Option>
                <Option value="Due on recieve">Due on recieve</Option>
              </Select>
            </Form.Item>
          </Input.Group>
        </Form.Item>

        <Form.Item label="Facebook">
          <Input placeholder="Facebook" />
        </Form.Item>
        <Form.Item label="Twitter">
          <Input placeholder="Twitter" />
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

export default OtherDetailsForm;
