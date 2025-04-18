import React, { useEffect } from "react";
import BrandArea from "../../components/BrandArea/BrandArea";
import BreadcrumbArea1 from "../../components/BreadcrumbArea/BreadcrumbArea1";
import ServicesAreaAll from "../../components/ServicesArea/ServicesAreaAll";
import Layout from "../../layouts/Layout";
import { gsapTitleAnimation } from "../../lib/gsap-lib/gsapTitleAnimation";

const ServicesPageTwo = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <>
      <Layout header={1} footer={1}>
        <BreadcrumbArea1 title={"All Services-02"} subtitle={"All Services"} />
        <ServicesAreaAll />
        {/* <BrandArea className={"inner-brand-area pb-70"} /> */}
      </Layout>
    </>
  );
};

export default ServicesPageTwo;
