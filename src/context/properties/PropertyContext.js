import createDataContext from 'context/createDataContext';
import simplyrets from 'api/simplyrets';

const BASIC_AUTH = {
   username: 'simplyrets',
   password: 'simplyrets'
}

const propertiesReducer = (state, action) => {
   switch (action.type) {        
      case 'get_properties': 
         return { ...state, properties: action.payload }
      case 'get_favs':
         return {...state, favorites: action.payload}
      default:
         return state
   }
}

const getProperties = (dispatch) => {
   return async () => {
       try {
           const response = await simplyrets.get('/properties', {
               auth: BASIC_AUTH
           });
           
           dispatch({type:'get_properties', payload: response.data});
       } catch (err) {
           dispatch({ type: 'add_error', payload: 'Error fetching properties'})
       }
   }
}

const toggleFavorites = (dispatch) => {
   return async (id) => {
      let favsList = [];
      const localFavsJson = await localStorage.getItem("favs")
      const localFavsParsed = JSON.parse(localFavsJson)

      if (localFavsParsed && Array.isArray(localFavsParsed)) {
         if (localFavsParsed.includes(id)) {
            favsList = localFavsParsed.filter(item => item !== id)
         } else {
            localFavsParsed.push(id)
            favsList = localFavsParsed
         }
      } else {
         favsList.push(id)
      }
      
      localStorage.setItem("favs", JSON.stringify(favsList))

      dispatch({type:'get_favs', payload: favsList})
   }
}

const getFavorites = (dispatch) => {
   return async () => {
      let favsList = [];
      const localFavsJson = await localStorage.getItem("favs")
      const localFavsParsed = JSON.parse(localFavsJson)

      if (localFavsParsed && Array.isArray(localFavsParsed)) {
         favsList = JSON.parse(localFavsJson)
      } 
      
      dispatch({type:'get_favs', payload: favsList})
   }
}


export const { Provider, Context } = createDataContext(
   propertiesReducer,
   { getProperties, getFavorites, toggleFavorites},
   { properties: [], favorites: [] }
)