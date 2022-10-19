import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../Utils";
import styles from "./Quiz.module.scss";

const Quiz = ({ data }) => {
  const [answersObject, setAnswersObject] = useState({});
  const [currentValue, setCurrentValue] = useState("");

  const setValue = (e) => {
    setCurrentValue(e);
  };

  const setObject = (key, value) => {
    setAnswersObject({ ...answersObject, [key]: value });
  };

  console.log(answersObject);

  const quiz = data.map((item) => {
    return (
      <QuizStep
        data={item}
        key={item.id}
        setValue={setValue}
        setObject={setObject}
        currentValue={currentValue}
      />
    );
  });
  const nav = data.map((item) => {
    return (
      <Link href={`#${item.id}`} key={item.id}>
        <h4>
          <span>{`0${item.id} `}</span>
          {item.summary}
        </h4>
      </Link>
    );
  });
  return (
    <div className={`${styles.wraper} section`}>
      <div className={styles.quizWraper}>
        <div className={styles.quizWraper_nav}>{nav}</div>
        <div className={styles.quizWraper_quiz}>
          {quiz}
          <OrderSummary data={answersObject} />
          <Button label="Create my plan!" />
        </div>
      </div>
    </div>
  );
};

export default Quiz;

const QuizStep = ({ data, setObject }) => {
  const answers = data.options.map((item) => {
    return (
      <>
        <div>
          <input
            type="radio"
            name={data.summary}
            id={item.value}
            className={styles.quizStep_radio}
            value={item.value}
            onClick={() => {
              setObject(data.value, item.value);
            }}
          />
          <label htmlFor={item.value} className={styles.label}>
            <div
              key={item.id}
              className={`${styles.quizStep_answer}`}
              value={item.value}
            >
              <h4>{item.answer}</h4>
              <p>{item.description}</p>
            </div>
          </label>
        </div>
      </>
    );
  });
  return (
    <div className={styles.quizStep}>
      <h4 className={styles.quizStep_heading} id={data.id}>
        {data.question}
      </h4>
      <div className={styles.quizStep_answers}>{answers}</div>
    </div>
  );
};

const OrderSummary = ({ data }) => {
  return (
    <div className={`${styles.summary} container-inner`}>
      <h6>Order summary</h6>
      <p>
        “I drink my coffee as{" "}
        <span>{data.preferences ? data.preferences : " _ "}</span>, with a{" "}
        <span>{data.bean ? data.bean : " _ "}</span> type of bean.{" "}
        <span>{data.quantity ? data.quantity : " _ "}</span> ground ala{" "}
        <span>{data.grind ? data.grind : " _ "}</span>, sent to me{" "}
        <span>{data.deliveries ? data.deliveries : " _ "}</span>.”
      </p>
    </div>
  );
};
