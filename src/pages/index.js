import styles from "@/styles/Home.module.css";
import {Input} from "@/components/input.js";
import {OperButton, NumButton} from "@/components/buttons.js";
import {useState} from "react";


export default function Home() {

  

const [value,setValue] = useState(null);
const [operation, setOperation] = useState(null)
const [value1, setValue1] = useState(null);

const onNumButtonClick = (e) =>{
  if(e.target.innerHTML == "C"){
    setValue1("")
    setValue("");
    setOperation(null);

  }
  else if(e.target.value  != NaN){
  setValue( value + e.target.value);
  }
}

const onOperButtonClick = (e) =>{
  setValue1(value)
  setValue("");
  setOperation(e.target.value);
}


const onEqualButtonClick = () =>{
  var Result; 
  if (operation == "+") {Result = value1*1 + value*1;}
  else if(operation == "-") {Result = value1*1 - value*1;}
  else if(operation == "*") {Result = value1 * value;}
  else if(operation == "/") {Result = value1 / value;}
  else{Result = "Syntax error - invalid input"};
  setValue(Result);
  setValue1(null);
}

const colorChange = (e) =>{
  console.log(e);
}

  return (
    <>
      <div className = {styles.MainBody}>
        <div className = {styles.display}>
          <h1 className = {styles.displayFont}>{value}</h1>
          <p className = {styles.subDisplay}></p>
        </div>
        <div className = {styles.buttonField}>
          <NumButton numValue = "9" onNumClick = {onNumButtonClick} mousedown = {colorChange}/>
          <NumButton numValue = "8" onNumClick = {onNumButtonClick} mousedown = {colorChange}/>
          <NumButton numValue = "7" onNumClick = {onNumButtonClick} mousedown = {colorChange}/>
          <OperButton operation = "+" onNumClick = {onOperButtonClick} mousedown = {colorChange}/>
          <NumButton numValue = "6" onNumClick = {onNumButtonClick} mousedown = {colorChange}/>
          <NumButton numValue = "5" onNumClick = {onNumButtonClick} mousedown = {colorChange}/>
          <NumButton numValue = "4" onNumClick = {onNumButtonClick} mousedown = {colorChange}/>
          <OperButton operation = "-" onNumClick = {onOperButtonClick} mousedown = {colorChange}/>
          <NumButton numValue = "3" onNumClick = {onNumButtonClick} mousedown = {colorChange}/>
          <NumButton numValue = "2" onNumClick = {onNumButtonClick} mousedown = {colorChange}/>
          <NumButton numValue = "1" onNumClick = {onNumButtonClick} mousedown = {colorChange}/>
          <OperButton operation = "C" onNumClick = {onNumButtonClick} mousedown = {colorChange}/>
          <OperButton operation = "/" onNumClick = {onOperButtonClick} mousedown = {colorChange}/>
          <NumButton numValue = "0" onNumClick = {onNumButtonClick} mousedown = {colorChange}/>
          <OperButton operation = "*" onNumClick = {onOperButtonClick} mousedown = {colorChange}/>
          <OperButton operation = "=" onNumClick = {onEqualButtonClick} mousedown = {colorChange}/>
        </div>
      </div>
    </>
  );
}
