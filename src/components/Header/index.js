import './style.css'
import TASKManager from '../TASKManager'
const Header = () => (
    <div className="ContainerHeader">
    <TASKManager/>
    <nav>
       <li className="activo">Abous us</li>
       <li>Cases</li>
       <li>Resources</li> 
    </nav>
    <button>Sign In</button>
    </div>
)

export default Header;