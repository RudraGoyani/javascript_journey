document.getElementById("search-btn").addEventListener("click", function () {
    const name = document.getElementById("movie-input");
    if (name.value.trim() != "") {
        getMovieData(name.value);
    }
})

async function getMovieData(name) {
    try {
        const moviesResponse = await fetch(`https://api.tvmaze.com/search/shows?q=${name}`)
        if (!moviesResponse.ok) { throw ("the movie name is not found") }
        const moviesData = await moviesResponse.json();
        console.log(moviesData);

        let movies = [];
        moviesData.map(movieData => {
            let nameCheck = (movieData.show.name).toLocalUpperCase() === name.toLocalUpperCase();
            console.log(nameCheck)
            nameCheck && movieData.show.type === "Scripted" ? movies.push(movieData) : true;
        });
        console.log(movies);

    } catch (error) {
        console.log(error);
    }
}