"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from 'next/image';
import Link from 'next/link';
import "../../public/css/global.css";
// ... other imports
import sal from "sal.js";
import dynamic from "next/dynamic";
import "odometer/themes/odometer-theme-default.css";
import AccordionData from "../../data/elements/accordion.json";

import ServiceThree from "../Services/Service-Three";
import CallToAction from "../Call-To-Action/CallToAction";
import CounterTwo from "../Counters/Counter-Two";
import AdvanceTab from "@/components/AdvanceTab/AdvanceTab";
import { useParallax } from "react-scroll-parallax";

import hShapeDots from "../../public/images/shape/h-shape-dot-01.png";
import awardImg from "../../public/images/icons/award-gd-01.png";
import videoIcon from "../../public/images/icons/video-icon-01.png";
import personImg from "../../public/images/others/health-b-01.png";
import addImg from "../../public/images/others/health-b-02.png";
import union from "../../public/images/shape/v-union.png";
import signature from "../../public/images/others/signature-01.png";

import bgShape from "../../public/images/shape/wishlist-title-bg-shape.png";
import wishCourse from "../../public/images/course/wishlist-course-01.png";
import wishCourse3 from "../../public/images/course/wishlist-course-03.png";
import wishCourse4 from "../../public/images/course/wishlist-course-04.png";
import wishCourse5 from "../../public/images/course/wishlist-course-05.png";
import wishCourseGif from "../../public/images/course/wishlist-course-02.gif";
import wishTextShape from "../../public/images/shape/wishlist-text-shape-01.png";
import wishTextShape2 from "../../public/images/shape/wishlist-text-shape-02.png";
import wishDot from "../../public/images/shape/wishlist-dots.png";
import wishMen from "../../public/images/shape/wishlist-b-men.png";

import { ParallaxProvider } from "react-scroll-parallax";


const Odometer = dynamic(() => import("react-odometerjs"), {
  ssr: false,
  loading: () => 0,
});

