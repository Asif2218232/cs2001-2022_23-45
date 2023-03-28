import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import './Donation.css';

function Donations() {

    var [ipt, setIpt] = useState('');
    const [inputError, setInputError] = useState(false);
    const iptChange = (e) => {
      setIpt(e.target.value);
    };

    console.log(ipt);
    const navigate = useNavigate();

    const handleClick = (e) => {
      e.preventDefault();

      ipt = e.target.value;
      console.log(ipt);
      const variableValue = ipt;
      navigate('/Payment', {state:variableValue});
    };

    const [inputs, setInputs] = useState([]);

    const addInput = () => {
      setInputs([inputs]);
    };

    console.log(inputs);
  
  return (
    <div >
          <h1 style={{ color: 'black', textAlign: 'center', fontSize: 40 }}>Make a Donation</h1>

          <p style={{ textAlign: 'center',  fontSize: 20  }}>Donate to climate change charities to make a difference. All proceeds go directly to charity, helping to fund research, advocacy, and community efforts to fight climate change.</p>
          <div className="button-container">
              <button className="blue-button" onClick={handleClick} value="5">£5</button>
              <button className="blue-button" onClick={handleClick} value="10">£10</button>
              <button className="blue-button" onClick={handleClick} value="20">£20</button>
              
    </div>

          <div className="button-container">
              <button className="blue-button" onClick={handleClick} value="50">£50</button>
              <button className="blue-button" onClick={handleClick} value="100">£100</button>
              <button className="blue-button" onClick={addInput}>Other</button>
          </div>

          <div className="button-container">
              {inputs.map((input, index) => (
                <div key={index}>
                <input 
                type="number" 
                className={`input-field ${inputError ? "error-style" : ""}`}
                placeholder="Input Field" 
                defaultValue={ipt} 
                onChange={iptChange} 
                // key={index} 
                />

                {inputError ? (
                  <span>Please enter other amount</span>
             ) : null}
                
                <button 
                className="blue-button" 
                onClick={(e) => {
                  e.preventDefault();
                if (
                  e.target.value === "5" ||
                  e.target.value === "10" ||
                  e.target.value === "20" ||
                  e.target.value === "50" ||
                  e.target.value === "100"
                ) {
                  setInputError(true);
                } else {
                  // ipt = e.target.value;
                  // console.log(ipt);
                  const variableValue = e.target.value
                  navigate("/Payment", { state: variableValue });
                }
              }}
              
                value={ipt}
                >
                  Donate Now
                  </button>
                </div>
              ))}
          </div>
      
      </div>
  );
}

export default Donations;
  