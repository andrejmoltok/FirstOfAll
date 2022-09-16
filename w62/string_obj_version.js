function strReader(str) {
    let myObj = str.split('').reduce(function(p,v) {
        const count = p[v] ?? 0;
        return {...p,[v] : count + 1};
    },{});
    let key = Array.from(Object.keys(myObj));
    let val = Array.from(Object.values(myObj));
    let max = Math.max(0,...val);
    let myVal = val.indexOf(max);
    let myKey = key[myVal];
    let newObj = {};
    newObj[myKey[myVal]] = myObj[myKey[myVal]];
    return newObj;
}

console.log(strReader("alma"));

console.log(strReader("az alma fa alatt"));

console.log(strReader("eszperente nyelvbe keveredett bele"));