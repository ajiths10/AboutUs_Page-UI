import React from "react";
import CopyrightFooter from "./components/CopyrightFooter";
import FooterContentBody from "./components/FooterContentBody";
import FooterDeliveryBox from "./components/FooterDeliveryBox";
import FooterForm from "./components/FooterForm";

const Footer = () => {
  return (
    <div className="bg-black min-h-[100px] w-full">
      <div className="flex flex-row text-slate-400 h-[150px] justify-evenly items-center p-5 pt-10">
        <FooterDeliveryBox />

        <FooterContentBody
          data={[
            "Gift Card",
            "Lookbook 2021",
            "Privacy Policy",
            "Snapping & Refund",
          ]}
        />

        <FooterContentBody
          data={["About Us", "contact Us", "Pricing Plan", "Knowledge Base"]}
        />

        <div>
          <h2>COMPANY</h2>
          <p className=" text-xs">
            Sign up & get all our latest updates and special offers
          </p>
          <FooterForm />
        </div>
      </div>

      <CopyrightFooter />
    </div>
  );
};

export default Footer;
