import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


import { CuisineCard, Wrapper } from './shared/styled.jsx'

const Popular = () => {
  const [popular, setPopular] = useState([])

  useEffect(_ => {
    getPopular()
  }, [])

  const getPopular = () => {
    const localStorageItem = localStorage.getItem('popular')

    /* Cache items on first pull and pull from cache on subsequent requests, so that we do not
      have to keep making requests from the API during development*/
    localStorageItem
      ? setPopular(JSON.parse(localStorageItem))
      : (async () => {
          const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
          )
          const data = await api.json()

          /* in localStorage, we can only save Strings, so we're taking the array, converting into 
      a String and saving when we're pulling it back, we're parsing it back to the array from String */
          localStorage.setItem('popular', JSON.stringify(data.recipes))
          setPopular(data.recipes)
        })()
  }

  const popularRecipes = popular.map(recipe => (
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
        <h3>Popular Picks</h3>
        <Splide
          options={{
            arrows: false,
            drag: 'free',
            gap: '5rem',
            pagination: false,
            perPage: 4,
            breakpoints: {
              768: {
                perPage: 3,
                perMove: 1,
              },
            },
            speed: 25,
            waitForTransition: true,
            wheel: true
          }}
        >
          {popularRecipes}
        </Splide>
      </Wrapper>
    </div>
  )
}

export default Popular