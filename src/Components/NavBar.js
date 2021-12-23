import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useTransition, animated } from 'react-spring'
import Menu from './Menu';

const NavBar = () => {
    const [showMenu,setMenu] = useState(false);

    const menuTransitions = useTransition(showMenu, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    const maskTransitions = useTransition(showMenu, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    });
    
    return (
        <nav >
            <span className='text-xl'>
                <FontAwesomeIcon icon={faBars} 
                onClick={() => setMenu(!showMenu)}/> {/* toggle Menu */}
            </span>
            {
                maskTransitions((styles, item) => 
                item &&
                <animated.div style={styles}
                className='bg-black-t-50 fixed top-0 left-0 w-full h-full z-50'
                onClick={() => setMenu(false)}>
                </animated.div>)
            }

            {
                menuTransitions((styles, item) => 
                item &&
                <animated.div style={styles}
                className='fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-4'>
                    <Menu hideMenu={() => setMenu(false)}/>
                </animated.div>)
            }
        </nav>
    );
}

export default NavBar;