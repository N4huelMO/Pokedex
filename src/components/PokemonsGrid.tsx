import styles from "@/styles/PokemonsGrid.module.scss";

import Card from "@/components/Card";

import { CardPokemon, Pokemons, PokemonType } from "@/interfaces/interfaces";

const PokemonsGrid = ({ data }: CardPokemon) => {
  return (
    <div className={styles.gridPokemons}>
      {data?.map((poke: Pokemons) => {
        const types = poke.pokemon_v2_pokemontypes.map((type: PokemonType) => {
          return type.pokemon_v2_type.name;
        });

        return (
          <Card key={poke.id} id={poke.id} name={poke.name} type={types} />
        );
      })}
    </div>
  );
};

export default PokemonsGrid;
