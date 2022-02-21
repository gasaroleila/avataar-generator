import React, { useRef, useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import "../App.css";
import colorCombination from "../utils/colorCombination";
import colorCollection from "../utils/colors/colorCollection";

function Avatar() {
  const [username, setUsername] = useState<string>("EloiMizero");
  const [colorSection, setColorSection] = useState<any>();
  const [bgColor, setBgColor] = useState<any>();
  const [innerColor, setInnerColor] = useState<any>()
  const [colors, setColors] = useState<any>({});
  let outerRef = useRef<HTMLDivElement>(null);
  let innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setColors(colorCombination(username));
      setColorSection(colorCollection[parseInt(colors?.index)])
    console.log(colorSection)
    if (colors?.colors) {
      setBgColor(colorSection[parseInt(colors?.colors[0])])
      console.log(bgColor)
      setInnerColor(colorSection[parseInt(colors?.colors[1])])
    }
  }, []);

  useLayoutEffect(() => {
    if (outerRef.current && innerRef.current) {
      outerRef.current.style.backgroundColor = bgColor;
      innerRef.current.style.backgroundColor = innerColor;
    }
  });
  return (
    <>
      <input
        className="inputEl"
        placeholder="Enter your name"
        onChange={(e) => setUsername(e.target.value)}
      />
      {username}
      <div className="outer" ref={outerRef}>
        <div className="inner" ref={innerRef}></div>
      </div>
    </>
  );
}

export default Avatar;
