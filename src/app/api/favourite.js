const BASE_URL = "http://localhost:3000";

const getFavourites = async () => {
  try {
    const response = await fetch(`${BASE_URL}/v1/favourites`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const favourites = await response.json();
    return favourites;
  } catch (error) {
    console.log(error);
  }
}

const addFavourite = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/v1/favourites`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

export { getFavourites, addFavourite };