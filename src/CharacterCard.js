
import React, { Component } from 'react';
import './App.css';
//import CharacterCard from './CharacterCard';
export default class CharacterCard extends Component{
    constructor(props){
        super(props)
        this.state={
            active:false,
        }
    }
    activate=()=>{
        if(!this.state.active){
            this.setState({active:true})
        }
    }
    render(){
        let className= `card ${this.state.active ? 'activeCard':''}`
        return(
            //<div className="card">{this.props.value}</div>

            <div className={className} onClick={this.activate}>
                {this.props.value}
                </div>

        )
    }
}