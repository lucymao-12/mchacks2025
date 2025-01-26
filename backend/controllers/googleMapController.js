import express from "express";
import googleMapService from "../services/googleMapService.js";
const router = express.Router();

router.get("/static_map", (req, res) => {
  const { lat, lng } = req.query;

  if (!lat || !lng) {
    return res
      .status(400)
      .json({ error: "Latitude and longitude are required" });
  }

  const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=12&size=600x300&key=${process.env.GOOGLE_API_KEY}`;
  res.json({ url: staticMapUrl });
});

router.get("/geocodeCity", (req, res) => {
  const { city } = req.query;

  if (!city) {
    return res.status(400).json({ error: "City is required" });
  }

  const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${process.env.GOOGLE_API_KEY}`;
  res.json({ url: geocodeUrl });
});

router.get("/getLocationImage", (req, res) => {
  googleMapService
    .findCoordFromCityName(req.query.city)
    .then((url) => {
      if (url === "") {
        return res.status(404).json({ error: "City not found" });
      } else {
        return res.json({ url });
      }
    })
    .catch((error) => res.status(500).json({ error: error.message }));
});

export default router;
