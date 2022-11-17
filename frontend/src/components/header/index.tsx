import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return( 
        <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="MetaDados" />
            <h1>Meta Dados</h1>
            <p>
              Desenvolvido por 
              <a href="https://www.instagram.com/edu_diniz2953"> Eduardo Diniz</a>
            </p>
        </div>
    </header>
    )
   }
   
   export default Header;