import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import styled from 'styled-components'
import { List } from './shared/styled'
import { NavLink } from 'react-router-dom'

const Category = () => (
  <List>
    <SLink to={"/cuisine/Italian"}>
      <FaPizzaSlice />
      <h4>Italian</h4>
    </SLink>
    <SLink to={"/cuisine/American"}>
      <FaHamburger />
      <h4>American</h4>
    </SLink>
    <SLink to={"/cuisine/Thai"}>
      <GiNoodles />
      <h4>Thai</h4>
    </SLink>
    <SLink to={"/cuisine/Chinese"}>
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

  svg{
    color: white;
    font-size: 1.5rem;
  }

  &:active {
    background: linear-gradient(to right, #f27123, #e94059);

    svg{
      color: white;
    }

    h4{
      color: white;
    }
  }
`

export default Category