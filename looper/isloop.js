'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
    // console.log(linkedlist)
    // need loop
    //if (elements.next === val of any of nodes) {return false}

    //if 2 different node have the same next, then it's going to have a loop
    // check if the next's are equal

    let looper = linkedlist.head
    console.log(looper.next)
    // let memo = {}
    let memo = new Map()
    while(looper.next) {
        console.log("in while loop", looper.next)
        // if (memo[looper]) {
        if (memo.get(looper)) {
            return true
        } else {
            // memo[looper] = true
            memo.set(looper, true)
            looper = looper.next
        }
    }
    return false

    
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop