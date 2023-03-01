import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      previousOp: null,
      operation: null,
      currentOperand: null,
      computed: false,
    };
  }
  addition = () => {
    const { previousOp, currentOperand } = this.state;
    const ans = parseFloat(previousOp) + parseFloat(currentOperand);
    this.setState({
      ...this.state,
      previousOp: null,
      currentOperand: ans,
      operation: null,
      computed: true,
    });
  };
  subtraction = () => {
    const { previousOp, currentOperand } = this.state;
    const ans = parseFloat(previousOp) - parseFloat(currentOperand);
    this.setState({
      ...this.state,
      previousOp: null,
      currentOperand: ans,
      operation: null,
      computed: true,
    });
  };
  multiplication = () => {
    const { previousOp, currentOperand } = this.state;
    const ans = parseFloat(previousOp) * parseFloat(currentOperand);
    this.setState({
      ...this.state,
      previousOp: null,
      currentOperand: ans,
      operation: null,
      computed: true,
    });
  };
  division = () => {
    const { previousOp, currentOperand } = this.state;
    const ans = parseFloat(previousOp) / parseFloat(currentOperand);
    this.setState({
      ...this.state,
      previousOp: null,
      currentOperand: ans,
      operation: null,
      computed: true,
    });
  };
  addDigit = (digit) => {
    let { currentOperand, previousOp, operation, computed } = this.state;
    if (computed === true) {
      currentOperand = null;
      computed = false;
    }
    if (previousOp !== null && operation !== null) {
      if (currentOperand === null) currentOperand = digit;
      else currentOperand = `${currentOperand}${digit}`;
    } else {
      if (currentOperand === null) currentOperand = digit;
      else currentOperand = `${currentOperand}${digit}`;
    }
    this.setState({
      ...this.state,
      currentOperand: currentOperand,
      computed,
    });
  };

  computation = () => {
    const { currentOperand, previousOp, operation } = this.state;
    if (currentOperand !== null && previousOp !== null) {
      switch (operation) {
        case "+":
          this.addition();
          break;
        case "-":
          this.subtraction();
          break;
        case "*":
          this.multiplication();
          break;
        case "÷":
          this.division();
          break;
        default:
          break;
      }
    }
  };

  chooseOperation = (op) => {
    let { previousOp, currentOperand, operation } = this.state;
    if (operation !== null) {
      if (previousOp !== null && currentOperand !== null) {
        this.computation();
      }
      if (previousOp !== null && currentOperand === null) {
        this.setState({
          ...this.state,
          operation: op,
        });
      }
    }
    if (currentOperand === null) return;
    if (operation === null) {
      this.setState({
        ...this.state,
        operation: op,
        previousOp: currentOperand,
        currentOperand: null,
      });
    }
  };
  addPeriod = () => {
    const { currentOperand } = this.state;
    if (currentOperand === null) return;
    const curr = currentOperand.toString();
    if (curr.includes(".")) return;
    return this.addDigit(".");
  };
  allClear = () => {
    this.setState({
      ...this.state,
      currentOperand: null,
      operation: null,
      previousOp: null,
    });
  };
  render() {
    const { currentOperand, previousOp, operation } = this.state;
    return (
      <div className="App">
        <div className="output">
          {previousOp}
          {operation}
          {currentOperand}
        </div>
        <button onClick={() => this.allClear()}>AC</button>
        <button onClick={() => this.chooseOperation("+")}>+</button>
        <button onClick={() => this.chooseOperation("-")}>-</button>
        <button onClick={() => this.chooseOperation("*")}>*</button>
        <button onClick={() => this.chooseOperation("÷")}>÷</button>
        <button onClick={() => this.computation()}>=</button>
        <button onClick={() => this.addDigit(1)}>1</button>
        <button onClick={() => this.addDigit(2)}>2</button>
        <button onClick={() => this.addDigit(3)}>3</button>
        <button onClick={() => this.addDigit(4)}>4</button>
        <button onClick={() => this.addDigit(5)}>5</button>
        <button onClick={() => this.addDigit(6)}>6</button>
        <button onClick={() => this.addDigit(7)}>7</button>
        <button onClick={() => this.addDigit(8)}>8</button>
        <button onClick={() => this.addDigit(9)}>9</button>
        <button onClick={() => this.addDigit(0)}>0</button>
        <button onClick={() => this.addPeriod()}>.</button>
      </div>
    );
  }
}

export default App;
