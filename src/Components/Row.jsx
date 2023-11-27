import axios from "axios";
import React, { useState, useEffect} from 'react';
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight} from "react-icons/md";

const Row = ({ rowID, title, fetchURL }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
    }, [fetchURL]);

    const slideLeft = () => {
        var slider = document.getElementById("slider" + rowID);
        slider.scrollLeft = slider.scrollLeft - 700;
    };

    const slideRight = () => {
        var slider = document.getElementById("slider" + rowID);
        slider.scrollLeft = slider.scrollLeft + 700;
    };

    return (
        <>
            <h2 className="text-white md:text-xl font-bold p-4">{title}</h2>
            <div className="flex relative items-center group">
                <MdChevronLeft 
                    size={40} 
                    className="bg-white rounded-full absolute top-[40%] left-1 z-[100] hover:scale-110 opacity-50 hover:opacity-100 transition-all cursor-pointer hidden group-hover:block"
                    onClick={slideLeft} 
                />
                <div 
                    id={'slider' + rowID}
                    className="h-full w-full overflow-x-scroll whitespace-nowrap scrollbar-hide scroll-smooth relative"
                >
                    {
                        movies?.map((movie, id) => (
                            <Movie key={id} movie={movie} />
                        ))
                    }
                </div>
                <MdChevronRight 
                    size={40} 
                    className="bg-white rounded-full absolute top-[40%] right-1 z-[100] hover:scale-110 opacity-50 hover:opacity-100 transition-all cursor-pointer hidden group-hover:block" 
                    onClick={slideRight}
                />
            </div>
        </>
    )
}

export default Row;