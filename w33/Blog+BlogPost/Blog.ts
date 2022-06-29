'use strict'

import {BlogPost} from "./BlogPost"

class Blog {

    private _blogposts: BlogPost[];

    constructor(){
        this._blogposts = [];
    }

    public add(blogpost: BlogPost):any{
        return this._blogposts.push(blogpost);
    }

    public get(){
        return this._blogposts;
    }

    public update(index: number,blogpost: BlogPost){
        this._blogposts.splice(index,1,blogpost);
        return this._blogposts;
    }

    public delete(index:number){
        this._blogposts.splice(index,1);
        return this._blogposts;
    }

    public len(){
        return this._blogposts.length;
    }

}

let blogger = new Blog();
let first = new BlogPost('John Doe','Lorem ipsum','Lorem ipsum dolor sit amet.','2000.05.04.');
let second = new BlogPost('Tim Urban','Wait but why','A popular long-form, stick-figure-illustrated blog about almost everything.','2010.10.10.');
let third = new BlogPost('William Turton','One Engineer Is Trying to Get IBM to Reckon With Trump','Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.','2017.03.28.');
let fourth = new BlogPost('Update Post','Update Post','Update Post','Update Post');
let fifth = new BlogPost('CikkIroNeve','CikkCime','CikkTartalma','CikkDatum');
let sixth = new BlogPost('Peace','Love','Unity','Brotherhood');


console.log(blogger);

console.log("Added first: ",blogger.add(first));
console.log("Added second: ",blogger.add(second));
console.log("Added third: ",blogger.add(third));
console.log("Added fifth: ",blogger.add(fifth));
console.log("Added sixth: ",blogger.add(sixth));

console.log("Get contents: ",blogger.get());

console.log("Get length: ",blogger.len());

console.log("delete one element: ",blogger.delete(2));

console.log("update blog: ",blogger.update(3,fourth));

console.log("Blog contents: ",blogger);

console.log("Get length: ",blogger.len());