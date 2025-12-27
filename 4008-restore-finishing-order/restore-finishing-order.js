/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function(order, friends) {
        let res = [];
    let friendSet = new Set(friends);
    for (let i = 0; i < order.length; i++) {
        if (friendSet.has(order[i])) {
            res.push(order[i])
        }
    }
    return res;

    
};