let obj, dbParam, requestURL, request;
obj ={table:"motorcycleDB", limit: 1};
dbParam = JSON.stringify(obj);
requestURL = "http://192.168.1.115:8090/api/get/all/motorcycles";
request = new XMLHttpRequest();
motorcycleDB = request.response;

request.open("GET",requestURL);
request.setRequestHeader('Content-type','application/json');
request.setRequestHeader('Access-Control-Allow-Origin','*');
request.responseType="json";
request.send();

request.onload = function(){
    motorcycleDB = request.response;
    dataSpawn();
    // imageSpawn();
}

function getUrlID(id) {
    var url = window.location.href;
    var chunk = url.split("motorcycleid=")[1];
    var id = chunk.replace(/.html/g,"");
    return id;
} 

// function imageSpawn(){
//     idRetrieve = getUrlID();
//     let image="";
//         image+="<div class='col-md-8'>"
//         image+="<img id='idImage' class='img-fluid' src='./images/"+idRetrieve+".png>"
//         image+="</div>"
//         console.log(idRetrieve);
//  }

function dataSpawn(){
    idRetrieve = getUrlID();
    let txt="";
        txt+"<div class='col-md-4>";
        txt+="<h3 class='my-3'>"+motorcycleDB[idRetrieve].manufacturer+" "+motorcycleDB[idRetrieve].model+"</h3>";
        txt+="<ul style='list-style-type:none;'>";
        txt+="<li>Model: "+motorcycleDB[idRetrieve].model+"</li>";
        txt+="<li>Category: "+motorcycleDB[idRetrieve].category+"</li>";
        txt+="<li>Displacement: "+motorcycleDB[idRetrieve].displacement+"</li>";
        txt+="<li>Horsepower: "+motorcycleDB[idRetrieve].horsepower+"</li>";
        txt+="<li>License: "+motorcycleDB[idRetrieve].license+"</li>";
        txt+="<li>Price: £"+motorcycleDB[idRetrieve].price+"</li>";
        txt+="</ul>";
        txt+="</div>";
        document.getElementById("contentContainer").innerHTML = txt;
}
