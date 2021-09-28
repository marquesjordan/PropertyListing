import React from 'react'
import PropertyListItemDetails from './PropertyListItemDetails';
import PropertyFav from './PropertyFav';

import './Property.css'

const PropertyListItem = ({propertyData}) => {
   const {photos, property, listPrice, address, listDate, listingId} = propertyData;
   const mainPhoto = photos && photos[0] ? photos[0] : '';

   return (
      <div data-testid="PropertyListItem" className="col-md-4 col-sm-12 property-list-item">
         <div className="card">
            <img src={mainPhoto} className="card-img-top card-image" alt="..." />
            <div className="card-body">
               <PropertyListItemDetails 
                  details={property} 
                  price={listPrice} 
                  address={address}
                  listedDate={listDate} 
               />
            </div>
         </div>
         <PropertyFav id={listingId} />
      </div>
   )
}

export default PropertyListItem