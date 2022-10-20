import React from "react";
import Header from "../components/Header";
import YourPlanPage from "../components/YourPlanPage";
import Footer from "../components/Footer";

const PlanPage = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <YourPlanPage />
      </main>
      <Footer />
    </div>
  );
};

export default PlanPage;
