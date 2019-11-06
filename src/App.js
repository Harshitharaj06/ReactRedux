import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Addition,values,bnval,Subtraction,Multiplication,Division} from './reducers/counter';
import './App.css';

// contributor - Sunil PutteGowda (hp.sunilkumar793@gmail.com)
const App = ({ input1,input2,res, ...props }) => {
  return (
    <div className="App">
    Input1:
      <div>
        <input type="text" value={input1} onClick={()=>props.values(true)}></input>
      </div>
    Input2:
      <div>
        <input type="text" value={input2} onClick={()=>props.values(false)}></input>
       
      </div>
    <br/>
   
      <button onClick={() => props.Addition()}>
      +
      </button>
      <button onClick={() => props.Subtraction()}>
      -
      </button>
      <button onClick={() => props.Multiplication()}>
      *
      </button>
      <button onClick={() => props.Division()}>
      /
      </button>
<br/>
      <button onClick={() => props.bnval(0)}>
      0
      </button>
      <button onClick={() => props.bnval(1)}>
      1
      </button>
      <button onClick={() => props.bnval(2)}>
      2
      </button>
      <button onClick={() => props.bnval(3)}>
      3
      </button>
      <button onClick={() => props.bnval(4)}>
      4
      </button>
      <br/>
      <button onClick={() => props.bnval(5)}>
      5
      </button>
      <button onClick={() => props.bnval(6)}>
      6
      </button>
      <button onClick={() => props.bnval(7)}>
      7
      </button>
      <button onClick={() => props.bnval(8)}>
      8
      </button>
      <button onClick={() => props.bnval(9)}>
      9
      </button>
      <br/>
      
      

      
        <h1>
        Result:{res}
        </h1>
      {/* <button onClick={() => props.decrement()}>
        -
      </button> */}
    </div>
  );
};

const mapStateToProps = ({ counter }) => ({
  input1:counter.input1, 
  input2:counter.input2,
  res: counter.res
});

const mapDispatchPropsToProps = (dispatch) => bindActionCreators({
  Addition,bnval,values,Subtraction,Multiplication,Division
}, dispatch);

export default connect(mapStateToProps, mapDispatchPropsToProps)(App);
