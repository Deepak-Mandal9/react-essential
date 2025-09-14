import Header from "./components/Header"
import Results from "./components/Results";
import UserInput from "./components/UserInput"
import { useState } from "react";

function App() {
  const [userInput, setUserInput]= useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

  function handleChange(inputIdentifier, newValue) {
        setUserInput(prevUser => {
            return {
                ...prevUser,
                [inputIdentifier]: +newValue //converting the string to number using + unary operator
            }
        })
    }

  const validInput = userInput.duration >= 1 && userInput.initialInvestment >= 0;
  return (
    <>
    <Header />
    <UserInput userInput={userInput} onChange={handleChange}/>
    {!validInput && <p className="center">Please give duration greater than zero and initial investment greater non-negative</p>}
    {validInput && <Results input={userInput}/>}
    </>
    
  )
}

export default App
