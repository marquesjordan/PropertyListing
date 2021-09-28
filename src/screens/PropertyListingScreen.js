import React from 'react'
import Header from "components/header/Header"
import Screen from "components/screen/Screen"
import PropertyList
 from 'components/property/PropertyList'
const PropertyListingScreens = () => {
   return (
      <div>
         <Header title="Property Listing" />
         <Screen>
            <PropertyList />
         </Screen>
      </div>
   )
}

export default PropertyListingScreens