import styles from './loading.module.css';

const Loader = () => {
  return (
    <div className={styles.root}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
