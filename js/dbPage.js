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

request.onload = function(){
    motorcycleDB = request.response;
    dataSpawn();
}

function dataSpawn(){
    let txt="";
    for(i=0; i<motorcycleDB.length; i++){
        txt+"<div class='row' id='contentRow'>"
        txt+="<div class='col-lg-3 col-md-4 col-sm-6 portfolio-item'>";
        txt+="<div class='card h-100'>";
        txt+="<a href='#''><img class='card-img-top' src='http://placehold.it/700x400' alt=''></a>";
        txt+="<div class='card-body'></div>";
        txt+="<a href='#'>" + motorcycleDB[i].model + "</a>";
        txt+="</h4>";
        txt+="</div>";
        txt+="</div>";
        txt+="</div>";
    }
    document.getElementById("contentRow").innerHTML = txt;
    console.log(motorcycleDB.length);
}

function dataSpawnResults(){
    let txt="";
    let searchInput=document.getElementById("searchText").value
    searchInput=searchInput.toUpperCase();
    for(i=0; i<motorcycleDB.length; i++){ 
        var upperMotorcycleSpace = motorcycleDB[i].model.toUpperCase();
        var upperMotorcycleNoSpace = upperMotorcycleSpace.replace(/\s/g,"");
        if(upperMotorcycleSpace.includes(searchInput)||upperMotorcycleNoSpace.includes(searchInput)){
        txt+"<div class='row' id='contentRow'>"
        txt+="<div class='col-lg-3 col-md-4 col-sm-6 portfolio-item'>";
        txt+="<div class='card h-100'>";
        txt+="<a href='#''><img class='card-img-top' src='http://placehold.it/700x400' alt=''></a>";
        txt+="<div class='card-body'></div>";
        txt+="<a href='portfolio-4-col'>" + motorcycleDB[i].model + "</a>";
        txt+="</h4>";
        txt+="</div>";
        txt+="</div>";
        txt+="</div>";
        }
    }
    document.getElementById("contentRow").innerHTML = txt;
}
