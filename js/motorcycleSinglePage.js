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
        pageId();
        imageSpawn();
        dataSpawn();
    }}

    function pageId(){
       let url = window.location.href;
       let urlId= url.split("?")[1];
       console.log(urlId);
       return (urlId);
    }

function imageSpawn(){
    let idRetrieve = pageId();
    console.log(idRetrieve);
    let image="";
        image+="<div class='col-md-8'>"
        image+="<img id='idImage' class='img-fluid' src='./images/"+idRetrieve+".png>"
        image+="</div>"
        console.log(idRetrieve);
 }

function dataSpawn(){
    let idRetrieve = pageId();
    for(i=0; i<motorcycleDB.length; i++){
        if (motorcycleDB[i].id == idRetrieve){
            let txt="";
            txt+"<div class='col-md-4>";
            txt+="<h3 class='my-3'>"+motorcycleDB[i].manufacturer+" "+motorcycleDB[i].model+"</h3>";
            txt+="<ul style='list-style-type:none;'>";
            txt+="<li>Model: "+motorcycleDB[i].model+"</li>";
            txt+="<li>Category: "+motorcycleDB[i].category+"</li>";
            txt+="<li>Displacement: "+motorcycleDB[i].displacement+"</li>";
            txt+="<li>Horsepower: "+motorcycleDB[i].horsepower+"</li>";
            txt+="<li>License: "+motorcycleDB[i].license+"</li>";
            txt+="<li>Price: £"+motorcycleDB[i].price+"</li>";
            txt+="</ul>";
            txt+="</div>";
        document.getElementById("contentContainer").innerHTML = txt;
        }
    }   
}
