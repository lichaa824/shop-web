import { Link } from 'react-router-dom'

function Nav(){
    return(
        <nav>
            <Link to="/"> Home </Link>
            <Link to="shop"> Test </Link>
        </nav>
    )
};

export default Nav;