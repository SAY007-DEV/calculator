import React, { useState } from 'react'
import '../../src/App.css'
function Calc() {
    const [result, SetResult] = useState('');
    const [input, SetInput] = useState('');
   

    const Handleclick = (value) => {
        SetInput((pre) => pre + value);
    };

    const HandleEqual = () => {
        try {
            SetResult(eval(input).toString());
        } catch {
            SetResult('Error');
        }
    };

    const HandleClear = () => {
        SetInput('');
        SetResult('');
    };


    const HandleBack = () => {
        SetInput((pre) => pre.slice(0, -1));
    }
  return (
    <>
    <div className="main">
       <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
       </div>
       <div className="buttons">
        <button className='number'onClick={()=>{Handleclick('1')}}>1</button>
        <button className='number'onClick={()=>{Handleclick('2')}}>2</button>
        <button className='number'onClick={()=>{Handleclick('3')}}>3</button>
        <button className='operator'onClick={()=>{Handleclick('+')}}>+</button>
        <button className='number'onClick={()=>{Handleclick('4')}}>4</button>
        <button className='number'onClick={()=>{Handleclick('5')}}>5</button>
        <button className='number'onClick={()=>{Handleclick('6')}}>6</button>
        <button className='operator'onClick={()=>{Handleclick('-')}}>-</button>
        <button className='number'onClick={()=>{Handleclick('7')}}>7</button>
        <button className='number'onClick={()=>{Handleclick('8')}}>8</button>
        <button className='number'onClick={()=>{Handleclick('9')}}>9</button>
        <button className='operator'onClick={()=>{Handleclick('*')}}>*</button>
        <button className='equals' onClick={HandleEqual}>=</button>
        <button className='operator'onClick={()=>{Handleclick('/')}}>/</button>
       <button className='clear' onClick={HandleClear}>c</button>
       <button className='back' onClick={HandleBack}>&#9003;</button>

       </div>
    </div>

    </>
  )
}

export default Calc