var johnBillAmount = [124,48,268];
var tipArray = [];
var finalAmount = [];

function calculateTip(){
    for(var i=0;i<johnBillAmount.length;i++){
        if(johnBillAmount[i]<50){
            var tip = Math.floor((0.2*johnBillAmount[i]));
            tipArray[i]=tip;
            finalAmount[i] = tip + johnBillAmount[i];
        }else if(johnBillAmount[i]>=50 && johnBillAmount[i]<200){
            var tip = Math.floor((0.15*johnBillAmount[i]));
            tipArray[i]=tip;
            finalAmount[i] = tip + johnBillAmount[i];
        }else{
            var tip = Math.floor((0.1*johnBillAmount[i]));
            tipArray[i]=tip;
            finalAmount[i] = tip + johnBillAmount[i];
        }
    }

    console.log(johnBillAmount);
    console.log(tipArray);
    console.log(finalAmount);
}
calculateTip();