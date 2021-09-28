import './Header.css'

const Header = ({title}) => {
   return (
      <div data-testid="Header" className="header-container">
         <div className="container">
            <h1 className="header-text">{title}</h1>
         </div>
      </div>
   )
}

export default Header