import { motion } from 'framer-motion'

import Veggie from '../components/Veggie.jsx'
import Popular from '../components/Popular.jsx'

import React from 'react'

const Home = () => (
  <motion.div
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Veggie />
    <Popular />
  </motion.div>
)

export default Home
