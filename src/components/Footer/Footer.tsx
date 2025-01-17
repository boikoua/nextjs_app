import Navigation from '../Navigation';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <h2>Logo</h2>
          <Navigation />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
