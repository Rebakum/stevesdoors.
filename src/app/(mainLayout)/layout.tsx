import Footer from "@/Components/Sheared/Footer";
import Navbar from "@/Components/Sheared/Navbar/Navbar";
import TopHeader from "@/Components/Sheared/TopHeader/TopHeader";
import React from "react";

const mainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      {/* navbar */}
      <TopHeader />
      <Navbar />
      {/* main content */}
      <div className=" min-h-screen">{children}</div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default mainLayout;
