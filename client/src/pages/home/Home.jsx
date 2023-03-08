import {
  Footer,
  HomeAbout,
  HomeCats,
  HomeContact,
  HomeHeader,
  HomeMemories,
  HomeTestimonials,
  Navbar,
} from "layouts";
import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <HomeHeader />
      <HomeAbout />
      <HomeCats />
      <HomeMemories />
      <HomeTestimonials />
      <HomeContact />
      <Footer />
    </div>
  );
};

export default Home;
