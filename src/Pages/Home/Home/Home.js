import React from "react";
import Navigation from "../../Share/Navigation/Navigation";
import AppoinmentBanner from "../AppoinmentBanner/AppoinmentBanner";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Treatment from "../Treatment/Treatment";
// import Services from "../Services/Services";
// import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Navigation />
      {/* <Services/> */}
      <Banner />
     
      <Services />
      <Treatment/>
      <AppoinmentBanner />
    </div>
  );
};

export default Home;
