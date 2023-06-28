import React, { useState } from "react";
import classess from "./UserInput.module.css";

const initialInput = {
  "current-savings": 10000,
  "yearly-contribution": 1100,
  "expected-return": 8,
  duration: 5,
};

const UserInput = (props) => {
  const [userInput, setUserInput] = useState(initialInput);
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onCalculate(userInput);
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prevState) => {
      return { ...prevState, [input]: +value };
    });
  };
  const resetHandler = () => {
    setUserInput(initialInput);
  };
  return (
    <form className={classess.form} onSubmit={handleSubmit}>
      <div className={classess["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={userInput["current-savings"]}
            onChange={(e) =>
              inputChangeHandler("current-savings", e.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={userInput["yearly-contribution"]}
            onChange={(e) =>
              inputChangeHandler("yearly-contribution", e.target.value)
            }
          />
        </p>
      </div>
      <div className={classess["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={userInput["expected-return"]}
            onChange={(e) =>
              inputChangeHandler("expected-return", e.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInput["duration"]}
            onChange={(e) => inputChangeHandler("duration", e.target.value)}
          />
        </p>
      </div>
      <p className={classess["actions"]}>
        <button
          type="reset"
          className={classess.buttonAlt}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button type="submit" className={classess["button"]}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
