import {Person} from './person';
import {Student} from './student';
import {Mentor} from './mentor';
import {Sponsor} from './sponsor';
import {Cohort} from './Cohort'

let people = new Array();
people = [];
let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person('Jane Doe', 30, 'female');
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student('Jane Doe',30,'female','The School Of Life');
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor('Jane Doe',30,'female','intermediate');
people.push(mentor);
let sponsor = new Sponsor('Jane Doe',30,'female','Google');
people.push(sponsor);
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
    elon.hire();
}

for (let i = 0; i < 4; i++) {
    sponsor.hire();
}

people.forEach((person) => {
 person.introduce();
 person.getGoal();
});

let awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();
