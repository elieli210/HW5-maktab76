
function mostExpensive(obj){
        let values= Object.values(obj);
        let keys = Object.keys(obj);
        let max = values.indexOf(Math.max(...values));
        let final =keys[max];
    return `The most expensive one is the ${final}`
}
console.log(mostExpensive({
        "Diamond Earrings": 980,
        "Gold Watch": 250,
        "Pearl Necklace": 4650
                    }));









// let result = mostExpensive ({
//         "Diamond Earrings": 980,
//         "Gold Watch": 250,
//         "Pearl Necklace": 4650
//                         }) //➞ "The most expensive one is the Pearl Necklace"

// console.log(`The most expensive one is the `)