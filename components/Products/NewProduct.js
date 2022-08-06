import React from "react";
import Styles from "../../styles/product.module.css";
import "antd/dist/antd.css";
import { Form, Input, Select, Button, Breadcrumb, message, Upload } from "antd";
import Link from "next/link";
import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Option } = Select;

const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },

  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }

    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const NewProduct = () => {
  const [productData, setProductData] = useState();

  const onFinish = (values) => {
    console.log(values);
    addProductDataTOTable(values);
  };

  const addProductDataTOTable = (values) => {
    const api = {
      method: "POST",
      headers: {
        "x-hasura-admin-secret":
          "CBsY9yd7AgpK2t97dOTJfVr1igNu2xuJ9DSdJoVSxou8kAdXcsI29IGGcNvrvni7",
      },
      body: JSON.stringify({
        query: `mutation MyMutation {
                insert_productsTable_one(object: {Category: "${values.category}", Description: "${values.description}", MinimumOrderAmount: "${values.moa}", ProductCode: "${values.productCode}", Name: "${values.name}", Price: "${values.price}", SKU: "${values.sku}", Quantity: "${values.quantity}", SalePrice: "${values.salePrice}", imgURL: "${values.imgUrl}"}) {
                  Category
                  Description
                  MinimumOrderAmount
                  Name
                  Price
                  ProductCode
                  Quantity
                  SKU
                  SalePrice
                  imgURL
                }
              }
              `,
      }),
    };
    fetch("https://matx-website.hasura.app/v1/graphql", api);
  };

  return (
    <>
      <div className={`${Styles.newProduct_breadcrumb_wrapper}`}>
        <div className={`${Styles.newProduct_main_div_head}`}>
          <h3 className={`${Styles.newProduct_main_div_h3}`}>New Product</h3>
        </div>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link href="/" className={`${Styles.breadcrumb_home}`}>
              HOME
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#">Pages</Breadcrumb.Item>
          <Breadcrumb.Item>New Product</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className={`${Styles.newProduct_main_div} contain`}>
        <div className={`${Styles.newProduct_main_div_form_head}`}>
          <h3 className={`${Styles.newProduct_form_head_h3}`}>
            Add New Product
          </h3>
        </div>
        <div className={`${Styles.newProduct_main_form}`}>
          <Form onFinish={onFinish} className={`${Styles.newProduct_form}`}>
            <div className={`${Styles.newProduct_main_form_left}`}>
              <Form.Item name="name">
                <Input placeholder="Name" />
              </Form.Item>
              <Form.Item name="description">
                <Input placeholder="Description" />
              </Form.Item>
              <Form.Item name="category">
                <Select
                  placeholder="Category"
                  style={{
                    width: "100%",
                  }}
                >
                  <Option value="books">Books</Option>
                  <Option value="clothes">Clothes</Option>
                  <Option value="electronics">Electronics</Option>
                  <Option value="toys">Toys</Option>
                  <Option value="utensils">Utensils</Option>
                </Select>
              </Form.Item>
              <Form.Item name="imgUrl">
                <div className={`${Styles.newProduct_main_form_imageAdd}`}>
                  <Upload {...props}>
                    <Button
                      icon={<UploadOutlined />}
                      className={`${Styles.newProduct_main_form_imageAdd_button}`}
                    >
                      Drop Product Images
                    </Button>
                    <Button
                      icon={<UploadOutlined />}
                      className={`${Styles.newProduct_main_form_imageAdd_button_small}`}
                    ></Button>
                  </Upload>
                </div>
              </Form.Item>
              <Form.Item className={`${Styles.newProduct_submit_button_form_item}`}>
                <Button
                  type="Submit"
                  htmlType="submit"
                  className={`${Styles.newProduct_submit_button}`}
                >
                  Add Product
                </Button>
              </Form.Item>
            </div>

            <div className={`${Styles.newProduct_main_form_right}`}>
              <Form.Item name="productCode">
                <Input placeholder="Product Code" />
              </Form.Item>
              <Form.Item name="sku">
                <Input placeholder="SKU" />
              </Form.Item>
              <Form.Item name="price">
                <Input placeholder="Price" />
              </Form.Item>
              <Form.Item name="salePrice">
                <Input placeholder="Sale Price" />
              </Form.Item>
              <Form.Item name="quantity">
                <Input placeholder="Quantity" />
              </Form.Item>
              <Form.Item name="moa">
                <Input placeholder="Minimum Order Amount" />
              </Form.Item>
              <Form.Item>
                <Button
                  type="Submit"
                  htmlType="submit"
                  className={`${Styles.newProduct_submit_button_small}`}
                >
                  Add Product
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default NewProduct;
