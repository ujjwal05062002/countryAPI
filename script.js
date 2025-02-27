async function getAPIData() {
  var input = document.getElementById("search");
  var name = "";
  if (input.value) {
    name = input.value;
  } else {
    name = "bharat";
  }
  try{
    var response = await fetch("https://restcountries.com/v3.1/name/" + name)
  response = await response.json()
         data = response[0];
        document.getElementById("name").innerHTML = data.name.official;
        document.getElementById("capital").innerHTML = data.capital;
        document.getElementById("flags").src = data.flags.png;
        document.getElementById("area").innerHTML = data.area;
        document.getElementById("population").innerHTML = data.population;
        document.getElementById("region").innerHTML = data.region;
        document.getElementById("subregion").innerHTML = data.subregion;
        document.getElementById("continents").innerHTML = data.continents;
        document.getElementById("borders").innerHTML = data.borders;
        document.getElementById("timezones").innerHTML = data.timezones;
        document.getElementById("landlocked").innerHTML = data.landlocked;
        document.getElementById("unMember").innerHTML = data.unMember;
        document.getElementById("independent").innerHTML = data.independent;
        document.getElementById("maps").href = data.maps.googleMaps;
  }
  catch (error){
    alert("Invalid Country Name");
  }
}

getAPIData();
