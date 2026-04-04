"use client";


import HeaderFour from "@/layouts/headers/HeaderFour";
import Wrapper from "@/layouts/Wrapper";
import HeroHomFour from "./HeroHomFour";
import AboutHomeFour from "./AboutHomeFour";
import FeaturesHomeOne from "./FeaturesHomeOne";
import FeaturesHomeFour from "./FeaturesHomeFour";
import ServiceHomeFour from "./ServiceHomeFour";
import VideoHomeFour from "./VideoHomeFour";
import IntegrationHomeOne from "./IntegrationHomeOne";
import ProjectHomeFour from "./ProjectHomeFour";
import PricingHomeFour from "./PricingHomeFour";
import FaqHomeFour from "./FaqHomeFour";
import BlogHomeFour from "./BlogHomeFour";
import FooterFour from "@/layouts/footers/FooterFour";
import TestimonialHomeFour from "./TestimonialHomeFour";
import CtaHomeOne from "./CtaHomeOne";
import ContactArea from "./ContactArea";

export default function SeabassClub() {
  return (
    <Wrapper>
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroHomFour />
          <AboutHomeFour />
          <FeaturesHomeFour />
          <FeaturesHomeOne />
          <IntegrationHomeOne />
          <ServiceHomeFour />
          <VideoHomeFour />

          <TestimonialHomeFour />
          <FaqHomeFour />
          <CtaHomeOne />
          <ContactArea />
          <FooterFour />
        </div>
      </div>
    </Wrapper>
  );
}
