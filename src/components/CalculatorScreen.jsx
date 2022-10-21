import React from "react";
import { useAppContext } from "./CalculatorState";

const CalculatorScreen = () => {
  const calculator = useAppContext();

  return (
    <div className='calculatorScreen'>
      <div>
        Memory: {calculator.memory}
        Operation: {calculator.operation}
      </div>
      <div className='calculatorCurrentValue'>{calculator.currentValue}</div>
    </div>
  );
};

export default CalculatorScreen;
