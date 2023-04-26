import styles from "@/styles/GridPokemons.module.scss";

import Card from "@/components/Card";

import { Pokemons } from "@/interfaces/interfaces";

const PokemonsGrid = ({ data }: any) => {
  return (
    <div className={styles.gridPokemons}>
      {data.map((poke: Pokemons) => {
        const types = poke.pokemon_v2_pokemontypes.map((type: any) => {
          return type.pokemon_v2_type.name;
        });

        return (
          <Card key={poke.id} id={poke.id} name={poke.name} type={types[0]} />
        );
      })}
    </div>
  );
};

export default PokemonsGrid;
