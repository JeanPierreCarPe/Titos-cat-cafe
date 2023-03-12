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
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <Navbar />
      <HomeHeader />
      <HomeAbout />
      <HomeCats navigate={navigate} />
      <HomeMemories />
      <HomeTestimonials />
      <HomeContact />
      <Footer />
    </div>
  );
};

export default Home;
