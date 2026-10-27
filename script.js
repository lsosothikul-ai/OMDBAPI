

async function getMovies() {
    try {
        // 1. Get the search term from the search box, 
        //          send a request to the ombd (USING YOUR API KEY)
        //          decode the response as JSON
        
        const title = document.getElementById("search").value;
        const url = "https://www.omdbapi.com/?s=" + title + "&apikey=feeaed3f";
        const movieHolder = document.getElementById("movieHolder");
        const headers = new Headers();
        headers.append("Accept", "application/json");
        const response = await fetch (url, {headers:headers})
        const json = await response.json();
        console.log(json);
        for (movie of json.Search) {
            //  Create a div to hold each image and title 
            //  Give the div the css class of CARD
            

            // Create an image element
            //      point it to the image from this movie  
            

            // Create a CONTAINER div to hold the title and year.
            // Give the CONTAINER div the style of container


            // Add the CONTAINER to the CARD
            // Add all the elements to the movieHolder element
            const divElement = document.createElement("div");
            divElement.classList.add("card");
            const image = document.createElement("img");
            image.classList.add = "img";
            image.src = movie.Poster;
            
            const container = document.createElement("div");
            container.className = "container"


            const title = document.createElement("h2")

            const year = document.createElement("h3")

            title.textContent = movie.Title;
            year.textContent = movie.Year;
            container.appendChild(title)
            container.appendChild(year)
            image.className = "img";
            divElement.appendChild(container)
            divElement.appendChild(image)
            movieHolder.appendChild(divElement);
        }


    }
    catch (error) {
        console.log(error)
    }
}