async function getJoke() {
    try {

        const characterName = document.getElementById("characterName").value

        const url = "https://api.disneyapi.dev/character?name="+characterName;
        const headers = new Headers();
        headers.append("Accept", "application/json");
        const response = await fetch (url, {headers:headers})
        const json = await response.json();
        console.log(json);
        const jokeHolder = document.getElementById("jokeHolder")
        jokeHolder.src = json.data[0].imageUrl
    }
    catch(error){
        console.log(error);
    }
    
}
function outputForm(event) {
        event.preventDefault();
        const disney = document.getElementById("disney").value;
      }