import React, { useState } from "react";
import Styles from "../../styles/product.module.css";
import { Button, Breadcrumb } from "antd";
import "antd/dist/antd.css";
import Link from "next/link";
import Image from "next/image";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PhoneIcon from "@mui/icons-material/Phone";

const ViewProduct = () => {
  const [image, setImage] = useState("/laptop-1.png");

  return (
    <>
      <div className={`${Styles.newProduct_breadcrumb_wrapper}`}>
        <div className={`${Styles.newProduct_main_div_head}`}>
          <h3 className={`${Styles.newProduct_main_div_h3}`}>View Product</h3>
        </div>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link href="/" className={`${Styles.breadcrumb_home}`}>
              HOME
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#">Pages</Breadcrumb.Item>
          <Breadcrumb.Item>View Product</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className={`${Styles.viewProduct_main_div}`}>
        <div className={`${Styles.viewProduct_main_div_left}`}>
          <Image src={image} width={465} height={355}></Image>
          <div className={`${Styles.bottomImages}`}>
            <Image
              src={"/laptop-1.png"}
              width={80}
              height={60}
              onClick={() => {
                setImage("/laptop-1.png");
              }}
            ></Image>
            <Image
              src={"/laptop-2.png"}
              width={80}
              height={60}
              onClick={() => {
                setImage("/laptop-2.png");
              }}
            ></Image>
            <Image
              src={"/laptop-3.png"}
              width={80}
              height={60}
              onClick={() => {
                setImage("/laptop-3.png");
              }}
            ></Image>
          </div>
        </div>
        <div className={`${Styles.viewProduct_main_div_right}`}>
          <div className={`${Styles.viewProduct_main_div_item_name}`}>
            <h3 className={`${Styles.viewProduct_main_div_item_name_h3}`}>
              Asus VivoBook X512FL-EJ723T 10th Gen Intel Core i5
            </h3>
            <h4
              className={`${Styles.viewProduct_main_div_other_h4} light_color`}
            >
              SKU: 0X50FOD
            </h4>
            <h4 className={`${Styles.viewProduct_main_div_other_h4}`}>
              <span className={`light_color`}>BRAND : </span>
              <span className={`${Styles.viewProduct_main_div_other_h4_span}`}>
                ASUS | More Laptop from Asus
              </span>
            </h4>
          </div>
          <div className={`${Styles.button_wrapper}`}>
            <Button
              icon={<ShoppingCartIcon />}
              className={`${Styles.viewProduct_addToCartButton}`}
            >
              Add to cart
            </Button>
          </div>
          <div className={`${Styles.info_wrapper}`}>
            <h3 className={`light_color`}>
              Have questions about this product (SKU: 0X2E615)
            </h3>
            <div className={`${Styles.call_option}`}>
              <PhoneIcon className={`${Styles.phoneIcon}`} />
              <p>019638111777</p>
            </div>
          </div>
          <div className={`${Styles.specs_wrapper}`}>
            <h4 className={`${Styles.specs}`}>Specification</h4>
            <p>
              Brand ASUS Processor Intel Core i5-10210U 10th Gen CPU Cache 6MB
              Ram 4GB DDR4 Ram Details 1 x 4 GB Non-Removable Expansion Ram Slot
              1 Storage 512GB PCIE G3 SSD Display 15.6 FHD Antiglare LED Display
              Resolution 1920x1080. FHD Optical Device No Graphics Chipset
              Nvidia MX250 Graphics Graphics Memory 2GB Networking WiFi,
              Bluetooth, Card Reader USB Port 1x USB 3.2 Gen 1 Type-A, 1x USB
              3.2 Gen 1 Type-C Video Port HDMI Audio Port Combo Finger Print Yes
              Keyboard Back-lit Yes Operating System Win-10 Home Battery 2 Cell
              Li-Ion Power Adapter 65 W AC power adapter Specialty Finger Print
              Sensor, Backlit Keyboard, Voice control with Cortana support, BIOS
              Booting User Password Protection, Fingerprint sensor intergrated
              with Touchpad Others Backlit: LED Backlit, OLED: LCD, Brightness:
              200nits, Aspect ratio: 16:9, Color gamut NTSC: 45%, Screen-to-body
              ratio: 88%, Output: 19V DC, 3.42A, 65W, Input: 100-240V AC 50/60Hz
              universal Warranty 2 years
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProduct;
