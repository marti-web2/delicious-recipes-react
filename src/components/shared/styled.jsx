import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled.div`
  margin: 4rem 0;
`

export const Gradient = styled.div`
  z-index: 3;
  postion: absoulute;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`

export const List = styled.div`
  display: flex;
  justify-content: center;
  marigin: 2rem 0rem;
`

export const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25vw, 1fr));
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  grid-gap: 3rem;
`

export const CuisineCard = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }

  h4 {
    padding: 1rem;
    color: #000;
  }
`
