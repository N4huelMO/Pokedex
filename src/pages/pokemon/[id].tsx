import PokeInfo from "@/components/PokeInfo";
import Image from "next/image";
import { POKEMON_QUERY } from "@/graphql/queries";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";

const Pokedex = () => {
  const router = useRouter();

  const id = router.query.id;

  const { data, loading } = useQuery(POKEMON_QUERY, { variables: { id } });

  console.log(data);

  return (
    <>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div style={{ backgroundColor: `var(--type-grass)` }}>
          <p>a</p>
          <Image
            priority
            alt="Pokemon Sprite"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${2}.png`}
            width={250}
            height={250}
          ></Image>

          <div></div>
        </div>
      )}
    </>
  );
};

export default Pokedex;
