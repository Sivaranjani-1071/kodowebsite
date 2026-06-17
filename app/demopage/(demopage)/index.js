"use client";

import { Provider } from "react-redux";
import Store from "@/redux/store";

import Context from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";

import HeaderStyleSix from "@/components/Header/HeaderStyle-Six";
import DemoSection from "@/components/demopage/DemoPage";   // ← your new component
import FooterFour from "@/components/Footer/FooterFour";

const DemoPage = ({ getBlog }) => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleSix headerType="rbt-transparent-header" />
          <Cart />

          <DemoSection blogs={getBlog} />    {/* ← your main content */}

          <FooterFour />
        </Context>
      </Provider>
    </>
  );
};

export default DemoPage;