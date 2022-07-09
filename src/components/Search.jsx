import styled from 'styled-components'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Search = () => {
  const [input, setInput] = useState('')
  const navigate = useNavigate()

  const submitHandler = e => {
    e.preventDefault()
    navigate(`/searched/${input}`)
  }

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input
          onChange={e => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
  margin: 0rem 25%;

  @media (max-width: 480px) { 
    margin: 0rem 5%;
  }

  div {
    width: 100%;
    height: 3vh;
    position: relative;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313133);
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
    height: 100%;
    padding-left: 5rem;
    
    font-size: 1.5vw;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
    font-size: 1.05vh;
  }
`

export default Search
