import express from "express";
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

export default router;
