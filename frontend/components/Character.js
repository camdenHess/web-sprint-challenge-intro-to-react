import React, {useState, useEffect} from 'react'

function Character(props) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const {name, planet} = props
  const [showPlanet, setShowPlanet] = useState(false)

  return (
    <div className={'character-card'} onClick={() => setShowPlanet(!showPlanet)}>
      {/* Use the same markup with the same attributes as in the mock */}
      <h3 className={'character-name'}>{name}</h3>
      {showPlanet && 
      <p>
        {"Planet: "}
        <span className={'character-planet'}>{planet}</span>
      </p>}
    </div>
  )
}

export default Character
