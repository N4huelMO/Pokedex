import { useState, useEffect } from "react";

import styles from "../../styles/PokeInfoStats.module.scss";

import { PokeInfoStats } from "@/interfaces/interfaces";

import Image from "next/image";
import Link from "next/link";

import { idRefact } from "@/helpers/idRefact";
import { useResize } from "@/helpers/resize";
import { getTypeInfo } from "@/helpers/weaknessResistances";

const PokeInfoStats = ({ stats, evolution, types, id }: PokeInfoStats) => {
  const [initialValues, setInitialValues] = useState<Array<number | string>>([
    0, 0, 0, 0, 0, 0,
  ]);

  const evolutions = evolution.filter((evo) => evo.id_evo !== id);

  const windowWith = useResize();

  const text = evolution
    .filter((text) => text.id_evo === id)[0]
    .flavor_text.replace("\f", " ");

  const MAX_STAT = 255;

  const baseStatsNames: { [key: string]: string } = {
    "hp": "hp",
    "attack": "atk",
    "defense": "def",
    "special-attack": "sp.atk",
    "special-defense": "sp.def",
    "speed": "spd",
  };

  const { filterWeaknesses, filterResistances } = getTypeInfo(types);

  const calculateInitialValues = () => {
    const baseStatsArray = stats.map(
      (stat) => `${(stat.base_stat / MAX_STAT) * 100}%`
    );

    setTimeout(() => {
      setInitialValues(baseStatsArray);
    }, 100);
  };

  useEffect(() => {
    calculateInitialValues();
  }, []);

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: `var(--type-${types[0]})` }}
    >
      <p className={styles.text}>
        {text === "" ? "This pokemon haven't description yet" : text}
      </p>
      <div className={styles.baseStats}>
        <h3 className={styles.headerStats}>Base Stats</h3>
        {stats.map((stat, i) => {
          const { name, base_stat } = stat;

          return (
            <div key={i} className={styles.item}>
              <span>{baseStatsNames[name]}</span>
              <div className={styles.right}>
                <p>{base_stat}</p>
                <div className={styles.line}>
                  <div
                    className={styles.background}
                    style={{
                      backgroundColor: `var(--type-${types[0]})`,
                    }}
                  ></div>

                  <div
                    className={styles.secondLine}
                    style={{
                      backgroundColor: `var(--type-${types[0]})`,
                      opacity: "1",
                      width: initialValues[i],
                    }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.evoContainer}>
        <h3>Evolutions:</h3>

        <div
          className={styles.evolutions}
          style={{
            display: `${evolutions.length >= 4 ? "grid" : "flex"}`,
            gridTemplateColumns: `${
              windowWith > 1024
                ? "repeat(4, minmax(0, 1fr))"
                : "repeat(2, minmax(0, 1fr))"
            }`,
            gap: `${evolutions.length >= 4 ? "0" : null}`,
          }}
        >
          {evolutions.sort((a, b) => Number(b.is_baby) - Number(a.is_baby))
            .length === 0 ? (
            <p>This pokemon don&apos;t have evolutions</p>
          ) : (
            <>
              {evolutions.map((evos, i) => {
                const { name, id_evo } = evos;

                return (
                  <div key={i} className={styles.evolution}>
                    <Link href={`${id_evo}/`}>
                      <Image
                        alt="Pokemon Sprite"
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id_evo}.png`}
                        width={`${evolutions.length >= 4 ? 100 : 150}`}
                        height={`${evolutions.length >= 4 ? 100 : 150}`}
                      />
                    </Link>
                    <p className={styles.namePoke}>
                      {name} - {idRefact(id_evo)}
                    </p>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>

      <div className={styles.typesContainer}>
        <div className={styles.types}>
          <div className={styles.weak}>
            <h3>Weakness</h3>

            {filterWeaknesses.length === 0 ? (
              <p>This pokemon don&apos;t have Weakness</p>
            ) : (
              <div className={styles.grid}>
                {filterWeaknesses.map((weak, i) => (
                  <p key={i} style={{ backgroundColor: `var(--type-${weak})` }}>
                    {weak}
                  </p>
                ))}
              </div>
            )}
          </div>

          <div className={styles.resistance}>
            <h3>Resistances</h3>

            {filterResistances.length === 0 ? (
              <p>This pokemon don&apos;t have resistences</p>
            ) : (
              <div className={styles.grid}>
                {filterResistances.map((resistance, i) => (
                  <p
                    key={i}
                    style={{ backgroundColor: `var(--type-${resistance})` }}
                  >
                    {resistance}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeInfoStats;
