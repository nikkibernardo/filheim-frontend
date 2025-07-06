import React from "react";
import HomepageS2 from "../components/Home/HomepageS2";
import HomepageS1 from "../components/home/HomepageS1";
import Navbar from "../components/Navbar";
import bgImg from '../assets/bg.png';
import HomepageCTA from "../components/home/HomepageCTA";
import HomepagePruducts from "../components/home/HomepageProducts";

export const Home = () => {

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          minHeight: '700px',
        }}
      >
        <Navbar />
        <HomepageS1 />
      </div>
      <HomepageS2 />
      <HomepagePruducts />
      <HomepageCTA />
    </div>
  );
};

export default Home;