const DemoSection = ({ blogs }) => {
  const ref1 = useRef(null);
  const [style1, setStyle1] = useState({});

  useEffect(() => {
    sal();
    setStyle1({ transform: "translateY(0px)" });
  }, []);

  return (
    <>
     <div
        className="rbt-banner-area rbt-banner-2 header-transperent-spacer"
        style={{ paddingTop: 127 }}
      >
        <div className="wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="banner-content text-center">
                  <div className="inner">
                    <div className="rbt-new-badge rbt-new-badge-one mb--30">
                      <span className="rbt-new-badge-icon">🔒 </span> Legally Valid & Secure for Your Business
                    </div>
                    <h1 className="title">
                   Simple, secure, and compliant 
                      <span style={{
  background: "linear-gradient(90deg, #07225b, #02acf7)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
}} className="theme-gradient px-3">
                       e-signatures
                      </span>
                      for growing teams
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <ServiceThree head={false} />
          </div>
        </div>
      </div>

  <div className="rbt-callto-action-area mt_dec--half">
        <CallToAction />
      </div>



      <div className="rbt-counterup-area bg-color-white rbt-section-gap">
        <CounterTwo />
      </div>

    <div className="rbt-advance-tab-area rbt-section-gap bg-color-white">
            <AdvanceTab
              tag="Key Features"
              title="Everything you need to sign documents online."
            />
          </div>

 
   <div className="rbt-course-area rbt-section-gapBottom">
        <div className="container">
          <div className="section-title-2 text-center with-shape mb--170 mb_lg--100 mb_md--100 mb_sm--100">
            <div className="shape-1" ref={ref1} style={style1}>
              <Image src={bgShape} width={285} height={285} alt="Shape" />
            </div>
            <h2 className="title">
              Advanced 
 <span className="color-body">(tools)</span> for complex workflows.{" "}
              
            </h2>
          </div>
          <div className="row g-5">
            <div
              className="col-xl-6 col-lg-6 col-md-6 col-12"
              data-sal-delay="0"
              data-sal="slide-up"
              data-sal-duration="800"
            >
              <div className="rbt-card variation-03 style_2">
                <div className="rbt-card-body">
                  <h5 className="rbt-card-title">
                   Send to hundreds at once.
                  </h5>
                  <p className="rbt-card-text">
                   Need 50 employees to sign a new policy? Upload a CSV list and send a unique copy to everyone in one click. 
                  </p>
                </div>
                <div className="rbt-card-img">
                <Image
  src="/images/course/wishlist-course-01.png"
  width={406}
  height={355}
  alt="Card image"
/>
                </div>
              </div>
            </div>

            <div
              className="col-xl-6 col-lg-6 col-md-6 col-12"
              data-sal-delay="0"
              data-sal="slide-up"
              data-sal-duration="800"
            >
              <div className="rbt-card variation-03 style_2">
                <div className="rbt-card-body">
                  <h5 className="rbt-card-title">Turn your tablet into a kiosk. </h5>
                  <p className="rbt-card-text">
                   Perfect for events, front desks, or field work. Let people sign directly on your device without sending an email. 
                  </p>
                </div>
                <div className="rbt-card-img">
                <Image
  src="/images/course/wishlist-course-02.gif"
  width={406}
  height={355}
  alt="Card image"
/>
                </div>
              </div>
            </div>

            <div
              className="col-xl-6 col-lg-6 col-md-6 col-12"
              data-sal-delay="100"
              data-sal="slide-up"
              data-sal-duration="800"
            >
              <div className="rbt-card variation-03 style_2">
                <div className="rbt-card-body">
                  <h5 className="rbt-card-title">
                   Organize & Collaborate. 
                  </h5>
                  <p className="rbt-card-text">
                    Stop chasing files in email threads. Share templates and completed documents with your team in secure, centralized folders. 
                  </p>
                </div>
                <div className="rbt-card-img">
                 <Image
  src="/images/course/wishlist-course-03.png"
  width={406}
  height={355}
  alt="Card image"
/>
                </div>
              </div>
            </div>

            <div
              className="col-xl-6 col-lg-6 col-md-6 col-12"
              data-sal-delay="100"
              data-sal="slide-up"
              data-sal-duration="800"
            >
              <div className="rbt-card variation-03 style_2">
                <div className="rbt-card-body">
                  <h5 className="rbt-card-title">Smart forms that adapt. </h5>
                  <p className="rbt-card-text">
                    Show or hide fields based on signer answers. Create dynamic contracts that adjust automatically to the data provided. 
                  </p>
                </div>
                <div className="rbt-card-img">
                <Image
  src="/images/course/wishlist-course-04.png"
  width={406}
  height={355}
  alt="Card image"
/>
                </div>
              </div>
            </div>

            <div
              className="col-12"
              data-sal-delay="150"
              data-sal="slide-up"
              data-sal-duration="800"
            >
              <div className="rbt-card variation-03 style_2 card-horizontal">
                <div className="rbt-card-body">
                  <h6>
                    <span className="theme-gradient">Support System</span>
                  </h6>
                  <h5 className="rbt-card-title">
                   
                  Enterprise power. Consumer simplicity.
                  
                    
                  </h5>
                  <p className="rbt-card-text">
                   We designed these advanced tools to be intuitive. You don't need an IT team or a training manual to build complex workflows—just log in and go. 
                  </p>
                </div>
                <div className="rbt-card-img-wrap">
                  <div className="shape-1">
                   <div className="shape-1">
  <Image src="/images/shape/wishlist-text-shape-01.png" width={66} height={32} alt="Shape" />
</div>
                  </div>
                  <div className="men-circle">
                  <div className="men-circle">
  <Image src="/images/shape/wishlist-b-men.png" width={151} height={145} alt="Shape" />
</div>
                  </div>
                  <div className="rbt-card-img">
                   <Image
  src="/images/course/wishlist-course-05.png"
  width={406}
  height={355}
  alt="Card image"
/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    <div className="rbt-About-area rbt-section-gapTop">
        <div className="about-style-4 version-02">
          <div className="u-shape">
            <Image src={union} width={136} height={136} alt="Shape" />
          </div>
          <div className="container">
            <div className="row row--40 mt_dec--40">
              <div className="col-xl-6 col-12 mt--40">
                <div className="about-thumb">
                  <div className="shape-1">
                    <Image
                      src={hShapeDots}
                      width={31}
                      height={82}
                      alt="Shape"
                    />
                  </div>
                  <div className="since">
                    <span>
                      <Image
                        src={awardImg}
                        width={36}
                        height={51}
                        alt="Award Icon"
                      />
                    </span>
                    <div className="title-wrap">
                      <h4 className="number">
                        <span
                          className="odometer rbt-font-primary"
                          data-count="1890"
                        >
                          <Odometer value={1890} />
                        </span>
                      </h4>
                      <h6 className="subtitle">Since</h6>
                    </div>
                  </div>
                  <div className="satisfied">
                    <span>
                      <Image src={videoIcon} width={41} height={41} alt="" />
                    </span>
                    <div className="title-wrap">
                      <h6 className="item-title">
                        <span
                          className="odometer rbt-font-primary"
                          data-count="99"
                        >
                          <Odometer value={99} />
                        </span>
                        %
                      </h6>
                      <h6 className="subtitle">Satisfied</h6>
                    </div>
                  </div>
               <div className="thumb-1">
  <Image
    src={personImg}
    width={390}
    height={480}
    alt="Thumb"
  />
</div>

<div className="thumb-2">
  <Image
    src={addImg}
    width={339}
    height={336}
    alt="Thumb"
  />
</div>
                </div>
              </div>
              <div className="col-xl-6 col-12 mt--40">
                <div className="content">
                  <div className="section-title">
                    <h6 className="b2 mb--15">
                      <span className="theme-gradient">
                        Get Started 

                      </span>
                    </h6>
                    <h2 className="title w-600">
                    Everything you need to grow your business. <br />{" "}
                      <svg
                        width="40"
                        height="30"
                        viewBox="0 0 40 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2 16.8032C7.91578 16.9588 13.8152 14.5642 17.3757 9.31372C18.7544 7.28056 19.2564 4.87202 19.6736 2.5C20.006 12.1364 30.1484 15.4819 38 16.8227C30.9581 16.3571 23.3519 20.0182 22.65 27.5C18.2438 20.052 10.1583 17.4958 2 16.8032Z"
                          fill="white"
                          stroke="url(#paint0_linear_100_66)"
                          strokeWidth="4"
                          strokeMiterlimit="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_100_66"
                            x1="18.2"
                            y1="2.5"
                            x2="18.2"
                            y2="27.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stopColor="#2F57EF"></stop>
                            <stop offset="1" stopColor="#C586EE"></stop>
                          </linearGradient>
                        </defs>
                      </svg>{" "}
                      Reach.
                    </h2>
                    <ul
                      className="rbt-course-tab-button mt--40 mb--35 justify-content-start nav nav-tabs"
                      id="rbt-myTab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="active"
                          id="development-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#development"
                          type="button"
                          role="tab"
                          aria-controls="development"
                          aria-selected="true"
                        >
                          <span className="filter-text">Start Free Trial 
</span>
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          id="ui_ux-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#ui-ux"
                          type="button"
                          role="tab"
                          aria-controls="ui-ux"
                          aria-selected="false"
                        >
                          <span className="filter-text">Become a Partner 
</span>
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          id="marketing-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#marketing"
                          type="button"
                          role="tab"
                          aria-controls="marketing"
                          aria-selected="false"
                        >
                          <span className="filter-text">Contact Sales</span>
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="rbt-myTabContent">
                      <div
                        className="tab-pane fade active show"
                        id="development"
                        role="tabpanel"
                        aria-labelledby="development-tab"
                      >
                        <p className="mt--20">
                         Experience the power of Signably with zero risk. Create your account in seconds, upload your first document, and get it signed today. No credit card required—just instant access to professional e-signatures. 
                        </p>
                        <ul className="mt--30 mb--25">
                          <li>
                            <span className="icon bg-primary-opacity">
                              <i className="feather-heart"></i>
                            </span>
                            <span className="text">No Credit Card Required </span>
                          </li>
                          <li>
                            <span className="icon bg-secondary-opacity">
                              <i className="feather-book"></i>
                            </span>
                            <span className="text">24/7 Priority Support</span>
                          </li>
                        </ul>
                       
                      </div>
                      <div
                        className="tab-pane fade"
                        id="ui-ux"
                        role="tabpanel"
                        aria-labelledby="ui_ux-tab"
                      >
                        <p className="mt--20">
                        Join the Signably Partner Program to expand your service offerings. Whether you are an agency, reseller, or software integrator, we provide the tools, commissions, and dedicated support you need to grow your revenue alongside us. 
                        </p>
                       <ul className="mt--30 mb--25">
                          <li>
                            <span className="icon bg-primary-opacity">
                              <i className="feather-heart"></i>
                            </span>
                            <span className="text">No Credit Card Required </span>
                          </li>
                          <li>
                            <span className="icon bg-secondary-opacity">
                              <i className="feather-book"></i>
                            </span>
                            <span className="text">24/7 Priority Support</span>
                          </li>
                        </ul>
                       
                      </div>
                      <div
                        className="tab-pane fade"
                        id="marketing"
                        role="tabpanel"
                        aria-labelledby="marketing-tab"
                      >
                        <p className="mt--20">
                         Have complex requirements or need a custom enterprise plan? Our team is ready to help you map out the perfect solution. Schedule a demo or chat with us to discuss volume pricing, API access, and dedicated onboarding. 
                        </p>
                         <ul className="mt--30 mb--25">
                          <li>
                            <span className="icon bg-primary-opacity">
                              <i className="feather-heart"></i>
                            </span>
                            <span className="text">No Credit Card Required </span>
                          </li>
                          <li>
                            <span className="icon bg-secondary-opacity">
                              <i className="feather-book"></i>
                            </span>
                            <span className="text">24/7 Priority Support</span>
                          </li>
                        </ul>
                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  <div style={{ marginTop: "100px", marginBottom: "50px" }} className="container">
        {AccordionData.AccordionThree.map((data, index) => (
          <div className="row g-5" key={index}>
            <div className="col-lg-6">
              <div className="rbt-accordion-style accordion">
                <div className="section-title text-start mb--60">
                  <h4 className="title">Frequently Asked Questions</h4>
                </div>
                <div className="rbt-accordion-style rbt-accordion-04 accordion">
                  <div className="accordion" id="accordionExamplec3">
                    {data.faqBody.map((item, innerIndex) => (
                      <div className="accordion-item card" key={innerIndex}>
                        <h2
                          className="accordion-header card-header"
                          id={item.heading}
                        >
                          <button
                            className={`accordion-button ${
                              !item.collapsed ? "collapsed" : ""
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${item.collapse}`}
                            aria-expanded={item.expanded}
                            aria-controls={item.collapse}
                          >
                            {item.accordionTitle}
                          </button>
                        </h2>
                        <div
                          id={item.collapse}
                          className={`accordion-collapse collapse ${
                            item.show ? "show" : ""
                          }`}
                          aria-labelledby={item.heading}
                          data-bs-parent="#accordionExamplec3"
                        >
                          <div className="accordion-body card-body">
                            {item.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="rbt-accordion-style accordion">
                <div className="section-title text-start mb--60">
                  <h4 className="title"></h4>
                <br />
                
                </div>
                <div className="rbt-accordion-style rbt-accordion-04 accordion">
                  <div className="accordion" id="faqs-accordionExamplec3">
                    {data.faqBody2.map((item, innerIndex) => (
                      <div className="accordion-item card" key={innerIndex}>
                        <h2
                          className="accordion-header card-header"
                          id={`faq-${item.heading}`}
                        >
                          <button
                            className={`accordion-button ${
                              !item.collapsed ? "collapsed" : ""
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#faq-${item.collapse}`}
                            aria-expanded={item.expanded}
                            aria-controls={`faq-${item.collapse}`}
                          >
                            {item.accordionTitle}
                          </button>
                        </h2>
                        <div
                          id={`faq-${item.collapse}`}
                          className={`accordion-collapse collapse ${
                            item.show ? "show" : ""
                          }`}
                          aria-labelledby={`faq-${item.heading}`}
                          data-bs-parent="#faqs-accordionExamplec3"
                        >
                          <div className="accordion-body card-body">
                            {item.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>



<TextWidget organizationId="11c96abb-b6fa-40c1-9bef-44e39faf3812" />
    
    </>
  );
};

export default DemoSection;