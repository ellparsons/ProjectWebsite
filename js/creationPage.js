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


function dropdownLicense(){
    let dropdown = document.getElementById("dropdownLicense");
    let contents="";
    let licenseList=["CBT","A1","A2","A"]
        for(i=0; i<licenseList.length; i++){
            contents+="<option value='"+ licenseList[i] +"'>"+ licenseList[i]+"</option>";
        }
    dropdown.innerHTML+=contents;
}