import axios from "axios";
import React, { useEffect, useState } from 'react';
import requests from '../Requests';


const Main = () => {
    const [movies, setMovies] = useState([]);

    // const movie = Math.floor(Math.random() * movies.length);

    useEffect(() => {
        axios.get(requests.fetchComedyMovies).then((response) => {
            setMovies(
                response.data.results[
                    Math.floor(Math.random() * response.data.results.length)
                ]
            )
        })
    }, []);

    function truncate(string, n) {
        return string?.length > n ?
        string.slice(0, n - 1) + "..." : string
    };

    
    console.log(movies)

    return (
        <div className="w-full h-[550px] text-white">
            <div className="w-full h-full relative">
                <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
                <img 
                    className="w-full h-full object-cover"
                    src={`https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`} 
                    alt={movies?.title} 
                />
                <div className="absolute w-full top-[20%] p-4 md:p-8">
                    <h1 className="text-3xl md:text-5xl font-bold">
                        {movies?.title}
                    </h1>
                    <div className="my-4">
                        <button className="border bg-gray-300 text-black border-gray-300 py-2 px-6 hover:bg-gray-100 transition-all">Play</button>
                        <button className="border ml-4 text-white border-gray-100 py-2 px-5 hover:bg-gray-100 hover:text-black transition-all">Watch Later</button>
                    </div>
                    <p className="text-xs text-gray-400">
                        Released: {movies?.release_date}
                    </p>
                    <p className="w-full max-w-[360px] md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] pt-4 leading-[1.3] h-[80px] text-gray-400">
                        {truncate(movies?.overview, 150)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main;