import Link from 'next/link';
import styles from './page.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className="container">
        <h1>Hello from Next JS</h1>

        <h2>Привет из Некст ДЖС</h2>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore,
          id.
        </p>

        <nav>
          <ul style={{ listStyle: 'none' }}>
            <li>
              <Link
                href="/about"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Home;
