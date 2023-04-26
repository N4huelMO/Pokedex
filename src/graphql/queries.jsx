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
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          name
        }
      }
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          name
        }
      }
    }
  }
`;

export const POKEMONS_QUERY = gql`
  query PokemonsQuery($limit: Int, $offset: Int) {
    pokemon_v2_pokemon(limit: $limit, offset: $offset) {
      name
      id
      pokemon_v2_pokemontypes(limit: 1) {
        pokemon_v2_type {
          name
        }
      }
    }
  }
`;
