import React from "react";
import { Breadcrumb } from "antd";
import Styles from "../../styles/customers.module.css";
import MainForm from "./NewCustomersforms/MainForm";
import BillingAddressForm from "./NewCustomersforms/BillingAddressForm";
import ShippingAddressForm from "./NewCustomersforms/ShippingAddressForm";
import ContactPersonForm from "./NewCustomersforms/ContactPersonForm";
import "antd/dist/antd.css";
import OtherDetailsForm from "./NewCustomersforms/OtherDetailsForm";
import Link from "next/link";
import { Tabs } from "antd";
const { TabPane } = Tabs;

const NewCustomers = () => {
  return (
    <>
      <div className={`${Styles.breadcumb_wrapper}`}>
        <div className={`${Styles.newCustomer_head}`}>
          <h3 className={`${Styles.newCustomer_head_h3}`}>New Customer</h3>
        </div>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link href='/' className={`${Styles.breadcumb_home}`}> HOME </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#">Pages</Breadcrumb.Item>
          <Breadcrumb.Item>New Customer</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className={`${Styles.main_form_wrapper} contain`}>
        <div className={`${Styles.main_form_wrapper_head}`}>
          <h3 className={`${Styles.main_form_wrapper_head_h3}`}>
            Add a New Customer
          </h3>
        </div>
        <div className={`${Styles.main_form_wrapper_form}`}>
          <MainForm />
          <Tabs defaultActiveKey="moreDetails">
            <TabPane tab="Other Details" key="otherDetails">
              <OtherDetailsForm />
            </TabPane>
            <TabPane tab="Address" key="address">
              <div className={`${Styles.main_address}`}>
                <div className={`${Styles.main_address_left}`}>
                  <BillingAddressForm />
                </div>
                <div className={`${Styles.main_address_right}`}>
                  <ShippingAddressForm />
                </div>
              </div>
            </TabPane>
            <TabPane tab="Contact Persons" key="contactPersons">
              <ContactPersonForm />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default NewCustomers;
