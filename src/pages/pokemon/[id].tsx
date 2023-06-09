import PokeInfo from "@/components/PokeInfo/PokeInfo";

import { POKEMON_QUERY } from "@/graphql/queries";

import { useQuery } from "@apollo/client";

import { Pokemon } from "@/interfaces/interfaces";

import logo from "../../../public/pokeball.svg";

import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";

const Pokedex = () => {
  const router = useRouter();

  const { id } = router.query;

  const { data, loading } = useQuery(POKEMON_QUERY, { variables: { id } });

  const pokemon = data?.pokemon_v2_pokemon.map((pokemon: Pokemon) => {
    return pokemon;
  });

  return (
    <>
      {loading ? (
        <>
          <Head>
            <title>Loading...</title>
            <meta name="description" content="Generated by create next app" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/pokeball.svg" />
          </Head>

          <div className="loading">
            <Image priority alt="logo" src={logo} height={150} width={150} />
          </div>
        </>
      ) : (
        <PokeInfo pokemon={pokemon} />
      )}
    </>
  );
};

export default Pokedex;
