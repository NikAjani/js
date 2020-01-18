// //this keyword video 8

// console.log(this);

// function findAge(year){
//     console.log(2020-year);
//     console.log(this);    
// }

// findAge(1998);

// var john = {
//     name : 'John',
//     yearOfBirth : 1998,
//     Age : function(){
//         console.log(2020-this.yearOfBirth);
//         console.log(this);
//         return (2020-this.yearOfBirth);
        
        
//     }
// }

// john.Age();
// console.log(john.Age());

// // Object and properties video 9

// var john = {
//     firstName : 'john',
//     lastName : 'smith',
//     birthOfYear : 1998,
//     family : ['bob','mark','jane'],
//     job : 'teacher',
//     isMarrid : false
// };

// console.log(john);
// console.log(john.birthOfYear);
// console.log(john['job']);
// console.log(john.family[1]);
// console.log(john['isMarrid']);

// john.firstName = 'Nikhil';
// john.lastName = 'Ajani';
// console.log(john);

// var jane = new Object();

// jane.firstName = 'Jane';
// jane.lastName = 'Smith';
// jane['yearOfBirth'] = 1998;
// jane.family = ['john','bob'];

// console.log(jane);
// console.log(jane.family[1]);


//Object video 10

// var john = {
//     firstName : 'john',
//     lastName : 'smith',
//     birthOfYear : 1998,
//     family : ['bob','mark','jane'],
//     job : 'teacher',
//     isMarrid : false,
//     calcAge : function(){
//         this.age = 2020-this.birthOfYear;
//     }
// };

// john.calcAge();
// console.log(john);

// loops Video 11

for(var i = 0; i < 10; i++){
    console.log(i);
}

var john = ['John','Smith', 1998, 'Teacher', false];

// for(var i=0; i<john.length; i++){
//     console.log(john[i]);
// }

// //while loop

// var i=0;
// while(i<john.length){
//     console.log(john[i]);
//     i++;
// }

//Continue and Break statement.

for(var i=0; i<john.length; i++){
    if(typeof john[i]!=='string') continue;
    console.log(john[i]);
}

for(var i=0; i<john.length; i++){
    if(typeof john[i]!=='string') break;
    console.log(john[i]);
}