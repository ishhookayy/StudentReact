import React from 'react'
import ReactDOM from 'react-dom/client'
// import Garage from './components/Garage'
import './index.css'
import FavouriteColor from './components/FavouriteColor'
import Cars from './components/Cars'
import List from './components/List'
import Student from './components/Student'



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <FavouriteColor />
    <Cars />
    <List /> */}
    <Student/>
  </React.StrictMode>
);
