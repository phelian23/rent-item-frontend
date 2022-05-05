const ADD_NEW_SCOOTER_SUCCESS = "rent_item/items/ADD_NEW_SCOOTER_SUCCESS";
const ADD_NEW_SCOOTER_FAILURE = "rent_item/items/ADD_NEW_SCOOTER_FAILURE";
const GET_ALL_SCOUTERS_SUCCESS = "rent_item/items/GET_ALL_SCOUTERS_SUCCESS";
const GET_ALL_SCOUTERS_FAILURE = "rent_item/items/GET_ALL_SCOUTERS_FAILURE";
const DELETE_SCOOTER_SUCCESS = "rent_item/items/DELETE_SCOOTER_SUCCESS";
const DELETE_SCOOTER_FAILURE = "rent_item/items/DELETE_SCOOTER_FAILURE";
const DISPLAY_SCOOTER = "rent_item/items/DISPLAY_SCOOTER";

const initialState = {
  scooters: [],
  isLoading: false
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_SCOOTER_SUCCESS:
      return {
        ...state,
        scooters: [...state.scooters, action.payload]
      };
    case ADD_NEW_SCOOTER_FAILURE:
      return {
        ...state,
        scooters: []
      };
    case GET_ALL_SCOUTERS_SUCCESS:
      return {
        ...state,
        scooters: action.payload
      };
    case GET_ALL_SCOUTERS_FAILURE:
      return {
        ...state,
        scooters: []
      };
    case DELETE_SCOOTER_SUCCESS:
      return {
        ...state,
        scooters: state.scooters.filter(
          (scooter) => scooter.id !== action.payload
        )
      };
    case DELETE_SCOOTER_FAILURE:
      return {
        ...state,
        scooters: []
      };

    case DISPLAY_SCOOTER:
      return {
        ...state,
        scooters: state.scooters.map((scooter) => {
        if (scooter.id === action.payload) {
          return {
            ...scooter,
            display: true
          };
        } else {
          return {
            ...scooter,
            display: false
          };
        }
      })
      };


    default:
      return state;
  }
}
export default itemReducer;
