// if else video 1

var fname = "Nikhil";
var age = 22;

if(age >= 18){
    console.log(fname+" is eligible for Vote..");
} else {
    console.log(fname+" is not eligible for Vote");
}

// boolean logic video 2

if(age < 10){
    console.log(fname+' is a boy and ticket Price is : 10');
} else if(age >= 10 && age < 18){
    console.log(fname+' is a teenager and ticket price is : 15');
} else if(age >= 18 && age < 25){
    console.log(fname+' is a young man and ticket price is : 20');
}else {
    console.log(fname+' is man and ticket price is : 25');
}

//Ternary operator video 3

age >= 18 ? console.log(fname+' is eligible for Vote') : console.log(fname+ ' is not eligible fot Vote');

// switch statement video 3

switch(true){
    case age<10:
        console.log(fname+' is a boy and ticket Price is : 10');
        break;
    case age>=10 && age < 18:
        console.log(fname+' is a teenager and ticket price is : 15');
        break;
    case age>=18 && age<25:
        console.log(fname+' is a young man and ticket price is : 20');
        break;
    default:
        console.log(fname+' is man and ticket price is : 25');

}

//truthy and falsy values video 4

var val;
val=0;
if (val || val===0){
    console.log("variable is define");
}else{
    console.log('variable is NOT define..');
}

//Equality operator video 4

val=23;

val===23 ? console.log("value is Number") : console.log("value is Other data type");
val==='23' ? console.log("value is Number") : console.log("value is Other data type");

//function video 5

function findAvg(arg1,arg2,arg3){
    return arg1+arg2+arg3/3;
}

console.log("Avg of 20, 40, 50 is : "+findAvg(20,40,50));

//Array video 7

var names = ['john','nikhil','raj','rahul'];

console.log(names);

console.log("length of array is :"+names.length);

var allDetail = new Array('nikhil',1998,'f',false,22);

console.log(allDetail);
console.log(allDetail[2]);
console.log(allDetail[allDetail.length-1]);

allDetail.push("Student");
allDetail.unshift("Mr.");

console.log(allDetail);

allDetail.pop();
console.log(allDetail);
allDetail.shift();
console.log(allDetail);