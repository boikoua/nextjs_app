import styles from './Logo.module.scss';

const Logo = ({ text }: { text: string }) => {
  return <h2 className={styles.logo}>{text}</h2>;
};

export default Logo;
