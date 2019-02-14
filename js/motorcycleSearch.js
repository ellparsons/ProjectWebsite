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
    dataTable();
    dropdownManufacturer();
    dropdownCategory();
    dropdownLicense();
}}

function pageId(){
    let url = window.location.href;
    let urlId= url.split("?")[1];
    console.log(urlId);
    return (urlId);
 }

function dataTable(){

    let manufacturerPull=pageId();
    console.log(manufacturerPull);
    let txt="";
        for(i=0; i<motorcycleDB.length; i++){
            txt+="<div class='col-lg-3 col-md-4 col-sm-6 portfolio-item'>";
            txt+="<div class='card h-100'>";
            txt+="<a href='#''><img class='card-img-top' src='./searchPageImages/"+ motorcycleDB[i].id +".png'</a>";
            txt+="<div class='card-body'></div>";
            txt+="<a href='motorcycleDetails.html?"+ motorcycleDB[i].id + "'>" + motorcycleDB[i].manufacturer + " " + motorcycleDB[i].model + "</a>";
            txt+="</h4>";
            txt+="</div>";
            txt+="</div>";
            txt+="</div>";
        }
    document.getElementById("contentRow").innerHTML = txt;
}
    

function dropdownManufacturer(){
    let dropdown = document.getElementById("dropdownManufacturer");
    let contents="";
    let manufacturer="";
    contents+="<option value=''>All</options>"
        for(i=0; i<motorcycleDB.length; i++){
            if(manufacturer.includes(motorcycleDB[i].manufacturer)==false){
                contents+="<option value='"+ motorcycleDB[i].manufacturer +"'>"+ motorcycleDB[i].manufacturer+"</option>";
                manufacturer += ","+motorcycleDB[i].manufacturer;
            }
        }
    dropdown.innerHTML+=contents;
}

function dropdownCategory(){
    let dropdown = document.getElementById("dropdownCategory");
    let contents="";
    let category="";
    contents+="<option value=''>All</options>"
        for(i=0; i<motorcycleDB.length; i++){
            if (category.includes(motorcycleDB[i].category)==false){
            contents+="<option value='"+ motorcycleDB[i].category +"'>"+ motorcycleDB[i].category+"</option>";
            category += ","+motorcycleDB[i].category;
            }
        }
    dropdown.innerHTML+=contents;
}

function dropdownLicense(){
    let dropdown = document.getElementById("dropdownLicense");
    let contents="";
    let license="";
    contents+="<option value='AA2A1CBT'>All</options>"
        for(i=0; i<motorcycleDB.length; i++){
            if (license.includes(motorcycleDB[i].license)==false){
            contents+="<option value='"+ motorcycleDB[i].license +"'>"+ motorcycleDB[i].license+"</option>";
            license += ","+motorcycleDB[i].license;
            }
        }
    dropdown.innerHTML+=contents;
}

function returnResults(){
    let txt="";
    let searchInput=document.getElementById("searchText").value
    let manufacturer=document.getElementById("dropdownManufacturer").value;
    let category=document.getElementById("dropdownCategory").value;
    let license=document.getElementById("dropdownLicense").value;

    if(license === "A"){
        license=["A","A2","A1","CBT"];
    }
    else if (license === "A2"){
        license=["A2","A1","CBT"];
    }
    else if(license === "A1"){
        license=["A1","CBT"]
    }

    searchInput=searchInput.toUpperCase(); 

    for(i=0; i<motorcycleDB.length; i++){ 
        
        let upperMotorcycleSpace = motorcycleDB[i].model.toUpperCase();
        let upperMotorcycleNoSpace = upperMotorcycleSpace.replace(/\s/g,"");

        if(motorcycleDB[i].manufacturer.includes(manufacturer)&&
        (motorcycleDB[i].category.includes(category)&&
        (license.includes(motorcycleDB[i].license)&&
        ((upperMotorcycleSpace.includes(searchInput)||
        upperMotorcycleNoSpace.includes(searchInput)))))){   
            txt+="<div class='col-lg-3 col-md-4 col-sm-6 portfolio-item'>";
            txt+="<div class='card h-100'>";
            txt+="<a href='#''><img class='card-img-top' src='./searchPageImages/"+ motorcycleDB[i].id +".png'</a>";
            txt+="<div class='card-body'></div>";
            txt+="<a class='textStyling''href='motorcycleDetails.html?" + motorcycleDB[i].id + "'>" + motorcycleDB[i].manufacturer + " " + motorcycleDB[i].model + "</a>";
            txt+="</h4>";
            txt+="</div>";
            txt+="</div>";
            txt+="</div>";
        }
    }
    document.getElementById("contentRow").innerHTML = txt;
}

// /searchPageImages/"+ i +".png