import React from 'react'
import { numberWithCommas, displayAddress, displayDate, calculateBaths } from '../../utils';
import './Property.css'

const PropertyListItemDetails = ({details, price, address, listedDate}) => {
   const {bedrooms, bathsFull, bathsHalf, area = 0} = details;
   const bathsTotal = calculateBaths(bathsFull, bathsHalf)

   return (
      <div data-testid="PropertyDetails" className="proterty-detail">
         <div className="details">
            {bedrooms && `${bedrooms} BR | `}
            {`${bathsTotal} Bath | `}
            {`${area} Sq Ft`}
         </div>
         {price &&
            <div className="price">
               {`$${numberWithCommas(price)}` }
            </div>
         }
         <div className="address">
            {displayAddress(address)}
         </div>
         <div className="listDate">
            {`Listed: ${displayDate(listedDate)}`}
         </div>       
      </div>
   )
}

export default PropertyListItemDetails