import { getScooters, addScooter, deleteScooter } from "../../api/item";

export const getAllScooters = () => async (dispatch) => {
  const response = await getScooters();
  if (response.status === 200) {
    dispatch({ type: "GET_ALL_SCOUTERS_SUCCESS", payload: response.data });
  } else {
    dispatch({ type: "GET_ALL_SCOUTERS_FAILURE", payload: response.data });
  }
}

  export const addNewScooter = (data) => async (dispatch) => {
    const response = await addScooter(data);
    if (response.status === 200) {
      dispatch({ type: "ADD_NEW_SCOOTER_SUCCESS", payload: response.data });
    }
    else {
      dispatch({ type: "ADD_NEW_SCOOTER_FAILURE", payload: response.data });
    }
  }

  export const deleteScooterById = (id) => async (dispatch) => {
    const response = await deleteScooter(id);
    if (response.status === 200) {
      dispatch({ type: "DELETE_SCOOTER_SUCCESS", payload: response.data });
    }
    else {
      dispatch({ type: "DELETE_SCOOTER_FAILURE", payload: response.data });
    }
  }

  export const displayScooter = (id) => ({ type: "DISPLAY_SCOOTER", payload: id });
