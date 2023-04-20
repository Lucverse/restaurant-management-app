import { ADD_ITEM, FETCH_RESTAURANTS_FAILURE, FETCH_RESTAURANTS_SUCCESS, FETCH_RESTAURANTS_REQUEST } from "../types/types";
export const addItem = (itemData) => {
    return {
        type: ADD_ITEM,
        payload: itemData,
    };
};
export const fetchRestaurantsRequest = () => {
    return {
        type: FETCH_RESTAURANTS_REQUEST,
    };
};

export const fetchRestaurantsSuccess = (restaurants) => {
    return {
        type: FETCH_RESTAURANTS_SUCCESS,
        payload: restaurants,
    };
};
export const fetchRestaurantsFailure = (error) => {
    return {
        type: FETCH_RESTAURANTS_FAILURE,
        payload: error,
    };
};

export const fetchRestaurants = () => {
    return (dispatch) => {
        dispatch(fetchRestaurantsRequest());
        fetch("http://localhost:5000/restaurants")
            .then((response) => response.json())
            .then((data) => {
                dispatch(fetchRestaurantsSuccess(data));
            })
            .catch((error) => {
                dispatch(fetchRestaurantsFailure(error));
            });
    };
};