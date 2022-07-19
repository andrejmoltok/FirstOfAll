interface Printable {
    printAllFields():void;
}

class Domino {

    protected _values:number[];

    constructor(valueA:number,valueB:number){
        this._values = [valueA,valueB];
    }

    public printAllFields(){
        console.log(`Domino A side ${this._values[0]} | B side ${this._values[1]}`);
    }

}

class Todo {

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

let dominoes = new Array();
dominoes.push(new Domino(5,9));
dominoes.push(new Domino(2,1));
dominoes.push(new Domino(3,2));
dominoes.push(new Domino(4,6));
dominoes.push(new Domino(7,5));
dominoes.push(new Domino(4,2));

let todolist = new Array();
todolist.push(new Todo('Buy milk','High',true));
todolist.push(new Todo('Buy bread','Medium',false));
todolist.push(new Todo('Buy newspaper','High',false));
todolist.push(new Todo('Sell books','Medium',false));
todolist.push(new Todo('Buy Netflix subscription','High',false));
todolist.push(new Todo('Pass Javascript exam','High',true));

for (const Domino of dominoes){
    Domino.printAllFields();
}

for (const Todo of todolist){
    Todo.printAllFields();
}