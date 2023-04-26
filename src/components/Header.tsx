import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/Header.module.scss";

import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            alt="pokeball header"
            src={"/pokeball.svg"}
            width={60}
            height={75}
          ></Image>
          <h1>Pokédex</h1>
        </Link>
      </div>

      <SearchBar />
    </header>
  );
};

export default Header;
