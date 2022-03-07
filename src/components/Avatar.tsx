import * as colorCombinator from '../utils/colorCombination';
import "../App.css";
import { useState } from 'react';

function Avatar () {
  const [name, setName] = useState('Leila')
    let frontColor;
    let backColor;
    console.log(colorCombinator.returnColors('dddk'))
    frontColor = Math.floor(Math.random() * 16777215).toString(16);
    backColor = Math.floor(Math.random() * 16777215).toString(16);

    document.documentElement.style.setProperty("--main-front-color", "#" + frontColor);
    while ("#" + frontColor == "#" + backColor && frontColor < "B0BEC5") {
        backColor = Math.floor(Math.random() * 16777215).toString(16);
        if ("#" + backColor == "#e1e3ee") {
            frontColor = Math.floor(Math.random() * 16777215).toString(16);
        } else if ("#" + frontColor == "#e1e3ee") {
            backColor = Math.floor(Math.random() * 16777215).toString(16);
        }
    }
    document.documentElement.style.setProperty("--main-back-color", "#FFF");
    return (
        <div className="outer">
            <div className="inner"></div>
            <div className="trunk"></div>
        </div>
    );
}

export default Avatar;
