'use strict'

import {Student} from './Student'
import {Teacher} from './Teacher'

let newStud = new Student("Jockey");
let newTeach = new Teacher("Ewing");

let newStud2 = new Student("Jessica");
let newTeach2 = new Teacher("Prof.");

console.log(newStud.question(newTeach));
console.log(newTeach.teach(newStud));

console.log(newStud.question(newTeach2));
console.log(newTeach.teach(newStud2));