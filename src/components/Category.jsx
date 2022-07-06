import { FaHamburger, FaPizzaSlice } from 'react-icons/fa'
import { GiChopsticks, GiNoodles } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { List } from './shared/styled.jsx'

const Category = () => (
  <List>
    <SLink to={'/cuisine/Italian'}>
      <FaPizzaSlice />
      <h4>Italian</h4>
    </SLink>
    <SLink to={'/cuisine/American'}>
      <FaHamburger />
      <h4>American</h4>
    </SLink>
    <SLink to={'/cuisine/Thai'}>
      <GiNoodles />
      <h4>Thai</h4>
    </SLink>
    <SLink to={'/cuisine/Chinese'}>
      <GiChopsticks />
      <h4>Chinese</h4>
    </SLink>
  </List>
)

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  margin-bottom: 10rem;
  @media screen and (max-width: 768px) { 
    margin-bottom: 3.5rem;
  }
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }

  &:active {
    background: linear-gradient(to right, #f27123, #e94059);

    svg {
      color: white;
    }

    h4 {
      color: white;
    }
  }
`

export default Category
