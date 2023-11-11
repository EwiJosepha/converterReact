import { useState } from "react";

function Topsection() {
  let [frominputunit, setFrominputunit] = useState("");
  let [toinputunit, setToinputunit] = useState("");
  const [selectfrom, setSelectfrom] = useState("");
  const [selectTo, setSelectTo] = useState("");
  const [currentconvertion, setCurrentconvertion] = useState("");

  // let val = e.target.value
  // function currentval(val) {
  //   if(val==="10"){
  //     setFrominputunit(frominputunit * +val)
  //   }
  // }

  function getiputvalueoffrom(e) {
    setFrominputunit(e.target.value);
    console.log(frominputunit);
  }

  function getiputvalueofto(e) {
    setToinputunit(e.target.value);
  }

  console.log(frominputunit);

  function getvalueofselectoptionfrom(e) {
    const value = +e.target.value;
    // if (value > result) {
    //   frominputunit * result
    // } else if (units[from] > units[to]) {
    //   ans = value * units[from]
    // }
    setSelectfrom(value);
   
    setSelectTo(value > result?value * frominputunit:value / frominputunit);
    console.log({ value });
  }

  console.log(selectfrom);
  let result
  function getvalueofselectoptionto(e) {
    let result = e.target.value
    setSelectTo(result);
    // currentval(selectTo)
  }

  console.log(frominputunit);

  // console.log(selectTo);

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
                id="field-frominputunit"
                value={frominputunit}
                onChange={getiputvalueoffrom}
              />
              <p>{frominputunit}</p>
            </div>

            <select id="first-measure" onChange={getvalueofselectoptionfrom}>
              <option value="1">Millimeters</option>
              <option value="10">Centimeters</option>
              <option value="100">Meters</option>
              <option value="1000">Killometers</option>
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
        <h2 className="header">Lenght</h2>
        <div className="wrapper3">
          <div className="bottom-sec">
            <div id="div2">
              <input
                type="text"
                id="field-frominputunit"
                onChange={getiputvalueofto}
                value={toinputunit}
              />
            </div>
            <select
              className="selected"
              id="second-measure"
              onChange={getvalueofselectoptionto}
            >
              <option value="1">Millimeters</option>
              <option value="10">Centimeters</option>
              <option value="100">Meters</option>
              <option value="1000">Killometers</option>
            </select>
            <p id="blue">Meters</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topsection;
