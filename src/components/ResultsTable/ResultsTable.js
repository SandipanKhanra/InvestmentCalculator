import React from "react";
import classess from "./ResultsTable.module.css";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const ResultsTable = (props) => {
  return (
    <table className={classess.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((val) => (
          <tr key={val.year}>
            <td>{val.year}</td>
            <td>{formatter.format(val.savingsEndOfYear)}</td>
            <td>{formatter.format(val.yearlyInterest)}</td>
            <td>
              {formatter.format(
                val.savingsEndOfYear -
                  props.initialInvestment -
                  val.yearlyContribution * val.year
              )}
            </td>
            <td>
              {formatter.format(
                props.initialInvestment + val.yearlyContribution * val.year
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultsTable;
