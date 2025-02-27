function getAPIData(){
    var request = new XMLHttpRequest()
    request.open("get","https://restcountries.com/v3.1/name/bharat")
    request.send()

    request.addEventListener("load",()=>{
        console.log(request.responseText);
        
    })
}