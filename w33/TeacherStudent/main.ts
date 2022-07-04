'use strict'

import {Student} from './Student'
import {Teacher} from './Teacher'

let newStud = new Student("Joskabacsi");
let newTeach = new Teacher("Lacafaca");

console.log(newStud.question(newTeach));
console.log(newTeach.teach(newStud));

let newS2 = new Student("Pitypang");
let newT2 = new Teacher("Levendula");

console.log(newS2.question(newT2));
console.log(newT2.teach(newS2));