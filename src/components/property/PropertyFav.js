import { useEffect, useState, useContext, useCallback } from 'react';
import heartFill from '../../assets/heart-fill.svg';
import heartStroke from '../../assets/heart-stroke.svg';
import './Property.css'

import { Context as PropertyContext } from "context/properties/PropertyContext"

const PropertyFav = ({id}) => {
   const {state, toggleFavorites} = useContext(PropertyContext);
   const [fav, setFav] = useState(false)

   useEffect(() => {
      function handleSetFav(id) {
         setFav(state.favorites.includes(id))
      }
      handleSetFav(id)
   }, [state.favorites, id])

   const handleClick = useCallback(() => {
      toggleFavorites(id)
   }, [id, toggleFavorites])

   return (
      <button className="favorite" onClick={handleClick}>
         {fav ? (
            <img height="40px" src={heartFill} className="App-logo" alt="favorite icon" />) : (
            <img height="40px" src={heartStroke} className="App-logo" alt="favorite icon" />
         )}
      </button>
   )
}

export default PropertyFav