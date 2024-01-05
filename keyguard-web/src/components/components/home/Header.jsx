import styles from '../../../styles/home/header.module.css';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';
import menuIcon from '../../../assets/svg/menu_white.svg';
import keyguardLogo from '../../../assets/logo/keyguard_logo_1.png';
import { useState } from 'react';

export default function Header() {

    const [menuState, setMenuState] = useState(false);

    const handleMenuState = () => {
        if(menuState === false){
            setMenuState(true);
        } else {
            setMenuState(false);
        }
    }

    return (
        <header className={styles.header}>
            <div className={styles.navBox}>
                <div className={styles.logoBox}>
                    <img src={keyguardLogo} alt="Keyguard logo" className={styles.logoIcon} />
                    <h1 className={styles.logoTitle}>Keyguard</h1>
                </div>
                <Navbar />
                <MobileMenu menuState={menuState} />
                <img src={menuIcon} alt="Menu icon" className={styles.menuIcon} onClick={handleMenuState} />
            </div>
        </header>
    );
}
