import { BrowserRouter, Route } from 'react-router-dom';
import WelcomeScreen from 'screens/WelcomeScreen';
import PropertyListingScreens from 'screens/PropertyListingScreen';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={WelcomeScreen} />
        <Route exact path="/listings" component={PropertyListingScreens} /> 
      </BrowserRouter>
    </div>
  );
}

export default App;
