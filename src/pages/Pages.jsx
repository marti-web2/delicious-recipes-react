import React from 'react'
import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import Home from './Home.jsx'
import Cuisine from "./Cuisine.jsx"
import Searched from './Searched.jsx'
import Recipe from './Recipe.jsx'

const Pages = () => {
 const location = useLocation()

  return (
  <AnimatePresence exitBeforeEnter>
    <Routes location={location} key={location.pathname}>
      <Route path={"/"} element={<Home />} />
      <Route path={"/cuisine/:category"} element={<Cuisine />} />
      <Route path={"/searched/:searchTerm"} element={<Searched />} />
      <Route path={"/recipe/:id"} element={<Recipe />} />
    </Routes>
  </AnimatePresence>
  )
}

export default Pages