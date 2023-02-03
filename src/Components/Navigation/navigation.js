import { useState } from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

export default function Navigation() {
    const [menuActive, setMenuState] = useState(false);

    return (
        <>
            <div className={'navigation-container'}>
                <nav>
                    <ul className={`navigation-list ${menuActive ? 'is-active' : ''}`}>
                        <li><Link to={'../'}>Home</Link></li>
                        <li><Link to={'../about'}>About</Link></li>
                        <li><Link to={'../contact'}>Contact</Link></li>
                        {/* Hack: to have button follow with scrolling */}
                        {menuActive &&
                            <button
                                className={`navigation-hamburger ${menuActive ? 'is-active' : ''}`}
                                onClick={() => setMenuState(!menuActive)}>
                                <div className={'bar'}></div>
                            </button>
                        }
                    </ul>
                </nav>
                {!menuActive &&
                    <button
                    className={`navigation-hamburger ${menuActive ? 'is-active' : ''}`}
                    onClick={() => setMenuState(!menuActive)}>
                    <div className={'bar'}></div>
                </button>}
            </div>
        </>
    )
}