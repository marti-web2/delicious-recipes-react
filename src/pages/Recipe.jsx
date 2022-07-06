import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import React from 'react'


const Recipe = () => {
  let params = useParams()
  const [details, setDetails] = useState({}) //  const details = {}; function setDetails(data) { const details = da }
  const [activeTab, setActiveTab] = useState('ingredients')

  useEffect(() => {
    const fetchDetails = () => {
      const localStorageItem = localStorage.getItem(`details-${params.id}`)

      function isEmptyObject(obj) {
        // Loop through and check if a property exists within the object
        for (var property in obj) {
          if (obj.hasOwnProperty(property)) {
            // Property exists, object is not empty.
            return false
          }
        }
        // No properties were found, so return TRUE
        return true
      }

      /* Cache items on first pull and pull from cache on subsequent requests, so that we do not
        have to keep making requests from the API during development */
      !isEmptyObject(localStorageItem)
        ? setDetails(JSON.parse(localStorageItem))
        : (async () => {
            const data = await fetch(
              `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
            )
            const detailData = await data.json()

            /* in localStorage, we can only save Strings, so we're taking the array, converting into 
          a String and saving when we're pulling it back, we're parsing it back to the array from String */
            localStorage.setItem(
              `details-${params.id}`,
              JSON.stringify(detailData)
            )
            setDetails(detailData)
          })()
    }

    fetchDetails()
  }, [params.id])

  return (
    <DetailWrapper>
     <RecipeCard>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </RecipeCard>
      <Info>
        {/* Since inline html event requires the event to be global, as well as allows for potential confusion with
       JS onclick() method, inline event handling is avoided here. */}
        <Button
          className={activeTab === 'ingredients' ? 'active' : ''}
          onClick={() => setActiveTab('ingredients')}
        >
          Ingredients
        </Button>
        <Button
          className={activeTab === 'instructions' ? 'active' : ''}
          onClick={() => setActiveTab('instructions')}
        >
          Instructions
        </Button>
        {activeTab === `instructions` && Object.keys(details).length !== 0 && (
          <ol>
            {details.analyzedInstructions[0].steps.map(step => (
              <li key={step.number}>{step.step}</li>
            ))}
          </ol>
        )}
        {activeTab === `ingredients` && Object.keys(details).length !== 0 && (
          <ul>
            {/* add index to id to ensure that each child has a unique key */}
            {details.extendedIngredients.map((ingredient, i) => (
              <li key={`${ingredient.id}${i}`}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;

  .active {
    background: linear-gradient(35deg, #494949, #313133);
    color: white;
  }

  h2 {
    margin-bottom: 2rem;
  }

  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  ul {
    margin-top: 2rem;
  }
`

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-bottom: 2rem;
  margin-right: 2rem;
  font-weight: 600;
`

const Info = styled.div`
  margin-left: 10rem;
`

const RecipeCard = styled.div`  
  img {
    width: 31vw;
    border-radius: 2rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    padding: 1rem;
    color: #000;
  }
`

export default Recipe
