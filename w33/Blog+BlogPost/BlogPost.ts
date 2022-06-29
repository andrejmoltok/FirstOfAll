'use strict'

class BlogPost {
    
    private _authorName: string;
    private _title: string;
    private _text: string;
    private _publicationDate: string;

    constructor(authorName: string, title: string, text: string, publicationDate: string){
        this._authorName = authorName;
        this._title = title;
        this._text = text;
        this._publicationDate = publicationDate;
    }

    public getauthorName(){
        return this._authorName;
    }

    public setauthorName(value: string){
        this._authorName = value;
        return 'Value set!'
    }

    public getTitle(){
        return this._title;
    }

    public setTitle(value: string){
        this._title = value;
        return 'Value set!'
    }

    public getText(){
        return this._text;
    }

    public setText(value: string){
        this._text = value;
        return 'Value set!'
    }

    public getPubDate(){
        return this._publicationDate;
    }

    public setPubDate(value: string){
        this._publicationDate = value;
        return 'Value set!'
    }
}

export {BlogPost};

let first = new BlogPost('John Doe','Lorem ipsum','Lorem ipsum dolor sit amet.','2000.05.04.');
let second = new BlogPost('Tim Urban','Wait but why','A popular long-form, stick-figure-illustrated blog about almost everything.','2010.10.10.');
let third = new BlogPost('William Turton','One Engineer Is Trying to Get IBM to Reckon With Trump','Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.','2017.03.28.');

console.log(first);
console.log(first.getauthorName());
console.log(first.setauthorName('Warren Buffet'));
console.log(first);
console.log(second.getTitle());
console.log(second.setTitle("What's going on?"));
console.log(second.setPubDate('2022.06.28'));
console.log(second);
console.log(third);