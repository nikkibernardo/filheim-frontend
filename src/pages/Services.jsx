import React from "react";
import Navbar from "../components/Navbar";
import bgImg from '../assets/bg.png';
import ServicesHero from "../components/services/ServicesHero";
import ServicesCusto from "../components/services/ServicesCusto";
import ServicesCraftmanship from "../components/services/ServicesCraftmanship";
import ServicesInstallation from "../components/services/ServicesInstallation";
import ServicesMaintenance from "../components/services/ServicesMaintenance";
import ServicesFAQ from "../components/services/ServicesFAQ";

function ServicesPage() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          minHeight: '350px',
        }}
      >
        <Navbar />
        <ServicesHero />
      </div>
      <ServicesCusto />
      <ServicesCraftmanship />
      <ServicesInstallation />
      <ServicesMaintenance />
      <ServicesFAQ />
    </div>
  );
}

export default ServicesPage;