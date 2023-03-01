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
    // changing the state and re-rendering the App
    this.setState({
      ...this.state,
      previousOp: null,
      currentOperand: ans,
      operation: null,
      computed: true,
    });
    return ans;
  };
  // to subtract two values
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
  // to multiply two values
  multiplication = () => {
    const { previousOp, currentOperand } = this.state;
    // multiplying the two values
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
  // to divide the two values
  division = () => {
    const { previousOp, currentOperand } = this.state;
    // division of two operands
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
  // to add the digit to the current operand
  addDigit = (digit) => {
    let { currentOperand, computed } = this.state;
    // checking if the current operand is already computed value
    // if it is then changing it to null
    if (computed === true) {
      currentOperand = null;
      computed = false;
    }
    // if current operand is null then assigning the digit to it 
      if (currentOperand === null) currentOperand = digit;
    // if current operand is not null then appending the value to current operand 
      else currentOperand = `${currentOperand}${digit}`;
    this.setState({
      ...this.state,
      currentOperand: currentOperand,
      computed,
    });
  };

  // one's the equals button is clicked performing the computation
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

  // choosing the operation like addition or multiplication etc..
  chooseOperation = (op) => {
    var { previousOp, currentOperand, operation } = this.state;
    // if there is already operation and prev curr operands are there performing the computation
    if (operation !== null) {
      if (previousOp !== null && currentOperand !== null) {
        // getiing the computed ans from computation
        let ans = this.computation();
        this.setState({
          ...this.state,
          operation: op,
          previousOp: ans,
          currentOperand: null,
        });
      }
      // if only prev operand and other operation exists changing the operation
      if (previousOp !== null && currentOperand === null) {
        this.setState({
          ...this.state,
          operation: op,
        });
      }
    }
    // if the current operand is null returning without and changes
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
  // adding the period symbol for decimal values
  addPeriod = () => {
    const { currentOperand } = this.state;
    if (currentOperand === null) return;
    const curr = currentOperand.toString();
    if (curr.includes(".")) return;
    return this.addDigit(".");
  };
  // clear everything 
  allClear = () => {
    this.setState({
      ...this.state,
      currentOperand: null,
      operation: null,
      previousOp: null,
    });
  };
  // changing the current operand to either positive or neh=gative numbers.
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
