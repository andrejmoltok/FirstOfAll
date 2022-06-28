class Shape {

    private _name:string;
    private _sides:number;
    private _sideLength:number;
  
    constructor(name:string,sides:number,sideLength:number){
        this._name = name;
        this._sides = sides;
        this._sideLength = sideLength;
    }

    public calcPerimeter(){
        console.log('Perimeter is:',this._sides * this._sideLength);
    }

}
  

  const square = new Shape('Square',4,5);
  square.calcPerimeter();

  const triangle = new Shape('Triangle',3,3);
  triangle.calcPerimeter();