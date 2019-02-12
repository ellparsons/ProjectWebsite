function loadingData(){
    let obj, dbParam, requestURL, request;
    obj ={table:"motorcycleDB", limit: 20};
    dbParam = JSON.stringify(obj);
    requestURL = "http://192.168.1.115:8090/api/get/all/motorcycles";
    request = new XMLHttpRequest();
    motorcycleDB = request.response;
    
    request.open("GET",requestURL);
    request.setRequestHeader('Content-type','application/json');
    request.setRequestHeader('Access-Control-Allow-Origin','*');
    request.responseType="json";
    request.send();
    request.onload=function(){
        motorcycleDB = request.response;
    }}

function createPeople(){
    let txt="";

    for(i=0; i<motorcycleDB.length;i++){
        txt+="<div class='col-lg-3 col-md-4 col-sm-6 portfolio-item'>";
        txt+="<div class='card h-100'>";
        txt+="<a href='#''><img class='card-img-top' src='./searchPageImages/"+ i +".png' alt=''></a>";
        txt+="<div class='card-body'></div>";
        txt+="<a href='motorcycleDetails.html?'>TEST</a>";
        txt+="</h4>";
        txt+="</div>";
        txt+="</div>";
        txt+="</div>";
    }
    document.getElementById("contentRow").innerHTML = txt;
}
