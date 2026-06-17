import BackToTop from "../backToTop";
import DemoPage from "./(demopage)";      // ← Capital D, different from const name below
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Your New Demo Title",
  description: "Your description here",
};

const DemoPageLayout = async () => {      // ← different name from import above
  const blog = await getAllPostsMeta();
  return (
    <>
      <DemoPage getBlog={blog} />         {/* ← Capital D, matches import */}
      <BackToTop />
    </>
  );
};

export default DemoPageLayout;            // ← matches the const name above