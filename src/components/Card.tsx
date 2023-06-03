import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/Card.module.scss";

import { CardProps } from "@/interfaces/interfaces";

import { useRouter } from "next/router";
import { idRefact } from "../helpers/idRefact";

const Card = ({ id, name, type }: CardProps) => {
  const router = useRouter();

  const { filter, page } = router.query;

  return (
    <Link
      href={{
        pathname: `/pokemon/${id}`,
        query: `${filter ? `page=${page}&filter=${filter}` : ""}`,
      }}
      className={styles.card}
    >
      <div
        className={styles.container}
        style={{ backgroundColor: `var(--type-${type})` }}
      >
        <div className={styles.id}>{idRefact(id)}</div>
        <Image
          priority
          className={styles.img}
          alt="Pokemon Sprite"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          width={205}
          height={205}
        />
        <h3 className={styles.name}>{`${
          name.indexOf("-") >= 6 ? name.split("-")[0] : name
        }`}</h3>
      </div>
    </Link>
  );
};

export default Card;
