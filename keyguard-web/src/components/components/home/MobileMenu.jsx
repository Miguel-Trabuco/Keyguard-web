import styles from '../../../styles/home/mobileMenu.module.css';

export default function MobileMenu(menuState) {

    console.log(menuState.menuState);

    return(
        <div className={menuState.menuState ? styles.openMenuBox : styles.menuBox}>
            <nav className={styles.menuNav}>
                <ul className={styles.menuList}>
                    <li className={styles.listMenber}><a href="#" className={styles.listLink}>Home</a></li>
                    <li className={styles.listMenber}><a href="#" className={styles.listLink}>Developers</a></li>
                    <li className={styles.listMenber}><a href="#" className={styles.listLink}>News</a></li>
                    <li className={styles.listMenber}><a href="#" className={styles.listLink}>Help</a></li>
                </ul>

                <h1 className={styles.logo}>Keyguard</h1>
            </nav>
        </div>
    )
    
}