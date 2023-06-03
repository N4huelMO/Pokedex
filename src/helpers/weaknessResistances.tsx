import weaknessResistances from "../../data/weaknessResistances.json";

const typeChart: {
  [key: string]: { weaknesses: string[]; resistances: string[] };
} = weaknessResistances;

export const getTypeInfo = (
  pokemonTypes: string[]
): { filterWeaknesses: string[]; filterResistances: string[] } => {
  let weaknesses: string[] = [];
  let resistances: string[] = [];

  for (const type of pokemonTypes) {
    const typeInfo = typeChart[type.toLowerCase()];

    if (typeInfo) {
      weaknesses = weaknesses.concat(typeInfo.weaknesses);
      resistances = resistances.concat(typeInfo.resistances);
    }
  }

  const filterWeaknesses = weaknesses.filter(
    (type, i) => !resistances.includes(type) && weaknesses.indexOf(type) === i
  );
  const filterResistances = resistances.filter(
    (type, i) => !weaknesses.includes(type) && resistances.indexOf(type) === i
  );

  return { filterWeaknesses, filterResistances };
};
