import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image1 from "../assets/netflix_login_image.png";
import { UserAuth } from '../Context/AuthContext';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberPassword: false
  });

  const { user, signUp } = UserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signUp(formData.email, formData.password);
      navigate("/");
    } catch(error) {
      console.log(error)
    }
  };

  const handleChange = (event) => {
    const { type, name, value, checked} = event.target;
    setFormData(prevData => {
      return {
        ...prevData,
        [name] : type === "checkbox" ? checked : value
      }
    })
  };
  
  return (
    <>
      <div className="w-full h-screen relative">
        <img 
          src={image1} alt="" 
          className="hidden sm:block absolute w-full h-full object-cover"
        />
        <div className="fixed bg-black/60 w-full h-screen top-0 left-0"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[500px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-4xl font-bold">Sign Up</h1>
              <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  autoComplete="email"
                  className="w-full p-3 my-2 bg-gray-700 rounded outline-none border-none text-black placeholder:text-gray-100" 
                  value={formData.email}
                  onChange={handleChange}
                />
                <input 
                  type="password" 
                  name="password"
                  placeholder="Password"
                  autoComplete="password"
                  className="w-full p-3 my-2 bg-gray-700 rounded outline-none border-none text-black placeholder:text-gray-100"
                  value={formData.password}
                  onChange={handleChange}
                />

                <button className="w-full bg-red p-3 my-6 rounded cursor-pointer font-bold">Sign Up</button>

                <div className="flex items-center justify-between text-gray-600 text-sm">
                  <p className="flex items-center">
                    <input 
                      type="checkbox"
                      name="rememberPassword" 
                      className="mr-2"
                      checked={formData.rememberPassword}
                      onChange={handleChange}
                    />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-600">Already subscribed to Netflix? </span>
                  <Link to="/loginPage">Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUpPage