import React from "react";
import AdvertisedProducts from "../AdvertisedProducts/AdvertisedProducts";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <AdvertisedProducts></AdvertisedProducts>
    </div>
  );
};

export default Home;
