import axios from "axios";

async function findCoordFromCityName(cityName) {
  const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${cityName}&key=${process.env.GOOGLE_API_KEY}`;
  try {
    const response = await axios.get(geocodeUrl);
    const { results } = response.data;
    if (results.length === 0) {
      return Error("No results found");
    }
    const { lat, lng } = results[0].geometry.location;
    const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=12&size=600x300&key=${process.env.GOOGLE_API_KEY}`;
    console.log(staticMapUrl);
    return staticMapUrl;
  } catch (error) {
    return error;
  }
}

export default { findCoordFromCityName };
