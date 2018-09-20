import CharacterCard from "./CharacterCard";
import React, { Component }from 'react';
import WordCard from "./WordCard";
import './App.css';
import _ from 'lodash';



    const prepareStateFromWord = (given_word) => {
        let word = given_word.toUpperCase()
        let chars = _.shuffle(Array.from(word))
        return {
        word,
        chars,
        attempt: 1,
        guess: [],
        completed: false
    }
    
}

