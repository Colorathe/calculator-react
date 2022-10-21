import { useAppContext } from "./CalculatorState";

const Button = ({ type, value }) => {
  const calculator = useAppContext();

  function handleClick() {
    switch (type) {
      case "number":
        calculator.addNumber(parseInt(value));
        break;

      case "operation":
        calculator.addOperation(value);
        break;

      case "action":
        calculator.executeAction(value);
        break;

      default:
    }
  }

  return (
    <button onClick={handleClick} className='calculatorButton'>
      {value}
    </button>
  );
};

export default Button;
