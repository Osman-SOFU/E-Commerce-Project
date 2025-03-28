import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from "../actions/favoritesActions";

const initialState = {
  favorites: JSON.parse(localStorage.getItem("favorites")) || [], // localStorage'dan yükle
};

const favoritesReducer = (state = initialState, action) => {
  let updatedFavorites;
  switch (action.type) {
    case ADD_TO_FAVORITES:
      updatedFavorites = [...state.favorites, action.payload];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // localStorage'a kaydet
      return {
        ...state,
        favorites: updatedFavorites,
      };
    case REMOVE_FROM_FAVORITES:
      updatedFavorites = state.favorites.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // localStorage'a kaydet
      return {
        ...state,
        favorites: updatedFavorites,
      };
    default:
      return state;
  }
};

export default favoritesReducer;
