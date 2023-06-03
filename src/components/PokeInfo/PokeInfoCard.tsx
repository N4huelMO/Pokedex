import heightImg from "../../../public/static/height.svg";
import weightImg from "../../../public/static/weight.svg";
import arrowLeft from "../../../public/static/arrowLeft.svg";
import arrowRight from "../../../public/static/arrowRight.svg";

import styles from "../../styles/PokeInfoCard.module.scss";

import Image from "next/image";
import Link from "next/link";

import { PokeInfoCard } from "@/interfaces/interfaces";
import { useResize } from "@/helpers/resize";

const PokeInfoCard = ({
  prevPokemon,
  nextPokemon,
  id,
  types,
  height,
  weight,
  abilities,
}: PokeInfoCard) => {
  const windowWidth = useResize();

  return (
    <div className={styles.container}>
      <div className={styles.poke}>
        {windowWidth < 768 && (
          <Link
            href={`${prevPokemon}/`}
            className={`${id === 1 ? styles.hiddenArrow : null}`}
          >
            <Image
              className={styles.arrow}
              width={25}
              height={25}
              alt="arrowLeft"
              src={arrowLeft}
            />
          </Link>
        )}

        <div
          className={styles.image}
          style={{ backgroundColor: `var(--type-${types[0]})` }}
        >
          <Image
            priority
            alt="Pokemon Sprite"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            width={300}
            height={300}
          />
        </div>

        {windowWidth < 768 && (
          <Link
            href={`${nextPokemon}/`}
            className={`${id === 1008 ? styles.hiddenArrow : null}`}
          >
            <Image
              className={styles.arrow}
              width={25}
              height={25}
              alt="arrowRight"
              src={arrowRight}
            />
          </Link>
        )}
      </div>

      <div className={styles.types}>
        {types.map((type: string, i: number) => (
          <p key={i} style={{ backgroundColor: `var(--type-${type})` }}>
            {type}
          </p>
        ))}
      </div>

      <div className={styles.movements}>
        <div>
          <Image src={heightImg} width={30} height={30} alt="Height Pokemon" />

          <p>{height / 10} m</p>
        </div>

        <div>
          <Image src={weightImg} width={25} height={30} alt="Weight Pokemon" />
          <p>{weight / 10} kg</p>
        </div>

        <div className={styles.movesDiv}>
          <p className={styles.movesTitle}>Moves</p>
          {abilities.map((ability: string, i: number) => (
            <p key={i}>{ability}</p>
          ))}
        </div>
      </div>

      <div
        className={styles.shiny}
        style={{ backgroundColor: `var(--type-${types[0]})` }}
      >
        <p>Shiny version:</p>
        <Image
          priority
          alt="Pokemon Shiny Sprite"
          width={140}
          height={140}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${id}.png`}
        />
      </div>
    </div>
  );
};

export default PokeInfoCard;
