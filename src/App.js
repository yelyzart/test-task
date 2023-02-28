import React, { useState } from "react";
import Icon from "./assets/icon.png";

import "./App.css";

function App() {
  const [dataStorage, setDataStorage] = useState(1);
  const [dataTransfer, setDataTransfer] = useState(1);
  const [optionBunny, setOptionBunny] = useState("Hdd");
  const [optionScaleway, setOptionScaleway] = useState("Multi");

  //backblaze
  const getPriceBackblaze = () => {
    let priceBackblaze = dataStorage * 0.005 + dataTransfer * 0.01;
    if (priceBackblaze <= 7) {
      return 7;
    } else {
      return Math.round(priceBackblaze);
    }
  };
  //bunny
  const onOptionChangeBunny = (e) => {
    setOptionBunny(e.target.value);
  };
  const getPriceBunny = () => {
    if (optionBunny === "Hdd") {
      let priceBunny = dataStorage * 0.01 + dataTransfer * 0.01;
      if (priceBunny >= 10) {
        return 10;
      } else {
        return Math.round(priceBunny);
      }
    } else {
      let priceBunny = dataStorage * 0.02 + dataTransfer * 0.01;
      if (priceBunny >= 10) {
        return 10;
      } else {
        return Math.round(priceBunny);
      }
    }
  };
  //scaleway
  const onOptionChangeScaleway = (e) => {
    setOptionScaleway(e.target.value);
  };
  const getPriceScaleway = () => {
    let storage = dataStorage <= 75 ? 0 : dataStorage;
    let transfer = dataTransfer <= 75 ? 0 : dataTransfer;
    if (optionScaleway === "Multi") {
      let priceScaleway = storage * 0.06 + transfer * 0.02;
      return Math.round(priceScaleway);
    } else {
      let priceScaleway = storage * 0.03 + transfer * 0.02;
      return Math.round(priceScaleway);
    }
  };
  //vultr
  const getPriceVultr = () => {
    let priceVultr = dataStorage * 0.01 + dataTransfer * 0.01;
    if (priceVultr <= 5) {
      return 5;
    } else {
      return Math.round(priceVultr);
    }
  };
  // lowest value
  const getLowestValue = () => {
    let lowestValue = Math.min(
      getPriceBackblaze(),
      getPriceBunny(),
      getPriceScaleway(),
      getPriceVultr()
    );
    return lowestValue;
  };
  return (
    <div className="App">
      <div className="container">
        <div class="row">
          <div class="col-md storage">
            <h5>Storage: {dataStorage}</h5>
            <input
              type="range"
              min="0"
              max="1000"
              step="1"
              value={dataStorage}
              onChange={(e) => setDataStorage(e.target.value)}
            ></input>
            <div className="numbers">
              <p>0</p>
              <p>1000</p>
            </div>
          </div>
          <div class="col-md transfer">
            <h5>Transfer: {dataTransfer}</h5>
            <input
              type="range"
              min="0"
              max="1000"
              step="1"
              value={dataTransfer}
              onChange={(e) => setDataTransfer(e.target.value)}
            ></input>
            <div className="numbers">
              <p>0</p>
              <p>1000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-2 order-4 order-md-1 name">
            <p style={{ marginRight: "10px", marginBottom: "5px" }}>
              backblaze
            </p>
            <p style={{ marginRight: "10px", marginBottom: "0" }}>bunny</p>
            <div className="options hdd-sdd">
              <input
                id="hdd"
                type="radio"
                name="optionBunny"
                value="Hdd"
                checked={optionBunny === "Hdd"}
                onChange={onOptionChangeBunny}
              />
              <label for="optionHdd">HDD</label>
              <input
                id="sdd"
                type="radio"
                name="optionBunny"
                value="Sdd"
                checked={optionBunny === "Sdd"}
                onChange={onOptionChangeBunny}
              />
              <label for="optionSdd">SSD</label>
            </div>
            <p style={{ marginRight: "10px", marginBottom: "0" }}>scaleway</p>
            <div className="options single-multi">
              <input
                id="multi"
                type="radio"
                name="optionMulti"
                value="Multi"
                checked={optionScaleway === "Multi"}
                onChange={onOptionChangeScaleway}
              />
              <label for="optionMulti" style={{ marginRight: "3px" }}>
                Multi
              </label>
              <input
                id="single"
                type="radio"
                name="optionSingle"
                value="Single"
                checked={optionScaleway === "Single"}
                onChange={onOptionChangeScaleway}
              />
              <label for="optionSingle">Single</label>
            </div>
            <p style={{ marginRight: "10px" }}>vultr</p>
          </div>
          <div className="col-sm-12 col-md-1 order-3 order-md-2 picture">
            <img src={Icon} alt="harry potter" style={{ height: "25px" }} />
            <img src={Icon} alt="harry potter" style={{ height: "25px" }} />
            <img src={Icon} alt="harry potter" style={{ height: "25px" }} />
            <img src={Icon} alt="harry potter" style={{ height: "25px" }} />
          </div>
          <div className="col-sm-12 col-md-8 order-2 order-md-3 schedule">
            <div className="box-line"></div>
            <div className="columnsColor">
              <div
                style={{
                  height: 20,
                  width: `${getPriceBackblaze()}px`,
                  background:
                    getLowestValue() === getPriceBackblaze()
                      ? "#ff0000"
                      : "#999292",
                }}
                className="box"
              ></div>
              <div
                style={{
                  height: 20,
                  width: `${getPriceBunny()}px`,
                  background:
                    getLowestValue() === getPriceBunny()
                      ? "#ffaa00"
                      : "#999292",
                }}
                className="box"
              ></div>
              <div
                style={{
                  height: 20,
                  width: `${getPriceScaleway()}px`,
                  background:
                    getLowestValue() === getPriceScaleway()
                      ? "#a934db"
                      : "#999292",
                }}
                className="box"
              ></div>
              <div
                style={{
                  height: 20,
                  width: `${getPriceVultr()}px`,
                  background:
                    getLowestValue() === getPriceVultr()
                      ? "#2f71e2"
                      : "#999292",
                }}
                className="box"
              ></div>
            </div>
          </div>
          <div className="col-sm-12 col-md-1 order-1 order-md-4 currency">
            <p>
              <span>{getPriceBackblaze()}</span>$
            </p>
            <p>
              <span>{getPriceBunny()}</span>$
            </p>
            <p>
              <span>{getPriceScaleway()}</span>$
            </p>
            <p>
              <span>{getPriceVultr()}</span>$
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
