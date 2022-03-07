import { SHA256 } from 'crypto-ts';

import * as colors from './colors';

// Get a valid seed
const getValidSeed = (name: any) => {
    const hash = SHA256(name).toString();
    let seed = String(hash.replace(/\D/g, ''))
    return seed;
}

// Getting index level 1
const getColorObject = (dig_one: any) => {
    let index1: number;
    index1 = dig_one == 9 ? dig_one : dig_one + 1;
    return colors.colors[index1];
}

// Getting index level 2
const getExactColor = (dig_one: any, dig_two: any) => {
    let index2;
    let binaryValue = dig_two.toString(2) == 0 ? 0 : dig_two.toString(2);
    let colorObject = getColorObject(dig_one);
    if (binaryValue == 0) {
        index2 = 1;
        return colorObject[index2];
    } else {
        index2 = Number(binaryValue[0]) + Number(binaryValue[1]);
        return colorObject[index2];
    }
}
export const returnColors = (name: string) => {
    let seed = getValidSeed(name);


    let colorObj;
    if (seed.length <= 1) {
        colorObj = { bg: "#FFFFFF", front: "#0D4D8C" };
    } else {
        let dig_one = Number(seed[0]);
        let dig_two = Number(seed[1]);

        let color = getExactColor(dig_one, dig_two);
        if (dig_one >= dig_two) {
            colorObj = { bg: "#FFFFFF", front: color };
        } else {
            colorObj = { bg: color, front: "#FFFFFF" }
        }
    }

    return colorObj
}

// console.log(returnColors("Leila"));
// console.log(returnColors("leila"));

