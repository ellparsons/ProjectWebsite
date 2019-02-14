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
        dropdownLicense();
    }}

function addText(id){
    let feedingElement = document.getElementById(id);
    let updatingElement = document.getElementById("new"+id);
    updatingElement.innerHTML = feedingElement.value;
}

function priceInput(){
var inputNumber = document.getElementById('motorcyclePrice');
inputNumber.onkeydown = function(e) {
    if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58) 
      || e.keyCode == 8)) {
        return false;
        }
    }
}

function addLicense(id){
    let feedingLicenseElement = document.getElementById(id);
    let updatingLicenseElement = document.getElementById("newmotorcycleLicense");
    updatingLicenseElement.innerHTML = feedingLicenseElement.value;
}
function dropdownLicense(){
    let dropdown = document.getElementById("dropdownLicense");
    let txt="";
    let licenseList=["CBT","A1","A2","A"]
        for(i=0; i<licenseList.length; i++){
            txt+="<option id="+licenseList[i]+" value='"+ licenseList[i] +"' onClick=" + addLicense + "(this.id)" + ">" + licenseList[i]+"</option>";
        }
    dropdown.innerHTML+=txt;
}

function createMotorcycle(){
    let motorMF=document.getElementById("motorcycleManufacturer").value;
    let motorMD=document.getElementById("motorcycleModel").value;
    let motorCT=document.getElementById("motorcycleCategory").value;
    let motorDP=document.getElementById("motorcycleDisplacement").value;
    let motorHP=document.getElementById("motorcycleHorsepower").value;
    let motorPC=document.getElementById("motorcyclePrice").value;
    let motorLC=document.getElementById("dropdownLicense").value;

    requestURL = "http://127.0.0.1:8090/api/create/motorcycle";
    request = new XMLHttpRequest();
    motorcycleDB = request.response;

    request.open("POST",requestURL);
    request.setRequestHeader('Content-type','application/json');
    request.setRequestHeader('Access-Control-Allow-Origin','*');
    request.responseType="json";


    jsonString = JSON.stringify(
        {
            "manufacturer":motorMF,
            "model":motorMD,
            "category":motorCT,
            "displacement":motorDP,
            "horsepower":motorHP,
            "price":motorPC,
            "license":motorLC
        }
    )
    request.send(jsonString);

    let updateText = document.getElementById("alertText");
    updateText.innerHTML+=("Motorcycle Created");

}

