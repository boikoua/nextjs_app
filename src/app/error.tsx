'use client';

import Image from 'next/image';
import myImage from './images/error.png';
import styles from './error.module.css';

const Error = () => {
  return (
    <div className={styles.root}>
      <Image src={myImage} alt="Error" width={500} />
    </div>
  );
};

export default Error;
