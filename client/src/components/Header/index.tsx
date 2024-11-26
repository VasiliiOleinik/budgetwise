import { Link } from "react-router-dom";
import logo from '../../assets/Logo.png';

const Header = () => {
    return (
        <nav className="flex w-full align-middle">
            {/* <Link to="/">
                <img src={logo} />
            </Link> */}
            <ul className='flex w-auto align-middle'>
                <li className='mr-4'><Link to="/">Dashboard</Link></li>
                <li className='mr-4'><Link to="/settings">Settings</Link></li>
                <li className='mr-4'><Link to="/goal-tracker">Goal tracker</Link></li>
                <li className='mr-4'><Link to="/reports">Reports</Link></li>
            </ul>
        </nav>
    );
};

export default Header;