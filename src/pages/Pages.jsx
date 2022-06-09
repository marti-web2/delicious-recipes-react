import React from 'react'
import { Route, Routes } from "react-router-dom"


import Home from './Home'
import Cuisine from "./Cuisine"
import Searched from './Searched'

const Pages = () => (
  
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/cuisine/:category"} element={<Cuisine />} />
      <Route path={"/searched/:searchTerm"} element={<Searched />} />
    </Routes>
 

)

export default Pages