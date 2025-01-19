'use client';

import Link from 'next/link';
import styles from './Navigation.module.scss';
import { usePathname } from 'next/navigation';

interface LinkType {
  id: number;
  href: string;
  name: string;
}

const linksData: LinkType[] = [
  {
    id: 1,
    href: '/about',
    name: 'About us',
  },
  {
    id: 2,
    href: '/contacts',
    name: 'Contacts',
  },
  {
    id: 3,
    href: '/articles',
    name: 'Articles',
  },
];

const Navigation = () => {
  const pathname = usePathname();

  const showLinks = linksData.map((link) => (
    <li className={styles.item} key={link.id}>
      <Link
        href={link.href}
        className={`${styles.link} ${
          pathname.includes(link.href) ? styles.active : ''
        }`}
      >
        {link.name}
      </Link>
    </li>
  ));

  return (
    <nav className={styles.nav}>
      <ul className={styles.items}>
        <li className={styles.item}>
          <Link
            href="/"
            className={`${styles.link} ${
              pathname === '/' ? styles.active : ''
            }`}
          >
            Home
          </Link>
        </li>

        {showLinks}
      </ul>
    </nav>
  );
};

export default Navigation;
