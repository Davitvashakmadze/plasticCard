import React from "react";
import "../Home/Home.scss";
import { useState } from "react";
// import Thenks from "./Thenks";
import { Input, Label, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import lines from "../../images/lines.png";

const Home = () => {
  const [cardOwnerValue, setCardOwnerValue] = useState("JANE APPLESEED");
  const [cardNumber, setCardNumber] = useState("");
  const [cardMonth, setCardMonth] = useState("00");
  const [cardYear, setCardYear] = useState("00");
  const [cardCvc, setCardCvs] = useState("000");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setCardOwnerValue(event.target.value.toUpperCase());
  };

  const handleCardNumberChange = (event) => {
    const value = event.target.value
      .replace(/[^\d]/g, "") // remove all non-digit characters
      .replace(/(.{4})/g, "$1 ") // add a space after every 4 digits
      .trim(); // remove any trailing spaces

    setCardNumber(value);
  };

  const handleCardMonthChange = (event) => {
    setCardMonth(event.target.value);
  };

  const handleCardYearChange = (event) => {
    setCardYear(event.target.value);
  };
  const handleCardCvcChange = (event) => {
    setCardCvs(event.target.value);
  };
  const hanleConfirm = () => {
    setIsSubmitted(true);
  };

  const handleClickRefresh = () => {
    window.location.reload();
  };

  return (
    <div>
      <section className="home-section">
        <div className="left-section">
          <div className="cards-wrapper">
            <div className="card-front">
              <div className="oval-icon">
                <div className="oval"></div>
                <div className="icon"></div>
              </div>
              <div className="cardNumber">
                <h2>{cardNumber}</h2>
              </div>
              <div className="owner-exp-date">
                <p>{cardOwnerValue}</p>
                <p>
                  {cardMonth}/{cardYear}
                </p>
              </div>
            </div>
            <div className="card-back">
              <div className="card-back-zone"></div>
              <div className="card-back-gray">
                <p>{cardCvc}</p>
              </div>
              <img src={lines} alt="" />
            </div>
          </div>
        </div>
        <div className="right-section">
          <div className="right-section">
            <div className="input-wrapper">
              {!isSubmitted ? (
                <form autocomplete="off">
                  <div className="card-name">
                    <Label for="card-name">Cardholder Name</Label>
                    <Input
                      onChange={handleInputChange}
                      type="text"
                      id="card-name"
                      name="card-name"
                      placeholder="e.g. Jane Appleseed"
                    />
                  </div>
                  <div className="card-number">
                    <Label for="card-number">Card Number</Label>
                    <Input
                      type="text"
                      id="card-number"
                      name="card-number"
                      maxLength={19}
                      placeholder="e.g. 1234 5678 9123 0000"
                      onChange={handleCardNumberChange}
                      value={cardNumber}
                      required
                    />
                  </div>
                  <div className="card-data">
                    <div className="dates-input">
                      <div className="date-label">
                        <Label for="card-date">Exp. Date</Label>
                        <Input
                          onChange={handleCardMonthChange}
                          className="date-input"
                          maxLength={2}
                          type="text"
                          id="card-month"
                          name="month"
                          placeholder="MM"
                          required
                        />
                      </div>
                      <div className="date-label">
                        <Label for="card-date">(MM/YY)</Label>
                        <Input
                          onChange={handleCardYearChange}
                          className="date-input"
                          maxLength={2}
                          type="text"
                          id="card-year"
                          name="year"
                          placeholder="YY"
                          required
                        />
                      </div>

                      <div className="cvc-label">
                        <Label htmlFor="CVC">CVC</Label>
                        <Input
                          onChange={handleCardCvcChange}
                          placeholder="e.g. 123"
                          className="cvc-input"
                          maxLength={3}
                          type="text"
                          id="cvc"
                          name="cvc"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="sub-btn">
                    <Button onClick={hanleConfirm}>Confirm</Button>
                  </div>
                </form>
              ) : (
                <div className="thanks-section">
                  <div className="done">
                  <FontAwesomeIcon className="faCheck" icon={faCheck} />
                  </div>
                  <h2>THANK YOU</h2>
                  <p>We’ve added your card details</p>
                  <div className="cnt-btn">
                    <Button onClick={handleClickRefresh}>Continue</Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
