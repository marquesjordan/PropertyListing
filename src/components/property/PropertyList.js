import React, {useContext, useEffect} from 'react'
import PropertyListItem from './PropertyListItem';

import { Context as PropertyContext } from "context/properties/PropertyContext"
import './Property.css'

const PropertyList = () => {
   const {state, getProperties, getFavorites} = useContext(PropertyContext);

   useEffect(() => {
      function init() {
         getProperties()
         getFavorites()
      }
      init()
   }, [])

   return (
      <div className="container property">
         <div className="row">
            {state.properties.map(item => <PropertyListItem key={item.listingId} propertyData={item} />)}
         </div>
      </div>
   )
}

export default PropertyList