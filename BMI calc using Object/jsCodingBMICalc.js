var johnData = new Object();
var markData = new Object();
johnData = {
    firstName : 'John',
    lastName : 'Smith',
    massInKg : 20,
    heigthInMeter : 1,
    calculateJohnBMI : function(){
        this.BMI = Math.floor(this.massInKg / this.heigthInMeter^2);
        return this.BMI;
    }
};

markData = {
    firstName : 'Mark',
    lastName : 'Smith',
    massInKg : 15,
    heigthInMeter : 1,
    calculateMarkBMI : johnData.calculateJohnBMI
};

if(johnData.calculateJohnBMI()===markData.calculateMarkBMI()){
    console.log("BMI is Same..");
}else{
    johnData.BMI > markData.BMI ? console.log("John BMI is High : "+johnData.BMI) : console.log("Mark BMI is High : "+markData.BMI);
    
    
}