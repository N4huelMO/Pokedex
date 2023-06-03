import { useRouter } from "next/router";

import arrowLeft from "../../../public/static/arrowLeft.svg";
import arrowRight from "../../../public/static/arrowRight.svg";

import styles from "../../styles/PokeInfoHeader.module.scss";

import Image from "next/image";
import Link from "next/link";

import { PokeInfoHeader } from "@/interfaces/interfaces";

import { idRefact } from "@/helpers/idRefact";
import { useResize } from "@/helpers/resize";

const PokeInfoHeader = ({
  prevPokemon,
  nextPokemon,
  types,
  id,
  name,
}: PokeInfoHeader) => {
  const router = useRouter();

  const { page, filter } = router.query;

  let initialPage = Math.floor((id - 1) / 16) + 1;

  const windowWidth = useResize();

  return (
    <header className={styles.header}>
      <div className={styles.infoHeader}>
        {windowWidth > 768 && (
          <Link
            href={`${
              page ? `/?page=${page}&filter=${filter}` : `/?page=${initialPage}`
            }`}
            className={styles.home}
            style={{ backgroundColor: `var(--type-${types})` }}
          >
            Back to Home
          </Link>
        )}

        <div className={styles.pokeData}>
          {id === 1 ? null : (
            <Link
              className={styles.arrow}
              href={`${
                windowWidth < 768 ? `/?page=${initialPage}` : `${prevPokemon}`
              }`}
            >
              <Image width={25} height={25} alt="arrowLeft" src={arrowLeft} />
            </Link>
          )}

          <div className={styles.name}>
            <h2>{`${name.indexOf("-") > 6 ? name.split("-")[0] : name}`}</h2>

            {idRefact(id)}
          </div>

          {id === 1008 || windowWidth < 768 ? null : (
            <Link
              className={styles.arrow}
              href={`${
                windowWidth < 768 ? `/?page=${initialPage}` : `${nextPokemon}`
              }`}
            >
              <Image width={25} height={25} alt="arrowLeft" src={arrowRight} />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default PokeInfoHeader;
