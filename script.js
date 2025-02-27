function getAPIData(){

    var input =  document.getElementById("search")
    var request = new XMLHttpRequest()

    if (input.value){
    request.open("get","https://restcountries.com/v3.1/name/" + input.value)
    }
    else {
        request.open("get","https://restcountries.com/v3.1/name/bharat")
    }

    input.value = ""
    request.send()



    request.addEventListener("load",()=>{
        let data =  JSON.parse(request.responseText)[0]
        document.getElementById("name").innerHTML = data.name.official
        document.getElementById("capital").innerHTML = data.capital
        document.getElementById("flags").src = data.flags.png
        document.getElementById("area").innerHTML = data.area
        document.getElementById("population").innerHTML = data.population
        document.getElementById("region").innerHTML = data.region
        document.getElementById("subregion").innerHTML = data.subregion
        document.getElementById("continents").innerHTML = data.continents
        document.getElementById("borders").innerHTML = data.borders
        document.getElementById("timezones").innerHTML = data.timezones
        document.getElementById("landlocked").innerHTML = data.landlocked
        document.getElementById("unMember").innerHTML = data.unMember
        document.getElementById("independent").innerHTML = data.independent
        document.getElementById("maps").href = data.maps.googleMaps
 })
}

getAPIData()