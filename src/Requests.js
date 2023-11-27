const API_KEY = "8d4e7ac44d990b44094a0797a0bccc16";

const requests = {
    fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchPopular: `https://api.themoviedb.org/3/movie/popular/?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTopRated: `https://api.themoviedb.org/3/movie.top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US&page=2`,
    fetchHorror: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=horror&page=1&include_ad`,
    fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
    
}

export default requests;