function strReader(str) {
    let arr = [];
    let myMap = new Map();
    for (let i = 0; i < str.length; i++) {
        let count = 0;
        for (let j = str.length; j >= 0; j--) {
            if (str[i] == str[j-1]) {
            count++;
            }
        }
        arr.push(count);
    }
    let idx = arr.findIndex((v) => v == Math.max(...arr));
    myMap.set(str[idx],arr[idx]);
    return myMap;
}

console.log(strReader("alma"));

console.log(strReader("az alma fa alatt"));

console.log(strReader("eszperente nyelvbe keveredett bele"));