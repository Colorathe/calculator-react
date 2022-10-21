import { createContext, useState, useContext } from "react";

const AppContext = createContext({
  memory: null,
  operation: null,
  currentValue: 0,

  addNumber: (value) => {},
  addOperation: (operation) => {},
  getResult: () => {},
});

const CalculatorState = ({ children }) => {
  const [memory, setMemory] = useState(null);
  const [operation, setOperation] = useState(null);
  const [currentValue, setCurrentValue] = useState(0);
  const [isReset, setIsReset] = useState(true);

  function handleAddNumber(value) {}
  function handleAddOperation(operation) {}
  function handleResult() {}
  function handleExecuteAction() {}

  return (
    <AppContext.Provider
      value={{
        memory,
        operation,
        currentValue,
        addNumber: handleAddNumber,
        addOperation: handleAddOperation,
        getResult: handleResult,
        executeAction: handleExecuteAction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}

export default CalculatorState;
