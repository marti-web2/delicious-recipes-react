import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { Grid, CuisineCard } from '../components/shared/styled.jsx'

const Searched = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([])
  let params = useParams()

  const getSearched = keyword => {
    const sessionStorageItem = sessionStorage.getItem(keyword)

    sessionStorageItem
      ? setSearchedRecipes(JSON.parse(sessionStorageItem))
      : (async () => {
          const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${keyword}`
          )
          const recipes = await data.json()

          /* in sessionStorage, we can only save Strings, so we're taking the array, converting into 
        a String and saving when we're pulling it back, we're parsing it back to the array from String */
          sessionStorage.setItem(keyword, JSON.stringify(recipes.results))
          setSearchedRecipes(recipes.results)
        })()
  }

  useEffect(() => {
    getSearched(params.searchTerm)
  }, [params.searchTerm])

  const recipeMatches = searchedRecipes.map(item => (
    <CuisineCard key={item.id}>
      <Link to={`/recipe/${item.id}`}>
        <img src={item.image} alt={item.title} />
        <h4>{item.title}</h4>
      </Link>
    </CuisineCard>
  ))

  return <Grid>{recipeMatches}</Grid>
}

export default Searched
