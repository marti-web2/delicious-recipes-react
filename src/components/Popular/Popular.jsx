import { useEffect, useState } from "react"

const Popular = () => {
  const [popular, setPopular] = useState([])

  useEffect(_ => {
    getPopular()
  },[])
  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    )
    const data = await api.json()
    setPopular(data.recipes)
  }

  return <div>Popular</div>
}

export default Popular