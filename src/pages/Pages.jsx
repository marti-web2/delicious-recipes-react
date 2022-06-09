import React from 'react'
import { Route, Routes } from "react-router-dom"

import Home from './Home'
import Cuisine from "./Cuisine"

const Pages = () => (
  
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/cuisine/:category"} element={<Cuisine />} />
    </Routes>
 

)

export default Pages