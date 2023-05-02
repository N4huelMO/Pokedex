import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/Card.module.scss";

import { CardProps } from "@/interfaces/interfaces";

import { capitalizedString } from "@/helpers/capitalizedString";

const Card = ({ id, name, type }: CardProps) => {
  return (
    <Link href={`/pokemon/${id}`} className={styles.card}>
      <div
        className={styles.container}
        style={{ backgroundColor: `var(--type-${type})` }}
      >
        <div className={styles.id}>
          <p>{`#${id <= 9 ? "00" : id >= 10 && id <= 99 ? "0" : ""}${id}`}</p>
        </div>
        <Image
          priority={true}
          className={styles.img}
          alt="Pokemon Sprite"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          width={300}
          height={300}
        ></Image>
        <h3 className={styles.name}>{capitalizedString(name)}</h3>
      </div>
    </Link>
  );
};

export default Card;
