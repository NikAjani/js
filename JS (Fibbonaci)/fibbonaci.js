var n = prompt("Enter Value Of N : ");
var first=0,second=1,ans=0;

if(n===0)
    console.log(1);
else{
    for(var i=0;i<=n;i++){
        console.log(ans);
        ans = first + second;
        first = second;
        second = ans;     
    }    
}