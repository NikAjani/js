var johnMass, johnHeight, markMass, markheight;

johnMass = prompt('Enter johnMass Data : ');
johnHeight = prompt('Enter johnHeight Data : ');
markMass = prompt('Enter markMass Data : ');
markheight = prompt('Enter markHeight Data : ');

var johnBMI = johnMass / johnHeight^2;
var markBMI = markMass / markheight^2;

console.log('johnMass : ' +johnMass + 'kg  '+ ' johnHeight : '+johnHeight+ 'meter ');
console.log('markMass : '+ markMass + 'kg ' + ' markHeight : '+ markheight+ 'meter');
console.log('johnBMI : '+johnBMI);
console.log('markBMI: '+markBMI);

var ishigherJohn = johnBMI > markBMI;

//console.log("is johnBMI is higher Than markBMI : "+ishigher)
if(johnBMI==markBMI){
    console.log("BMI is same");
}else if(ishigherJohn){
    console.log("johnBMI is higher than markBMI"+johnBMI);
}else{
    console.log("markBMI is higher than johnBMI"+markBMI);
}