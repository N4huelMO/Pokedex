import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
const URL = "https://beta.pokeapi.co/graphql/v1beta";

export const client = new ApolloClient({
  uri: URL,
  cache: new InMemoryCache(),
});

export const POKEMON_QUERY = gql`
  query PokemonQuery($id: Int!) {
    pokemon_v2_pokemon(where: { id: { _eq: $id } }) {
      id
      name
      height
      weight
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          name
        }
      }
      pokemon_v2_pokemonspecy {
        pokemon_v2_evolutionchain {
          pokemon_v2_pokemonspecies {
            name
            id
            is_baby
            pokemon_v2_pokemonspeciesflavortexts(
              where: { language_id: { _eq: 9 } }
              limit: 1
            ) {
              flavor_text
            }
          }
        }
      }
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          name
        }
      }
    }
  }
`;

export const POKEMONS_QUERY = gql`
  query PokemonsQuery($limit: Int!, $offset: Int!) {
    pokemon_v2_pokemon(limit: $limit, offset: $offset) {
      name
      id
      pokemon_v2_pokemontypes(where: { slot: { _eq: 1 } }) {
        pokemon_v2_type {
          name
        }
      }
    }
  }
`;

export const POKEMONS_FILTER_QUERY = gql`
  query FilterPokemons($type: String!, $limit: Int!, $offset: Int!) {
    pokemon_v2_pokemon_aggregate(
      where: {
        pokemon_v2_pokemontypes: { pokemon_v2_type: { name: { _eq: $type } } }
        id: { _lte: 1008 }
      }
    ) {
      aggregate {
        count
      }
    }
    pokemon_v2_pokemon(
      limit: $limit
      offset: $offset
      where: {
        pokemon_v2_pokemontypes: { pokemon_v2_type: { name: { _eq: $type } } }
        id: { _lte: 1008 }
      }
      order_by: { id: asc }
    ) {
      name
      id
      pokemon_v2_pokemontypes(where: { slot: { _eq: 1 } }) {
        pokemon_v2_type {
          name
        }
      }
    }
  }
`;

export const POKEMON_BY_STRING_QUERY = gql`
  query PokemonByStringQuery($name: String!) {
    pokemon_v2_pokemon(
      where: { name: { _regex: $name }, id: { _lte: 1008 } }
      limit: 10
    ) {
      name
      id
    }
  }
`;

export const POKEMON_BY_ID_QUERY = gql`
  query PokemonByIdQuery($id: Int!) {
    pokemon_v2_pokemon(where: { id: { _lte: 1008, _eq: $id } }) {
      name
      id
    }
  }
`;
