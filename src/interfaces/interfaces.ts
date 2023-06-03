export interface Pokemons {
  id: number;
  name: string;
  pokemon_v2_pokemontypes: Array<PokemonType>;
}

export interface HomeProps {
  data: Array<Pokemons>;
  page: number;
  totalPages: number;
}

export interface CardPokemon {
  data: Array<Pokemons>;
}

export interface CardProps {
  id: number;
  name: string;
  type: string[];
}

export interface Pagination {
  page: number;
  totalPages: number;
}

export interface Pokemon {
  id: number;
  height: number;
  weight: number;
  name: string;
  pokemon_v2_pokemontypes: Array<PokemonType>;
  pokemon_v2_pokemonabilities: Array<PokemonAbility>;
  pokemon_v2_pokemonstats: Array<PokemonStats>;
  pokemon_v2_pokemonspecy: PokemonEvolution;
}

export interface PokemonType {
  pokemon_v2_type: {
    name: string;
  };
}

export interface PokemonAbility {
  pokemon_v2_ability: {
    name: string;
  };
}

export interface PokemonStats {
  base_stat: number;
  pokemon_v2_stat: {
    name: string;
  };
}

export interface PokemonEvolution {
  pokemon_v2_evolutionchain: {
    pokemon_v2_pokemonspecies: Array<PokemonSpecies>;
  };
}

export interface PokemonSpecies {
  name: string;
  id: number;
  is_baby: boolean;
  pokemon_v2_pokemonspeciesflavortexts: { flavor_text?: string }[];
}

export interface PokemonInfo {
  pokemon?: Array<Pokemon>;
}

export interface PokeInfoCard {
  prevPokemon?: number | null;
  nextPokemon?: number | null;
  id: number;
  types: string[];
  height: number;
  weight: number;
  abilities: string[];
}

export interface PokeInfoStats {
  stats: { base_stat: number; name: string }[];
  evolution: {
    name: string;
    id_evo: number;
    is_baby: boolean;
    flavor_text: string;
  }[];
  types: string[];
  id: number;
}

export interface PokeInfoHeader {
  prevPokemon?: number | null;
  nextPokemon?: number | null;
  id: number;
  types: string[];
  name: string;
}

export interface Filter {
  name?: string;
  id?: number;
}
