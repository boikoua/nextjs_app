import Logo from '../Logo/Logo';
import Navigation from '../Navigation';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <Logo text="Footer Logo" />
          <Navigation />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
