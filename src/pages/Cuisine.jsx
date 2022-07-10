import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '@splidejs/splide/dist/css/splide.min.css'

import { Grid, CuisineCard } from '../components/shared/styled.jsx'

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([])
  let params = useParams()

  useEffect(
    _ => {
      getCuisine(params.category)
    },
    [params.category]
  )

  const getCuisine = name => {
    const sessionStorageItem = sessionStorage.getItem(`${name} cuisine`)

    sessionStorageItem
      ? setCuisine(JSON.parse(sessionStorageItem))
      : (async () => {
          const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
          )
          const recipes = await data.json()

          /* in sessionStorage, we can only save Strings, so we're taking the array, converting into 
        a String and saving when we're pulling it back, we're parsing it back to the array from String */
          sessionStorage.setItem(
            `${name} cuisine`,
            JSON.stringify(recipes.results)
          )
          setCuisine(recipes.results)
        })()
  }

  const cuisineClassification = cuisine.map(item => (
    <CuisineCard key={item.id}>
      <Link to={`/recipe/${item.id}`}>
        <img src={item.image} alt={item.title} />
        <h4>{item.title}</h4>
      </Link>
    </CuisineCard>
  ))

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisineClassification}
    </Grid>
  )
}

export default Cuisine
