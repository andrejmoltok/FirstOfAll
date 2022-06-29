'use strict'

import {BlogPost} from "./BlogPost"

class Blog {

    private _blogposts: BlogPost[] = [];

    public add(blogpost: BlogPost):any{
        return this._blogposts.push(blogpost);
    }

    public get(){
        return this._blogposts;
    }

    public update(idx: number,blogpost: BlogPost){
        this.delete(idx);
        this.add(blogpost);
        let temp = this._blogposts[this._blogposts.indexOf(blogpost)];
        this._blogposts[this._blogposts.indexOf(blogpost)] = this._blogposts[idx];
        this._blogposts[idx] = temp;
        return this._blogposts;
    }

    public delete(index:number){
        if (index > 0 && index < this._blogposts.length-1){
            let temp = this._blogposts[index];
            this._blogposts[index] = this._blogposts[this._blogposts.length-1];
            this._blogposts[this._blogposts.length-1] = temp;
            this._blogposts.pop();
        }
        else if (index == 0)
        {
            this._blogposts.shift();
        }
        else if (index == this._blogposts.length-1)
        {
            this._blogposts.pop();
        }
        return this._blogposts;
    }

    
}

let blogger = new Blog();
let first = new BlogPost('John Doe','Lorem ipsum','Lorem ipsum dolor sit amet.','2000.05.04.');
let second = new BlogPost('agag','ahahrsg','agesthetn','rwbe5h53');
let third = new BlogPost('shrwrhw','w4h35aj6ja','wrha35hezn','rwhbwrhwrn');
let fourth = new BlogPost('negyedik','negyedik','negyedik','negyedik');
console.log(blogger);
console.log(blogger.add(first));
console.log(blogger.add(second));
console.log(blogger.add(third));
//console.log(blogger.get());
//console.log(blogger.delete(1));
console.log(blogger.update(1,fourth));
//console.log(blogger);

