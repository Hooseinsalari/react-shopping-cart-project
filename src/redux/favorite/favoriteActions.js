export const addToFavorite = (id, products) => {
  return { type: "ADD_TO_FAVORITE", id, products };
};

export const removeFromFavorite = (id, products) => {
  return { type: "REMOVE_FROM_FAVORITE", id, products };
};
