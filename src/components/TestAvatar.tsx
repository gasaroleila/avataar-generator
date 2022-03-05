import React, { useRef, useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import queryString from "query-string";

import "../App.css";
import colorCombination from "../utils/colorCombination";
import colorCollection from "../utils/colors/colorCollection";

type colors = {
    colors: number[] | undefined,
    index: number | undefined
}

function Avatar() {
    const [username, setUsername] = useState<any>("default");

    const [colorSection, setColorSection] = useState<any | undefined>(0);

    const [bgColor, setBgColor] = useState<any | undefined>("#ededed");
    const [innerColor, setInnerColor] = useState<any | undefined>("#0d0e3a")

    const [colors, setColors] = useState<colors>({ colors: [100, 500], index: 0 });

    let outerRef = useRef<HTMLDivElement>(null);
    let innerRef = useRef<HTMLDivElement>(null);
    let trunkRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (location.search) {
            let name = queryString.parse(location.search)?.username;

            setColors(colorCombination("joy"));
            setTimeout(() => {
                console.log(colorCombination("77sd"));
                if (colors.index && colors.colors) {
                    setColorSection(colorCollection[colors?.index])
                    setBgColor(colorSection[colors?.colors[0]])
                    setInnerColor(colorSection[colors?.colors[1]])
                    console.log(colors);
                    setTimeout(() => {
                        console.log(colorCombination("77sad"));

                    }, 1000);
                }
            }, 1000);

        }
    }, [location.search]);

    useEffect(() => {
        if (outerRef.current && innerRef.current && trunkRef.current) {
            outerRef.current.style.backgroundColor = bgColor;
            innerRef.current.style.backgroundColor = innerColor;
            trunkRef.current.style.backgroundColor = innerColor;
        }
    }, [bgColor, innerColor]);

    return (
        <div className="outer" ref={outerRef}>
            <div className="inner" ref={innerRef}></div>
            <div className="trunk" ref={trunkRef}></div>
        </div>
    );
}

export default Avatar;
