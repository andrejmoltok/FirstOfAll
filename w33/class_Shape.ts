class Shape {

    private name:string;
    private sides:number;
    private sideLength:number;
  
    constructor(name:string,sides:number,sideLength:number){
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    public calcPerimeter(){
        console.log('Perimeter is:',this.sideLength*this.sides);
    }

}
  

  const square = new Shape('Square',4,5);
  square.calcPerimeter();

  const triangle = new Shape('Triangle',3,3);
  triangle.calcPerimeter();