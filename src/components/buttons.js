import styles from './buttons.module.css';

export const NumButton = (props)=>{
    return(
        <>
        <button className = {styles.numButton} onClick = {e => props.onNumClick(e)} value = {props.numValue} >{props.numValue}</button>
        </>
    );
}

export const OperButton = (props)=>{
    return(
        <>
        <button className = {styles.operButton} onClick = {e => props.onNumClick(e)} value = {props.operation} >{props.operation}</button>
        </>
    );
}