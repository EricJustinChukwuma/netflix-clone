import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../Context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc} from "firebase/firestore";

const Movie = ({ movie }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);

  const { user } = UserAuth();

  const movieID = doc(db, 'users', `${user?.email}`);

  const saveShow = async () => {
    if(user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id : movie.id,
          title: movie.title,
          img: movie.backdrop_path
        })
      })
    } else {
      alert("Please Log In To Save A Movie")
    }
  };

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img 
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`} 
        alt={movie?.title} 
      />
      <div className="w-full h-full absolute top-0 left-0 hover:bg-black/80 opacity-0 hover:opacity-100">
        <p className="whitespace-normal text-xs font-bold text-white md:text-sm flex justify-center items-center text-center h-full">{movie?.title}</p>
        <p 
          className="absolute top-4 left-4 z-[100] text-white"
          // onClick={() => handleClick(movie.id)}
          onClick={saveShow}
        >
          {
            like ? <FaHeart size={20} /> : <FaRegHeart size={20} />
          }
        </p>
      </div>
    </div>
  )
}

export default Movie;