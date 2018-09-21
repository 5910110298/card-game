import CharacterCard from "./CharacterCard";
import React, { Component }from 'react';
import './App.css';
import _ from 'lodash';
const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attemt: 1,
        guess: [],
        completed: false
    }
}
export default class WordCard extends Component {
    constructor(props){
        super(props)
        this.state = prepareStateFromWord(this.props.value)
        this.grade
    }
    activationHandler = (c) => {
        let guess = [this.state.guess]+c
        this.setState({guess})
        if(guess.length === this.state.chars.length){
            if(guess === this.state.word){
                this.setState({guess: [], completed: true})
            }else{
                this.setState({guess: [], attemt: this.state.attemt + 1})
     
            }
        }
    }
    
       
    render(){  
        var score =this.state.attemt
        if(score == 1)this.grade="genius."
        else if(score == 2) this.grade="clever."
        else if(score== 3) this.grade="ordinary."
        else if(score <4 ) this.grade="stupid."
        else this.grade="very stupid."
        
        return(
            
            <div className="App">
                {
                    Array.from(this.state.chars).map(
                        (c, i) => <CharacterCard value = {c} key = {i} attemt={this.state.attemt}
                        activationHandler = {this.activationHandler}/>
                    )
                }
                <p>Round : {this.state.attemt}</p>
                
                 <p>{this.state.completed? "You are  "+this.grade : ""}</p>
            </div>
        )
    }
}