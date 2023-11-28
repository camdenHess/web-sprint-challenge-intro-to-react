import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'
let resA = axios.get(urlPeople)
let resB = axios.get(urlPlanets)

Promise.all([resA, resB])
  .then(res => {
    let peopleData = res[0].data
    let planetData = res[1].data
    let planetArray = []
    let characterArray = []

    planetData.forEach(p => {
      planetArray.push(p.id)
    })

    peopleData.forEach(per => {
      let homeIdx = planetArray.indexOf(per.homeworld)
      let characterObj = {...per, homeworld: planetData[homeIdx]}
      characterArray.push(characterObj)
    })
    console.log(characterArray)

  })

function App() {
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
