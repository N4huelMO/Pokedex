import {
  POKEMON_BY_ID_QUERY,
  POKEMON_BY_STRING_QUERY,
  client,
} from "@/graphql/queries";
import { useClickOutside } from "@/helpers/clickOutside";

import { idRefact } from "@/helpers/idRefact";

import { Filter } from "@/interfaces/interfaces";

import styles from "@/styles/Searchbar.module.scss";

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";

const SearchBar = () => {
  const [pokemon, setPokemon] = useState<string>("");
  const [filter, setFilter] = useState<Filter[]>([]);
  const [error, setError] = useState<boolean>();
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const router = useRouter();

  const ref = useRef<HTMLDivElement>(null);

  const getSearchById = async (e: number) => {
    const { data } = await client.query({
      query: POKEMON_BY_ID_QUERY,
      variables: { id: e },
    });

    setFilter(data.pokemon_v2_pokemon);

    return;
  };

  const getPokemonByString = async (e: string) => {
    const { data } = await client.query({
      query: POKEMON_BY_STRING_QUERY,
      variables: { name: e },
    });

    setFilter(data.pokemon_v2_pokemon);

    return;
  };

  useEffect(() => {
    const getPokemon = (e: string) => {
      if (e === "") {
        setFilter([]);
        return;
      }

      if (/^\d+$/.test(e)) {
        const isNumber = Number(e);
        getSearchById(isNumber);

        return;
      }

      if (/^[a-zA-Z]+$/.test(e)) {
        getPokemonByString(e);

        return;
      }

      setError(true);
      setFilter([]);

      setTimeout(() => {
        setError(false);
      }, 3000);
    };

    getPokemon(pokemon);
  }, [pokemon]);

  useEffect(() => {
    setPokemon("");
  }, [router.asPath]);

  useClickOutside(ref, setShowDropdown);

  return (
    <div ref={ref} className={styles.container}>
      <input
        onChange={(e) => {
          setPokemon(e.target.value);
        }}
        onClick={() => {
          setShowDropdown(true);
        }}
        className={styles.search}
        type="text"
        placeholder="Enter a name or number"
        value={pokemon}
      />

      {error && (
        <p className={styles.error}>
          Please enter a search term that contains only letters or numbers.
        </p>
      )}

      {filter.length <= 0 ? null : (
        <>
          {showDropdown && (
            <div className={styles.filter}>
              {filter?.map((poke) => {
                return (
                  <Link
                    href={`/pokemon/${poke.id}`}
                    className={styles.type}
                    key={poke.id}
                  >
                    {poke.name} - {idRefact(poke.id!)}
                  </Link>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SearchBar;
