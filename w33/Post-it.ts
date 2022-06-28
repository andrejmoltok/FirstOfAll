'use strict'

class PostIt {

    public _backgroundColor: string;
    public _text: string;
    public _textColor: string;

    constructor(backgroundColor:string,text: string,textColor: string){
        this._backgroundColor = backgroundColor;
        this._text = text;
        this._textColor = textColor;
    }
}

let superb = new PostIt('yellow','Superb!','green');
let idea = new PostIt('orange','Idea 1','blue');
let awesome = new PostIt('pink','Awesome','black');

console.log(superb);
console.log(idea);
console.log(awesome);


