import React from "react";
import "./index.css"

class App extends React.Component {
  // constructor of aour APP class
  constructor() {
    super();
    // initializing the state
    this.state = {
      previousOp: null,
      operation: null,
      currentOperand: null,
      computed: false,
    };
  }
  // to add two numbers
  addition = () => {
    const { previousOp, currentOperand } = this.state;
    // converting the previous and current operands to float values
    const ans = parseFloat(previousOp) + parseFloat(currentOperand);
    this.setState({
      ...this.state,
      previousOp: null,
      currentOperand: ans,
      operation: null,
      computed: true,
    });
    return ans;
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
    return ans;
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
    return ans;
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
    return ans;
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
          return this.addition();
        case "-":
          return this.subtraction();
        case "*":
          return this.multiplication();
        case "÷":
          return this.division();
        default:
          break;
      }
    }
  };

  chooseOperation = (op) => {
    var { previousOp, currentOperand, operation } = this.state;
    if (operation !== null) {
      if (previousOp !== null && currentOperand !== null) {
        let ans = this.computation();
        this.setState({
          ...this.state,
          operation: op,
          previousOp: ans,
          currentOperand: null,
        });
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
  plusOrMinus=()=>{
   let {currentOperand,operation,previousOp}=this.state;
   if(operation!==null || previousOp!==null)
    return
   if(currentOperand!==null)
  {
    currentOperand=(-1)*parseFloat(currentOperand);
  }
  this.setState({
    ...this.state,
    currentOperand
  })
  }
  render() {
    const { currentOperand, previousOp, operation } = this.state;
    return (
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand">{previousOp}{operation}</div>
          <div className="current-operand">{currentOperand}</div>
        </div>
        <button className="span-two" onClick={() => this.allClear()}>AC</button>
        <button onClick={() => this.plusOrMinus()}>+/-</button>
        <button onClick={() => this.chooseOperation("÷")}>÷</button>
        <button onClick={() => this.addDigit(1)}>1</button>
        <button onClick={() => this.addDigit(2)}>2</button>
        <button onClick={() => this.addDigit(3)}>3</button>
        <button onClick={() => this.chooseOperation("+")}>+</button>
        <button onClick={() => this.addDigit(4)}>4</button>
        <button onClick={() => this.addDigit(5)}>5</button>
        <button onClick={() => this.addDigit(6)}>6</button>
        <button onClick={() => this.chooseOperation("-")}>-</button>
        <button onClick={() => this.addDigit(7)}>7</button>
        <button onClick={() => this.addDigit(8)}>8</button>
        <button onClick={() => this.addDigit(9)}>9</button>
        <button onClick={() => this.chooseOperation("*")}>*</button>
        <button onClick={() => this.addDigit(0)}>0</button>
        <button onClick={() => this.addPeriod()}>.</button>
        <button className="span-two" onClick={() => this.computation()}>=</button>
      </div>
    );
  }
}

export default App;
