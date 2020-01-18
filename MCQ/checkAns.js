  
var ans = new Array('86','5','Primate','Bear','Pilcrow');
var mark=0;
function validAns(){

    for(var j=0;j<ans.length+1;j++){
        //var query = 'question'+[j+1]; 
        //console.log(query);
               
        var subAns = document.getElementsByName('question'+[j+1]);

        for(var i=0;i<subAns.length;i++){
            if(subAns[i].checked){
                if(subAns[i].value==ans[j]){
                    //console.log(subAns[i].value);
                    mark ++;
                    //console.log(mark);
                }       
            }
        }
    }
    
    document.getElementById("score").innerHTML = mark;
    
}