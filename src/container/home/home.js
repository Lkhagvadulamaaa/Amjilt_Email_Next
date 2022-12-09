import React from "react";
import Banner_1 from "../../components/banner/home/banner_1/banner_1";
import Category from "../../components/carousel/home/categorys/categorys";
import Banner_2 from "../../components/banner/home/banner_2/banner_2";
import Card from "../../components/carousel/home/card/card";
import Banner_3 from "../../components/banner/home/banner_3/banner_3";
import Banner_4 from "../../components/banner/home/banner_4/banner_4.js";
import Card_2 from "../../components/carousel/home/card_2/card_2";
import Banner_5 from "../../components/banner/home/banner_4/banner_4.js";
import Card_3 from "../../components/carousel/home/card_3/card_3";
import Banner_6 from "../../components/banner/home/banner_6/banner_6";
import Advice from "../../components/carousel/advice/advice";
import Footer from "../../components/carousel/home/footer/footer";
import Header from "../../components/carousel/header/header";
import "./home.css";

const Home = () => {
  return (
    <div className="home_container">
      <div>
        <Header />
      </div>
      <Banner_1 />
      <div>
        <Category />
      </div>
      <div>
        <Banner_2 />
      </div>
      <div>
        <Card />
      </div>
      <div>
        <Banner_3 />
      </div>
      <div>
        <Banner_4 />
      </div>
      <div>
        <Card_2 />
      </div>
      <div>
        <Banner_5 />
      </div>
      <div>
        <Card_3 />
      </div>
      <div>
        <Banner_6 />
      </div>
      <div>
        <Advice />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
