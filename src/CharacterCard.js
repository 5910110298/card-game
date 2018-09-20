
import React, { Component } from 'react';
import './App.css';
//import CharacterCard from './CharacterCard';
export default class CharacterCard extends Component{
    render(){
        return(
            <div className="card">{this.props.value}</div>
        )
    }
}