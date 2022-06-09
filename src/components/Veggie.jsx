import { useEffect, useState } from "react"
import { Wrapper, Card, Gradient } from "./shared/styled"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"

const Veggie = () => {
    const [veggie, setVeggie] = useState([])

    useEffect(_ => {
        getVeggie()
    }, [])

    const getVeggie = () => {
        const localStorageItem = localStorage.getItem('veggie')

        /* Cache items on first pull and pull from cache on subsequent requests, so that we do not
          have to keep making requests from the API during development*/
        localStorageItem ? setVeggie(JSON.parse(localStorageItem)) : (async () => {
            const api = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
            )
            const data = await api.json()

            /* in localStorage, we can only save Strings, so we're taking the array, converting into 
              a String and saving when we're pulling it back, we're parsing it back to the array from String */
            localStorage.setItem('veggie', JSON.stringify(data.recipes))
            setVeggie(data.recipes)
        })()
    }

    const veggieRecipes = veggie.map((recipe) => (
        <SplideSlide key={recipe.id}>
            <Card>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
                <Gradient />
            </Card>
        </SplideSlide>
    ))

    return (
        <div>
            <Wrapper>
                <h3>Vegetarian Cuisine</h3>
                <Splide
                    options={{
                        arrows: false,
                        drag: "free",
                        gap: "5rem",
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