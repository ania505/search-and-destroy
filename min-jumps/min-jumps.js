'use strict';

// Complete this algo
const minJumps = arr => {
    let length = arr.length;
    let jumpsCount = 0;
    if (arr[0] === 0) {
        return -1
    }
    if (length === 0 || length === 1) {
        return 0
    } else if (length === 2) {
        return 1
    }
    let curr = arr[0]
    let biggest = 0
    for (let i=1; i<; i++) {
        arr[i]
    }

};

module.exports = minJumps