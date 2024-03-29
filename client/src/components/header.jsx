// Header Component

import {FaSignInAlt , FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Header(){
    return (
        <header className="header">
            <div className="logo">
                <Link to='/'>SDG Learn & Goals</Link>
            </div>
            <ul>
              <li>
                <Link to='/dashboard' >Goals Dashboard</Link>
              </li>
                <li>
                    <Link to='/login'>
                        <FaSignInAlt /> Login
                    </Link>
                </li>
                {/* <li><FaSignOutAlt/></li> */}
                    <li>
                    <Link to='/register'>
                        <FaUser /> Register
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header