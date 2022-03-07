import * as colorCombinator from '../utils/colorCombination';
import "../App.css";
import { useState } from 'react';

function Avatar() {
  const [name, setName] = useState('Leila')
    let frontColor;
    let backColor;
    document.documentElement.style.setProperty("--main-front-color", "#FFFFFF");
    document.documentElement.style.setProperty("--main-back-color", "#000000");
    return (
        <div className="outer">
            <div className="inner"></div>
            <div className="trunk"></div>
        </div>
    );
}

export default Avatar;
