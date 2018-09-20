import CharacterCard from "./CharacterCard";
import React, { Component }from 'react';
import './App.css';
export default class WordCard extends Component{
    render(){
        return(
            <div>
                {Array.from(this.props.value).map((c,i)=><CharacterCard value={c} key={i}/>)}
                </div>
        );
    }
}