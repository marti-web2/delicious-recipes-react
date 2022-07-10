import { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { Link } from 'react-router-dom'

import { CuisineCard, Wrapper } from './shared/styled.jsx'

const Veggie = () => {
  const [veggie, setVeggie] = useState([])

  useEffect(_ => {
    getVeggie()
  }, [])

  const getVeggie = () => {
    const sessionStorageItem = sessionStorage.getItem('veggie')

    sessionStorageItem
      ? setVeggie(JSON.parse(sessionStorageItem))
      : (async () => {
          const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
          )
          const data = await api.json()

          /* in sessionStorage, we can only save Strings, so we're taking the array, converting into 
            a String and saving when we're pulling it back, we're parsing it back to the array from String */
          sessionStorage.setItem('veggie', JSON.stringify(data.recipes))
          setVeggie(data.recipes)
        })()
  }

  const veggieRecipes = veggie.map(recipe => (
    <SplideSlide key={recipe.id}>
      <CuisineCard key={recipe.id}>
        <Link to={`/recipe/${recipe.id}`}>
          <img src={recipe.image} alt={recipe.title} />
          <h4>{recipe.title}</h4>
        </Link>
      </CuisineCard>
    </SplideSlide>
  ))

  return (
    <div>
      <Wrapper>
        <h3>Vegetarian Cuisine</h3>
        <Splide
          options={{
            arrows: false,
            drag: 'free',
            gap: '5rem',
            pagination: false,
            perPage: 3,
            speed: 25,
            waitForTransition: true,
            wheel: true
          }}
        >
          {veggieRecipes}
        </Splide>
      </Wrapper>
    </div>
  )
}

export default Veggie
