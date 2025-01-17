import Navigation from '../Navigation';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <h2>Logo</h2>
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
