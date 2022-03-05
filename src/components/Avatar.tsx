import React, { useRef, useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import queryString from "query-string";

import "../App.css";

function Avatar() {
    let frontColor;
    let backColor;

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
    document.documentElement.style.setProperty("--main-back-color", "#d1e3ee");
    return (
        <div className="outer">
            <div className="inner"></div>
            <div className="trunk"></div>
        </div>
    );
}

export default Avatar;
