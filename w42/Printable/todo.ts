import { Printable } from "./printable";

export class Todo implements Printable {

    protected _task:string;
    protected _priority:string;
    protected _done:boolean;

    constructor(task:string,priority:string,done:boolean){
        this._task = task;
        this._priority = priority;
        this._done = done;
    }

    public printAllFields(){
        console.log(`Task: ${this._task} | Priority: ${this._priority} | Done: ${this._done}`);
    }

}