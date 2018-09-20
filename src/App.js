import React, { Component }from 'react';
import './App.css';
import WordCard from "./WordCard";
const word="Hello";
class App extends Component{
  render(){
    return(
      <div>{
      
        //Array.from(word).map((c,i)=><CharacterCard value={c} key={i}/>)
        <WordCard value ="hello00"/>
      }
      </div>
    );
  }
}

export default App;
