import React from "react";
import Hero from "../Hero";
import styles from "./YourPlanPage.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import HowItWorks from "../HowItWorks";
import Quiz from "../Quiz";

const YourPlanPage = () => {
  const quizData = [
    {
      id: 1,
      summary: "Preferences",
      value: "preferences",
      question: "How do you drink your coffee?",
      options: [
        {
          id: 11,
          answer: "Capsule",
          value: "capsule",
          description: "Compatible with Nespresso systems and similar brewers",
        },
        {
          id: 12,
          answer: "Filter",
          value: "fliter",
          description:
            "For pour over or drip methods like Aeropress, Chemex, and V60",
        },
        {
          id: 13,
          answer: "Espresso",
          value: "espresso",
          description:
            "Dense and finely ground beans for an intense, flavorful experience",
        },
      ],
    },
    {
      id: 2,
      summary: "Bean type",
      value: "bean",
      question: "What type of coffee?",
      options: [
        {
          id: 21,
          answer: "Single Origin",
          value: "single origin",
          description:
            "Distinct, high quality coffee from a specific family-owned farm",
        },
        {
          id: 22,
          answer: "Decaf",
          value: "decaf",
          description:
            "Just like regular coffee, except the caffeine has been removed",
        },
        {
          id: 23,
          answer: "Blended",
          value: "blended",
          description:
            "Combination of two or three dark roasted beans of organic coffees",
        },
      ],
    },
    {
      id: 3,
      summary: "Quantity",
      value: "quantity",
      question: "How much would you like??",
      options: [
        {
          id: 31,
          answer: "250g",
          value: "250g",
          description:
            "Perfect for the solo drinker. Yields about 12 delicious cups.",
        },
        {
          id: 32,
          answer: "500g",
          value: "500g",
          description:
            "Perfect option for a couple. Yields about 40 delectable cups.",
        },
        {
          id: 33,
          answer: "1000g",
          value: "1000g",
          description:
            "Perfect for offices and events. Yields about 90 delightful cups.",
        },
      ],
    },
    {
      id: 4,
      summary: "Grind option",
      value: "grind",
      question: "Want us to grind them?",
      options: [
        {
          id: 41,
          answer: "Wholebean",
          value: "wholebean",
          description: "Best choice if you cherish the full sensory experience",
        },
        {
          id: 42,
          answer: "Filter",
          value: "filter",
          description:
            "For drip or pour-over coffee methods such as V60 or Aeropress",
        },
        {
          id: 43,
          answer: "Cafetiére",
          value: "cafetiere",
          description:
            "Course ground beans specially suited for french press coffee",
        },
      ],
    },
    {
      id: 5,
      summary: "Deliveries",
      value: "deliveries",
      question: "How often should we deliver?",
      options: [
        {
          id: 51,
          answer: "Every week",
          value: "every weak",
          description:
            "$7.20 per shipment. Includes free first-class shipping.",
          price: "$7.20/mo",
        },
        {
          id: 52,
          answer: "Every 2 weeks",
          value: "every 2 weeks",
          description: "$9.60 per shipment. Includes free priority shipping.",
          price: "$9.60/mo",
        },
        {
          id: 53,
          answer: "Every month",
          value: "every month",
          description: "$12.00 per shipment. Includes free priority shipping.",
          price: "$12.00/mo",
        },
      ],
    },
  ];

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className={styles.wraper}
        key="your-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0 }}
      >
        <Hero
          title="Create a plan"
          text="Build a subscription plan that best fits your needs. We offer an assortment of the best 
          artisan coffees from around the globe delivered fresh to your door."
          bgClass="bg_plan"
        />
        <HowItWorks dark />
        <Quiz data={quizData} />
      </motion.div>
    </AnimatePresence>
  );
};

export default YourPlanPage;
