function loadTable(){

    var custName = ['Nikhil','Rahul','John','Raj'];
    var age = [22,20,25,35]

    var ln = custName.length > age.length ? custName.length : age.length;

    var dataString = "<table border='1'><tr><th>Name</th><th>Age</th></tr>";

    for(var i=0;i<ln;i++){

        dataString+="<tr><td>"+custName[i]+"</td><td>"+age[i]+"</td></tr>";
    }
    dataString+="</tr></table>";
    document.getElementById("dataLoad").innerHTML = dataString;
    console.log(dataString);
    
}
