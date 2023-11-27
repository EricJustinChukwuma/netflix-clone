import React, { useState, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight} from "react-icons/md";
import { UserAuth } from '../Context/AuthContext';
import { db } from '../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { AiOutlineClose } from "react-icons/ai"


const SavedShows = () => {

    const [movies, setMovies] = useState([]);
    const { user } = UserAuth();

    const slideLeft = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 700;
    };

    const slideRight = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 700;
    };

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`, (doc) => {
            setMovies(doc.data()?.savedShows)
        }))
    }, [user?.email]);

    const movieRef = doc(db, 'users', `${user?.email}`);

    const deleteShow = async (passedID) => {
        try {
            const result = movies.filter((movie) => movie.id !== passedID);
            await updateDoc(movieRef, {
                savedShows: result
            })
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <>
            <h2 className="text-white md:text-xl font-bold p-4">My Shows</h2>
            <div className="flex relative items-center group">
                <MdChevronLeft 
                    size={40} 
                    className="bg-white rounded-full absolute top-[40%] left-1 z-[100] hover:scale-110 opacity-50 hover:opacity-100 transition-all cursor-pointer hidden group-hover:block"
                    onClick={slideLeft} 
                />
                <div 
                    id={'slider'}
                    className="h-full w-full overflow-x-scroll whitespace-nowrap scrollbar-hide scroll-smooth relative"
                >
                    {
                        movies?.map((movie, id) => (
                            <div key={id} className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
                                <img 
                                    className="w-full h-auto block"
                                    src={`https://image.tmdb.org/t/p/w500/${movie?.img}`} 
                                    alt={movie?.title} 
                                />
                                <div className="w-full h-full absolute top-0 left-0 hover:bg-black/80 opacity-0 hover:opacity-100">
                                    <p className="whitespace-normal text-xs font-bold text-white md:text-sm flex justify-center items-center text-center h-full">{movie?.title}</p>
                                    <p onClick={()=> deleteShow(movie.id)} className="absolute text-gray-300 top-4 right-4">
                                        <AiOutlineClose />
                                    </p>
                                </div>
                            </div>
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

export default SavedShows