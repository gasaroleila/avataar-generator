// 1. Getting to know the color to pick
const collectionIndex = (letter: string) => {
    return letter.charAt(0).charCodeAt(0).toString().split("").slice(-1)[0]
}

// 2. Invert colors or not
const invertColors = (letter1: string, letter2: string) => {
    if (letter1 > letter2) {
        return true;
    }
    return false;
}

// 3. Return combination of colors
const combineColors = (l1: string, l2: string) => {
    if (invertColors(l1, l2)) {
        if (l2 == "m") {
            return [700, 200];
        } else if (l2 > "m") {
            return [800, 100];
        } else if (l2 < "m") {
            return [600, 50];
        }
    } else {
        if (l1 == "m") {
            return [200, 700];
        } else if (l1 > "m") {
            return [100, 800];
        } else if (l1 < "m") {
            return [50, 600];
        }
    }
}

let colorCombination = (username: string): object => {
    if (username.split("").includes(" ")) {
        let splitUsername = username.split("");
        let index = collectionIndex(splitUsername[1]);
        let colors = combineColors(splitUsername[0].charAt(0), splitUsername[1].charAt(1));
        return { index, colors };
    } else {

        let index = collectionIndex(username);
        let colors = combineColors(username.charAt(0), username.charAt(1));
        return { index, colors };
    }
}

// console.log(colorCombination("igirimpuhweaime"));

export default colorCombination;