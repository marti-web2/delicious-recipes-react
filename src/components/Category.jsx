import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import styled from 'styled-components'
import { List } from './shared/styled'
import { NavLink } from 'react-router-dom'

const Category = () => (
  <List>
    <div>
      <FaPizzaSlice />
      <h4>Italian</h4>
    </div>
    <div>
      <FaHamburger />
      <h4>American</h4>
    </div>
    <div>
      <GiNoodles />
      <h4>Thai</h4>
    </div>
    <div>
      <GiChopsticks />
      <h4>Chinese</h4>
    </div>
  </List>
)

export default Category