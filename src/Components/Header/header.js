import './header.css';
import { Link } from 'react-router-dom'
import Navigation from '../Navigation/navigation';

export default function Header() {
    return (
        <div className={'header-container'}>
            <Link to={'/'}>
                <h1 className={'header-title'}>Josh Barnes</h1>
            </Link>
            <h2 className={'header-subtitle'}>Software Developer</h2>
            <Navigation />
        </div>
    )
}