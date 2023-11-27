import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';

const Navbar = () => {

  const { user, logOut } = UserAuth();

  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch(error) {
      console.log(error)
    }
  };

  return (
    <div className="w-full text-white flex items-center justify-between p-6 z-[100] absolute">
      <Link to="/">
        <h1 className="text-red font-bold text-4xl cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      <div>
        {
          user?.email ? (
            <div className="flex justify-center items-center gap-x-2">
              <Link to="/account">
                <button className="text-white bg-transparent font-semibold pr-2">Account</button>
              </Link>
              <button className="bg-red text-white rounded px-6 py-2 font-semibold" onClick={handleLogOut}>
                Logout
              </button>
            </div>
          ) : (
            <div className="flex justify-center items-center gap-x-2">
              <Link to="/loginPage">
                <button className="text-white bg-transparent font-semibold pr-2">Sign In</button>
              </Link>
              <Link to="/signUpPage">
                <button className="bg-red text-white rounded px-6 py-2 font-semibold">Sing Up</button>
              </Link>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar