import styles from '../../../styles/home/Navbar.module.css';

export default function Navbar() {
    return(
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.listMenber}><a href="#" className={styles.listLink}>Home</a></li>
                <li className={styles.listMenber}><a href="#" className={styles.listLink}>Developers</a></li>
                <li className={styles.listMenber}><a href="#" className={styles.listLink}>News</a></li>
                <li className={styles.listMenber}><a href="#" className={styles.listLink}>Help</a></li>
            </ul>
        </nav>
    );
}
