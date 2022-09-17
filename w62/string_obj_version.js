function strReader(str) {
  let myObj = str.split('').reduce(function(p,v) {
    const count = p[v] ?? 0;
    return {...p,[v] : count + 1};
  },{});
  //console.log(myObj);
  const myMax = Math.max.apply(null, Object.values(myObj));
  const myLetter = Object.keys(myObj)[Object.values(myObj).indexOf(myMax)];
  let newObj = {};
  newObj[myLetter] = myMax;
  return newObj;
}

  console.log(strReader("alma"));

  console.log(strReader("az alma fa alatt"));

  console.log(strReader("eszperente nyelvbe keveredett bele"));

  console.log(strReader("hatalmas hegy emelkedett az égbe"));

  console.log(strReader("lehet nem kellene ezt tennem de nekem kell eme kegyes lehellet"));

  console.log(strReader("illatos lepel"));

  console.log(strReader("ketyego kakukkos ora"));