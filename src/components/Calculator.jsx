import CalculatorScreen from "./CalculatorScreen";
import CalculatorState from "./CalculatorState";

const Calculator = () => {
  return (
    <>
      <CalculatorState>
        <div className='calculatorContainer'>
          <CalculatorScreen />
          <div className='container'></div>
        </div>
      </CalculatorState>
    </>
  );
};

export default Calculator;
