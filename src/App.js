import React, { Component }from 'react';
import './App.css';
import prepareStateFromWord from "./WordCard";
import _ from 'lodash';

class App extends Component{
  render(){
    return(
      <div>{
      
        //Array.from(word).map((c,i)=><CharacterCard value={c} key={i}/>)
        <prepareStateFromWord  value ="hello"/>
      }
      </div>
    );
  }
}

export default App;
