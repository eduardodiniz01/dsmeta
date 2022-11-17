import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return( 
        <header>
        <div className="edmeta-logo-container">
            <img src={logo} alt="EDMeta" />
            <h1>EDMeta</h1>
            <p>
              Desenvolvido por 
              <a href="https://www.instagram.com/edu_diniz2953"> Eduardo Diniz</a>
            </p>
        </div>
    </header>
    )
   }
   
   export default Header;