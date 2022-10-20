import React from "react";
import Header from "../components/Header";
import AboutPage from "../components/AboutPage";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <AboutPage />
      </main>
      <Footer />
    </div>
  );
};

export default About;
