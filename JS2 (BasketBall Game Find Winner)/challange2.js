var johnGame1,johnGame2,johnGame3,mikeGame1,mikeGame2,mikeGame3;

johnGame1 = 89;
johnGame2 = 120;
johnGame3 = 103;
mikeGame1 = 116;
mikeGame2 = 94;
mikeGame3 = 123;

var mikeTeamAvg = (mikeGame1+mikeGame2+mikeGame3)/3;
var johnTeamAvg = (johnGame1+johnGame2+johnGame3)/3;

if(johnTeamAvg == mikeTeamAvg){
    console.log('match is draw with '+ mikeTeamAvg + ' Score');
}else if(johnTeamAvg > mikeTeamAvg){
    console.log('John Team is Win with : '+johnTeamAvg+' Score');
}else{
    console.log('mike Team is Win with : '+mikeTeamAvg+' Score');
}

johnGame1 = 110;
johnGame2 = 110;
johnGame3 = 120;
mikeGame1 = 116;
mikeGame2 = 94;
mikeGame3 = 123;

mikeTeamAvg = (mikeGame1+mikeGame2+mikeGame3)/3;
johnTeamAvg = (johnGame1+johnGame2+johnGame3)/3;

if(johnTeamAvg == mikeTeamAvg){
    console.log('match is draw with '+ mikeTeamAvg + ' Score');
}else if(johnTeamAvg > mikeTeamAvg){
    console.log('John Team is Win with : '+johnTeamAvg+' Score');
}else{
    console.log('mike Team is Win with : '+mikeTeamAvg+' Score');
}

var maryGame1,maryGame2,maryGame3;

maryGame1 = 150;
maryGame2 = 134;
maryGame3 = 105;

var maryTeamAvg = (maryGame1+maryGame2+maryGame3)/3;

if(johnTeamAvg == mikeTeamAvg == maryTeamAvg){
    console.log('match is draw with '+ mikeTeamAvg + ' Score');
}else if(johnTeamAvg > mikeTeamAvg && johnTeamAvg > maryTeamAvg){
    console.log('John Team is Win with : '+johnTeamAvg+' Score');
}else if(mikeTeamAvg > maryTeamAvg){
    console.log('mike Team is Win with : '+mikeTeamAvg+' Score');
}else{
    console.log('mary Team is Win with : '+maryTeamAvg+' Score');
}

if(johnTeamAvg == mikeTeamAvg == maryTeamAvg){
    console.log('match is draw with '+ mikeTeamAvg + ' Score');
} else if (johnTeamAvg == mikeTeamAvg){
    if(johnTeamAvg > maryTeamAvg){
        console.log("John and Mike Team win with same Score : "+johnTeamAvg);
    }else{
        console.log("Marry Team win with : "+maryTeamAvg);
    }
}else if(mikeTeamAvg == maryTeamAvg){
    if(johnTeamAvg > mikeTeamAvg){
        console.log("john Team is Win With : "+johnTeamAvg);
    }else{
        console.log("Mike and marry team is win with same score : "+maryTeamAvg);
    }
}else if(johnTeamAvg == maryTeamAvg)