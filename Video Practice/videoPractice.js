// // constructor

// var Person = function(name,age){
//     this.firstName = name;
//     this.age = age;
//     this.staus = function(){
//         if(this.age < 18){
//             console.log(this.firstName + ' is Boy');
//         }else if(this.age >= 18 && this.age < 30){
//             console.log(this.firstName+ ' is young Man');        
//         }else if(this.age >= 30 && this.age < 60){
//             console.log(this.firstName+ ' is a Man');        
//         }else{
//             console.log(this.firstName+ ' is old Man');        
//         }
//     }
// }


// var john = new Person('john',25);
// john.staus();

// // Using Object

// var personPrototype = {
    
//     calculateBMI : function(){
//         return (this.massKg / this.heightMeter ^ 2);
//     }
// }

// var john = Object.create(personPrototype);
// john.firstName = 'john';
// john.lastName = 'smith';
// john.massKg = 25;
// john.heightMeter = 1;

// console.log(john.calculateBMI());
// var mark = Object.create(personPrototype,{
//     'firstName' : {'value' : 'mark'},
//     'lastName' : {'value' : 'Smith'},
//     'massKg' : {'value' : 26},
//     'heightMeter' : {'value' :1.5}
// });

// console.log(mark.calculateBMI());
var s = [];
s[0] = 