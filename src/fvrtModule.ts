interface PlantData {
  author: string;
  bibliography: string;
  common_name: string | null;
  family: string;
  family_common_name: string | null;
  genus: string;
  genus_id: number;
  id: number;
  links: {
    genus: string;
    plant: string;
    self: string;
  };
  plant_id: number;
  rank: string;
  scientific_name: string;
  slug: string;
  status: string;
  synonyms: string[];
  year: number;
  image_url: string;
}

export const getUpdatedFavorites = (
  plant: PlantData,
  favorites: PlantData[],
): PlantData[] => {
  const index = favorites.findIndex((p) => p.id === plant.id);
  if (index !== -1) {
    return favorites.filter((p) => p.id !== plant.id);
  } else {
    return [...favorites, plant];
  }
};
