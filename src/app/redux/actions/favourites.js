import { getFavourites, addFavourite } from "../../api/favourite";
import { Constants } from "./constant";

export const getAllFavourites = () => async (dispatch) => {
  const response = await getFavourites();
  try {
    dispatch({ type: Constants.GET_FAVOURITES_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: Constants.GET_FAVOURITES_FAILURE, payload: error });
  }
}

export const addToFavourites = (data) => async (dispatch) => {
  const response = await addFavourite(data);
  try {
    dispatch({ type: Constants.ADD_FAVOURITE_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: Constants.ADD_FAVOURITE_FAILURE, payload: error });
  }
}
