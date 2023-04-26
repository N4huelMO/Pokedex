export interface Pagination {
  page: number;
  totalPages: number;
}

export interface Pokemons {
  id: number;
  name: string;
  pokemon_v2_pokemontypes: Array<string>;
  type: string;
}

export interface CardProps {
  id: number;
  name: string;
  type: string;
}

export interface HomeProps {
  data: Array<Pokemons>;
  page: number;
  totalPages: number;
}

export interface Type {
  pokemon_v2_type: {
    name: string;
  };
}
