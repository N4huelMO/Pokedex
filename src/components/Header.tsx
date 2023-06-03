import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/Header.module.scss";

import logo from "../../public/pokeball.svg";

import SearchBar from "./SearchBar";
import Filters from "./Filters";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image
          priority
          alt="pokeball header"
          src={logo}
          width={60}
          height={75}
        />
        <h1>Pokédex</h1>
      </Link>

      <div className={styles.components}>
        <SearchBar />
        <Filters />
      </div>
    </header>
  );
};

export default Header;
