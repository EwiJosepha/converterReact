import { useEffect, useState } from "react";
import { array_units } from "../services/constants";
import { evaluate } from "../services/utils";

function Topsection() {
  const [topInputVal, setTopInputVal] = useState(0);
  const [topUnit, setTopUnit] = useState(1); // initailizing to 1 to correspond to the value of millimeter.

  const [bottomInputVal, setBottomInputVal] = useState(0);
  const [bottomUnit, setBottomUnit] = useState(1); // initailizing to 1 to correspond to the value of millimeter.

  function getiputvalueoffrom(e) {
    const newVal = e.target.value;
    const params = {
      val: newVal,
      unitfrom: topUnit,
      unitTo: bottomUnit,
    };

    setTopInputVal(newVal);
    handleTopCalculation(params);
  }

  function getvalueofselectoptionfrom(e) {
    const unitVal = e.target.value;
    setTopUnit(unitVal);

    const params = {
      val: topInputVal,
      unitfrom: unitVal,
      unitTo: bottomUnit,
    };

    handleTopCalculation(params);

    // setSelectfrom(value);

    // setSelectTo(value > result ? value * topunit : value / topunit);
    // console.log(value);
  }

  function getiputvalueofto(e) {
    const newVal = e.target.value;

    const params = {
      val: newVal,
      unitfrom: bottomUnit,
      unitTo: topUnit,
    };
  
    setBottomInputVal(newVal);

    handleBotomCalculation(params);
  }

  function getvalueofselectoptionto(e) {
    const unitVal = e.target.value;
    setBottomUnit(unitVal);

    const params =  {
      val: bottomInputVal,
      unitfrom: unitVal,
      unitTo: topUnit,
    };

    handleBotomCalculation(params);

    // setSelectTo(result);
    // setSelectfrom(result > value ? result * bottomunit : result / bottomunit);
  }

  // CALCULATIONS.

  const handleTopCalculation = ({ val, unitfrom, unitTo }) => {
    const ans = evaluate({ val, unitfrom, unitTo });

    setBottomInputVal(ans);
  };

  const handleBotomCalculation = ({ val, unitfrom, unitTo }) => {
    const ans = evaluate({ val, unitfrom, unitTo });

    setTopInputVal(ans);
    //
  };

  return (
    <>
      <div className="wrapper">
        <div className="top-sec">
          <div className="date-icon">
            <p>03.Thurs.2023</p>
            <img src="./assets/images/navbar-toggler.png" alt="Toogler" />
          </div>
          <h1>Length</h1>
          <div className="inputfield-select">
            <div id="div1">
              <input
                type="text"
                id="field-topunit"
                value={topInputVal}
                onChange={getiputvalueoffrom}
              />
            </div>

            <select id="first-measure" onChange={getvalueofselectoptionfrom}>
              {array_units.map(({ unitVal, unit }) => (
                <option value={unitVal} key={unit}>
                  {unit}
                </option>
              ))}
            </select>

            <p id="white">Meters</p>
          </div>
        </div>
      </div>
      <div className=" wrapper2">
        <div className="arrow">
          <p>.</p>
          <div className="font">
            <i className="fa-solid fa-retweet"></i>
          </div>
        </div>
        <h2 className="header">Length</h2>
        <div className="wrapper3">
          <div className="bottom-sec">
            <div id="div2">
              <input
                type="text"
                id="field-topunit"
                onChange={getiputvalueofto}
                value={bottomInputVal}
              />
            </div>
            <select
              className="selected"
              id="second-measure"
              onChange={getvalueofselectoptionto}
            >
              {array_units.map(({ unitVal, unit }) => (
                <option value={unitVal} key={unit}>
                  {unit}
                </option>
              ))}
            </select>
            <p id="blue">Meters</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topsection;
