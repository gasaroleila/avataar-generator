import * as colorCombinator from '../utils/colorCombination';
import "../App.css";

function Avatar() {
    let username = window.location.pathname.slice(1);
    console.log(username)
    let colors = colorCombinator.returnColors(username? username: 'leila');
    console.log('colors' + colors.front)
    console.log('colors'+colors.bg)
    

    document.documentElement.style.setProperty("--main-front-color", colors?.front);
    document.documentElement.style.setProperty("--main-back-color", colors?.bg);
    return (
        <div className="outer">
            <div className="inner"></div>
            <div className="trunk"></div>
        </div>
    );
}

export default Avatar;
