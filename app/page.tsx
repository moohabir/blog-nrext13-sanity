//import styles from './page.module.css';
import { Inter } from 'next/font/google';
import Banner from '../components/Banner';
import About from './about/page';

import Contacts from './contacts/page';
import Blog from './blog/page';

export const revalidate = 10;

export default function Home() {
  return (
    <main className="bg-#ffff text-black ">
      <Banner />
      <About />
      <Blog />
      <Contacts />
    </main>
  );
}
