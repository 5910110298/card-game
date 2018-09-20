
import React, { Component } from 'react';
import './App.css';
//import CharacterCard from './CharacterCard';
export default class CharacterCard extends Component{
    render(){
        return(
            <div>{this.props.value}</div>
        )
    }
}