'use strict'

class PostIt {

    public _backgroundColor: string;
    public _text: string;
    public _textColor: string;

    constructor(_backgroundColor:string,_text: string,_textColor: string){
        this._backgroundColor = _backgroundColor;
        this._text = _text;
        this._textColor = _textColor;
    }
}

let superb = new PostIt('yellow','Superb!','green');
let idea = new PostIt('orange','Idea 1','blue');
let awesome = new PostIt('pink','Awesome','black');

console.log(superb);
console.log(idea);
console.log(awesome);


