import React, { useState, useEffect } from "react";
import "./API.css";

function API() {
  const [searchValue, setSearchValue] = useState("");
  const [resultFrom, setResultFrom] = useState("");
  const [resultTo, setResultTo] = useState("");
  const [finalValue, setFinalValue] = useState("");
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((response) => response.json())
      .then((data) => setApiData(data));
  }, []);

  const handleFromChange = (event) => {
    setResultFrom(event.target.value);
  };

  const handleToChange = (event) => {
    setResultTo(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleConvertClick = () => {
    if (resultFrom && resultTo && searchValue) {
      const fromRate = apiData.rates[resultFrom];
      const toRate = apiData.rates[resultTo];
      const convertedValue = (toRate / fromRate) * searchValue;
      setFinalValue(convertedValue.toFixed(2));
    }
  };

  const handleResetClick = () => {
    setSearchValue("");
    setResultFrom("");
    setResultTo("");
    setFinalValue("");
  };

  return (
    <div className="containers" style={{ backgroundColor: "#ffe600" }}>
      <div className="main" style={{ backgroundColor: "white" }}>
        <div className="flex-container">
          <label style={{ textAlign: "left" }}>Amount to Convert :</label>
          <input
            type="text"
            className="form-control searchBox"
            placeholder="0.00"
            id="oamount"
            value={searchValue}
            onChange={handleSearchChange}
          />
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="flex-container" style={{ paddingTop: "15px" }}>
              <span className="input-group-text">From</span>

              <select
                className="form-control from"
                id="sel1"
                value={resultFrom}
                onChange={handleFromChange}
              >
                <option value="">Select One …</option>
                <option value="USD">USD</option>
                <option value="AED">AED</option>
                <option value="ARS">ARS</option>
                <option value="AUD">AUD</option>
                <option value="BGN">BGN</option>
                <option value="BRL">BRL</option>
                <option value="BSD">BSD</option>
                <option value="CAD">CAD</option>
                <option value="CHF">CHF</option>
                <option value="CLP">CLP</option>
                <option value="CNY">CNY</option>
                <option value="COP">COP</option>
                <option value="CZK">CZK</option>
                <option value="DKK">DKK</option>
                <option value="DOP">DOP</option>
                <option value="EGP">EGP</option>
                <option value="EUR">EUR</option>
                <option value="FJD">FJD</option>
                <option value="GBP">GBP</option>
                <option value="GTQ">GTQ</option>
                <option value="HKD">HKD</option>
                <option value="HRK">HRK</option>
                <option value="HUF">HUF</option>
                <option value="IDR">IDR</option>
                <option value="ILS">ILS</option>
                <option value="INR">INR</option>
                <option value="ISK">ISK</option>
                <option value="JPY">JPY</option>
                <option value="KRW">KRW</option>
                <option value="KZT">KZT</option>
                <option value="MVR">MVR</option>
                <option value="MXN">MXN</option>
                <option value="MYR">MYR</option>
                <option value="NOK">NOK</option>
                <option value="NZD">NZD</option>
                <option value="PAB">PAB</option>
                <option value="PEN">PEN</option>
                <option value="PHP">PHP</option>
                <option value="PKR">PKR</option>
                <option value="PLN">PLN</option>
                <option value="PYG">PYG</option>
                <option value="RON">RON</option>
                <option value="RUB">RUB</option>
                <option value="SAR">SAR</option>
                <option value="SEK">SEK</option>
                <option value="SGD">SGD</option>
                <option value="THB">THB</option>
                <option value="TRY">TRY</option>
                <option value="TWD">TWD</option>
                <option value="UAH">UAH</option>
                <option value="UYU">UYU</option>
                <option value="ZAR">ZAR</option>
              </select>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="flex-container" style={{ paddingTop: "15px" }}>
              <span className="input-group-text">To</span>

              <select
                className="form-control to"
                id="sel2"
                value={resultTo}
                onChange={handleToChange}
              >
                <option value="">Select One …</option>
                <option value="USD">USD</option>
                <option value="AED">AED</option>
                <option value="ARS">ARS</option>
                <option value="AUD">AUD</option>
                <option value="BGN">BGN</option>
                <option value="BRL">BRL</option>
                <option value="BSD">BSD</option>
                <option value="CAD">CAD</option>
                <option value="CHF">CHF</option>
                <option value="CLP">CLP</option>
                <option value="CNY">CNY</option>
                <option value="COP">COP</option>
                <option value="CZK">CZK</option>
                <option value="DKK">DKK</option>
                <option value="DOP">DOP</option>
                <option value="EGP">EGP</option>
                <option value="EUR">EUR</option>
                <option value="FJD">FJD</option>
                <option value="GBP">GBP</option>
                <option value="GTQ">GTQ</option>
                <option value="HKD">HKD</option>
                <option value="HRK">HRK</option>
                <option value="HUF">HUF</option>
                <option value="IDR">IDR</option>
                <option value="ILS">ILS</option>
                <option value="INR">INR</option>
                <option value="ISK">ISK</option>
                <option value="JPY">JPY</option>
                <option value="KRW">KRW</option>
                <option value="KZT">KZT</option>
                <option value="MVR">MVR</option>
                <option value="MXN">MXN</option>
                <option value="MYR">MYR</option>
                <option value="NOK">NOK</option>
                <option value="NZD">NZD</option>
                <option value="PAB">PAB</option>
                <option value="PEN">PEN</option>
                <option value="PHP">PHP</option>
                <option value="PKR">PKR</option>
                <option value="PLN">PLN</option>
                <option value="PYG">PYG</option>
                <option value="RON">RON</option>
                <option value="RUB">RUB</option>
                <option value="SAR">SAR</option>
                <option value="SEK">SEK</option>
                <option value="SGD">SGD</option>
                <option value="THB">THB</option>
                <option value="TRY">TRY</option>
                <option value="TWD">TWD</option>
                <option value="UAH">UAH</option>
                <option value="UYU">UYU</option>
                <option value="ZAR">ZAR</option>
              </select>
            </div>
          </div>
        </div>

        <div className="text-center" style={{ paddingTop: "15px" }}>
          <button
            className="btn btn-primary convert m-2"
            type="submit"
            onClick={handleConvertClick}
            style={{ marginRight: "15px" }}
          >
            Convert
          </button>
          <button className="btn btn-primary m-2" onClick={handleResetClick}>
            Reset
          </button>
        </div>
      </div>

      <div id="finalAmount" className="text-center">
        <h5>
          Converted Amount : <span className="finalValue">{finalValue}</span>
        </h5>
      </div>
    </div>
  );
}

export default API;
