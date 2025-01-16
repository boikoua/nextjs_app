import Image from 'next/image';
import styles from './not-found.module.css';
import myImage from './../images/404.png';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className={styles.root}>
      <Image src={myImage} alt="Not found page" />

      <Link href="/" className={styles.btn}>
        Повернутися назад
      </Link>
    </div>
  );
};

export default NotFoundPage;
