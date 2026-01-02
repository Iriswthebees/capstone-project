const FAVORITES_KEY = "favoriteRecipes";

export function getFavorites() {
  const stored = localStorage.getItem(FAVORITES_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function isFavorite(id) {
  return getFavorites().includes(id);
}

export function toggleFavorite(id) {
  const favorites = getFavorites();

  let updated;
  if (favorites.includes(id)) {
    updated = favorites.filter((favId) => favId !== id);
  } else {
    updated = [...favorites, id];
  }

  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  return updated;
}
