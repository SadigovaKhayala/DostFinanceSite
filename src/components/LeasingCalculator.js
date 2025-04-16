import React, { useState } from "react";
import "../leasingCalculator.scss";

const LeasingCalculator = () => {
  const [price, setPrice] = useState(5000);
  const [downPayment, setDownPayment] = useState(20);
  const [duration, setDuration] = useState(3);
  const [extraCosts, setExtraCosts] = useState(0);

  const downPaymentAmount = (price * downPayment) / 100;
  const financedAmount = price - downPaymentAmount + extraCosts;
  const monthlyPayment = (financedAmount / duration).toFixed(2);

  return (
    <div className="leasing-container">
      <h2>Lizinq Kalkulyatoru</h2>
      <div className="slider-group">
        <label>
          Lizinq obyektinin qiyməti: <span>{price} AZN</span>
        </label>
        <input
          type="range"
          min="5000"
          max="150000"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
      </div>
      <div className="slider-group">
        <label>
          İlkin ödəniş: <span>{downPayment} %</span>
        </label>
        <input
          type="range"
          min="20"
          max="80"
          value={downPayment}
          onChange={(e) => setDownPayment(Number(e.target.value))}
        />
      </div>
      <div className="slider-group">
        <label>
          Lizinq müddəti: <span>{duration} ay</span>
        </label>
        <input
          type="range"
          min="3"
          max="60"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
        />
      </div>
      <div className="slider-group">
        <label>
          Digər xərclər (AZN): <span>{extraCosts || 0}</span>
        </label>
        <input
          type="number"
          min="0"
          value={extraCosts === 0 ? "" : extraCosts}
          onChange={(e) => {
            const value = e.target.value;
            if (value === "") {
              setExtraCosts(0);
            } else {
              setExtraCosts(Number(value));
            }
          }}
        />
      </div>
      <div className="results">
        <p>
          <strong>İlkin ödəniş:</strong>{" "}
          <span>{downPaymentAmount.toFixed(2)} AZN</span>
        </p>
        <p>
          <strong>Aylıq ödəniş:</strong> <span>{monthlyPayment} AZN</span>
        </p>
      </div>
    </div>
  );
};

export default LeasingCalculator;
