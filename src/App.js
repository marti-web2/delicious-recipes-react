import { BrowserRouter, Link } from "react-router-dom"
import Search from "./components/Search"
import styled from 'styled-components'
import { GiKnifeFork } from "react-icons/gi"

import Pages from "./pages/Pages"
import Category from "./components/Category"

const App = () => (
  <div className="App">
    <BrowserRouter>
    <Nav>
      <GiKnifeFork />
      <Logo to={"/"}>D3licious D1nner D1shes</Logo>
    </Nav>
    <Search />
      <Category />
      <Pages />
    </BrowserRouter>
  </div>
)

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
  color: black;
`

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 2rem;
  }
`

export default App