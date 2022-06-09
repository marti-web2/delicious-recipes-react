import React from "react"
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import "@splidejs/splide/dist/css/splide.min.css"

import { Grid, CuisineCard } from "../components/shared/styled"


const Cuisine = () => {
  const [cuisine, setCuisine] = useState([])
  let params = useParams()

  useEffect(_ => {
    getCuisine(params.category)
  }, [params.category])

  const getCuisine = (name) => {
    const localStorageItem = localStorage.getItem(`${name} cuisine`)
    
    /* Cache items on first pull and pull from cache on subsequent requests, so that we do not
      have to keep making requests from the API during development */
    localStorageItem ? setCuisine(JSON.parse(localStorageItem)) : (async () => {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
      )
      const recipes = await data.json()

      /* in localStorage, we can only save Strings, so we're taking the array, converting into 
        a String and saving when we're pulling it back, we're parsing it back to the array from String */
      localStorage.setItem(`${name} cuisine`, JSON.stringify(recipes.results))
      setCuisine(recipes.results)
    })()
  }

  const cuisineClassification = cuisine.map((item) => (
    <CuisineCard key={item.id}>
      <img src={item.image} alt={item.title} />
      <h4>{item.title}</h4>
    </CuisineCard>
  ))
  
  return (
  <Grid>
    {cuisineClassification}
  </Grid>
)
  }

export default Cuisine