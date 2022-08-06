import React, { useState } from "react";
import Styles from "../../../styles/customers.module.css";
import "antd/dist/antd.css";
import { Form, Input, Select, Button } from "antd";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import itLocale from "i18n-iso-countries/langs/it.json";

const { Option } = Select;

const BillingAddressForm = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const selectCountryHandler = (value) => setSelectedCountry(value);

  countries.registerLocale(enLocale);
  countries.registerLocale(itLocale);

  const countryObj = countries.getNames("en", { select: "official" });

  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key,
    };
  });
  return (
    <>
      <div className={`${Styles.address_form_heading_bill}`}>
        <h3 className={`${Styles.address_form_heading_h3}`}>BILLING ADDRESS</h3>
      </div>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 18,
        }}
        layout="horizontal"
      >
        <Form.Item label="Attention">
          <Input placeholder="Attention" />
        </Form.Item>
        <Form.Item label="Country">
          <Input.Group compact>
            <Form.Item
              name={["country", "country"]}
              style={{
                display: "inline-block",
                width: "calc(35% - 8px)",
                margin: "0 8px",
              }}
            >
              <Select
                placeholder="Country"
                value={selectedCountry}
                onChange={(e) => selectCountryHandler(e.target.value)}
              >
                {!!countryArr?.length &&
                  countryArr.map(({ label, value }) => (
                    <Option key={value} value={value}>
                      {label}
                    </Option>
                  ))}
              </Select>
            </Form.Item>
          </Input.Group>
        </Form.Item>
        <Form.Item label="Address">
          <Input placeholder="Address" />
        </Form.Item>
        <Form.Item label="City">
          <Input placeholder="City" />
        </Form.Item>
        <Form.Item label="State">
          <Input placeholder="State" />
        </Form.Item>
        <Form.Item label="Zip">
          <Input placeholder="Zip" />
        </Form.Item>
        <Form.Item label="Phone">
          <Input placeholder="Phone" />
        </Form.Item>
        <Form.Item label="Fax">
          <Input placeholder="Fax" />
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

export default BillingAddressForm;
