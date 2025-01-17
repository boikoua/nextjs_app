import Image from 'next/image';
import myImage from './../../images/404_page.png';
import styles from './page.module.scss';

const NotFoundPage = () => {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <Image
          src={myImage}
          alt="404 page"
          width={400}
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default NotFoundPage;
