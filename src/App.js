import React, { useState } from "react";
import "./App.css"

function App() {

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setbmi] = useState('');
  const [message, setMessage] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  let calculateBmi = (e) => {
    e.preventDefault()

   
    if (weight <= 0 || height <= 0) {
      alert("Please Enter a Valid Value")
    }
    //kg and feet 

     else if (selectedValue === options[0]) {
      let heightM = height * 0.3048
      let weightkg = weight * 1
      let bmiNumberb = (weightkg / (heightM * heightM)).toFixed(1);
      let bmi = `Your BMI is : ${bmiNumberb}`
      setbmi(bmi)

      if (bmiNumberb < 18.3) {
        setMessage("You are Under Weighted");

      } else if (bmiNumberb > 18.3 && bmiNumberb < 24.3) {
        setMessage("You are Normal Weighted");

      } else if (bmiNumberb > 24.4 && bmiNumberb < 30) {
        setMessage("You are Over Weighted");

      } else {
        setMessage("Obesity");
      }
    }

    // lbs and inches 

    else if (selectedValue === options[1]) {
      let heightM = height * 0.0254;
      const weightKg = weight * 0.453592;
      let bmiNumberb = (weightKg / (heightM * heightM)).toFixed(1);
      let bmi = `Your BMI is : ${bmiNumberb}`
      setbmi(bmi)

      if (bmiNumberb < 18.3) {
        setMessage("You are Under Weighted");

      } else if (bmiNumberb > 18.3 && bmiNumberb < 24.3) {
        setMessage("You are Normal Weighted");

      } else if (bmiNumberb > 24.4 && bmiNumberb < 30) {
        setMessage("You are Over Weighted");

      } else {
        setMessage("Obesity");
      }
    }

    // kg and Cm

    else if (selectedValue === options[2]) {
      let heightCm = height / 100;
      const weightKg = weight * 1;
      let bmiNumberb = (weightKg / (heightCm * heightCm)).toFixed(1);
      let bmi = `Your BMI is : ${bmiNumberb}`
      setbmi(bmi)

      if (bmiNumberb < 18.3) {
        setMessage("You are Under Weighted");

      } else if (bmiNumberb > 18.3 && bmiNumberb < 24.3) {
        setMessage("You are Normal Weighted");

      } else if (bmiNumberb > 24.4 && bmiNumberb < 30) {
        setMessage("You are Over Weighted");

      } else {
        setMessage("Obesity");
      }
    } 

    // kg and Meter

    else if (selectedValue === options[3]) {
      let heightMeter = height * 1;
      const weightKg = weight * 1;
      let bmiNumberb = (weightKg / (heightMeter * heightMeter)).toFixed(1);
      let bmi = `Your BMI is : ${bmiNumberb}`
      setbmi(bmi)

      if (bmiNumberb < 18.3) {
        setMessage("You are Under Weighted");

      } else if (bmiNumberb > 18.3 && bmiNumberb < 24.3) {
        setMessage("You are Normal Weighted");

      } else if (bmiNumberb > 24.4 && bmiNumberb < 30) {
        setMessage("You are Over Weighted");

      } else {
        setMessage("Obesity");
      }
    }

    else  {
      alert('Please Select The Units First')
    }
  }

  const options = ['kg & Feet', 'lbs & Inches', 'Kg & Cm', 'Kg & Meter'];


  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);

  };
  return (
    <div>
      <div className="container">
        <div className="form-box center">
          <h1>BMI Calculator</h1>

          <div className="line"></div>

          <form onSubmit={calculateBmi}>


            <div className="input-1">
              <p>Enter weight & height in {selectedValue}</p>
              <select className="dropdown" value={selectedValue} onChange={handleSelectChange}>
                <option value="">Select Units</option>
                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}

              </select>
              <input type="number" placeholder="Enter Your Weight" value={weight} onChange={(e) => setWeight(e.target.value)}></input>
            </div>

            <div>
              <input type="number" placeholder="Enter Your Height" value={height} onChange={(event) => setHeight(event.target.value)}></input>
            </div>


            <div>
              <button className="btn submit-btn" type="submit">Submit</button>
              <button className="btn reload-btn" onClick={()=>{window.location.reload()}} type="submit">Roload</button>
            </div>
            <div className="center">
              <h3>{bmi}</h3>
              <p>{message}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
