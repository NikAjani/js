var submittedData = localStorage.getItem('submittedData')?JSON.parse(localStorage.getItem('submittedData')):[];
var tableHead = ['ID','Fist Name', 'Maths', 'English','AVG', 'Passing Year','Created Date'];

var studentObject = function(id,firstName,maths,eng,avg,passingYear,createdDate){
    this.id = id,
    this.firstName = firstName,
    this.maths = maths,
    this.eng = eng,
    this.avg = avg,
    this.passingYear = passingYear,
    this.createdDate = createdDate
};

// on page load Display Data
(function(){
    var studentTable = document.createElement('table');
    studentTable.setAttribute('id', 'studentData');
    studentTable.setAttribute('border','1');

    var tr = studentTable.insertRow(-1);

    for (var i = 0; i < tableHead.length; i++) {
        var th = document.createElement('th');
        th.innerHTML = tableHead[i];
        tr.appendChild(th);
    }
    
    var tempfetchData = JSON.parse(localStorage.getItem('submittedData'));
    console.log(tempfetchData);
    if(tempfetchData){
        var k = 0;
        for(var j=0;j<tempfetchData.length;j++){
            
            var noOfRows = studentTable.rows.length;
            console.log(noOfRows);
            var tr = studentTable.insertRow(noOfRows);
            tr = studentTable.insertRow(noOfRows);
            
            for(var i=0; i < tableHead.length;i++){
                var td = document.createElement('td');
                td = tr.insertCell(i);
                if(i==0) td.innerHTML = tempfetchData[j].id;
                else if(i==1) td.innerHTML = tempfetchData[j].firstName;
                else if(i==2) td.innerHTML = tempfetchData[j].maths;
                else if(i==3) td.innerHTML = tempfetchData[j].eng;
                else if(i==4) td.innerHTML = tempfetchData[j].avg;
                else if(i==5) td.innerHTML = tempfetchData[j].passingYear;
                else if(i==6) td.innerHTML = tempfetchData[j].createdDate;
                k++;
            }
        }
    }
    
    var div = document.getElementById('fetchData');
    div.appendChild(studentTable);
})();

function submitData(){
    var firstName = document.getElementById('firstName').value;
    var maths = parseInt(document.getElementById('maths').value);
    var eng = parseInt(document.getElementById('eng').value);
    var passingYear = parseInt(document.getElementById('passingYear').value);
    
    if(firstName == ''){
        alert('Please Enter First Name');
    }else if(maths == NaN || maths < 0 || maths > 100){
        alert('please Enter valid Mark for Maths Subject');
    }else if(eng == NaN || eng < 0 || eng > 100){
        alert('Please Enter valid Mark For English Subject');
    }else if(passingYear == NaN){
        alert('Please Enter Passing Year');
    }else{
        var id;
        if(localStorage.getItem('submittedData')){
            id = submittedData.length + 1;
        }else{
            id = 1;
        }
        
        createdDate = new Intl.DateTimeFormat('ID').format(Date.now());
        avg = (maths+eng)/2;
        var student = new studentObject(id,firstName,maths,eng,avg,passingYear,createdDate);
        
        submittedData.push(student);
        localStorage.setItem('submittedData',JSON.stringify(submittedData));
        location.reload();
    }
}
