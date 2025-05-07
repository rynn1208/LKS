import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import MenuExplore from '../../components/MenuExplore/MenuExplore'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Home = () => {

  const [category,setCategory] = useState("All")

  return (
    <div>
        <Header/>
        <MenuExplore category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
    </div>
  )
}

export default Home