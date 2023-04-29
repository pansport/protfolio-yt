import React from "react";
import "./Project.css";
import Hero2 from "../../components/Hero2/Hero2";
import Pricing from "../../components/Pricing/Pricing";

export default function Project() {
  return (
    <>
      <Hero2 heading="PROJECTS." subheading="Some of my most recent work" />
      <Pricing />
    </>
  );
}
