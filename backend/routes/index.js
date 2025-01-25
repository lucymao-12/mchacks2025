import express from "express";
import mapRoutes from "./google_map.js";
const router = express.Router();

const apiString = "/api";

router.get(apiString, (req, res) => {
  res.send("API is running...");
});

router.use(apiString, mapRoutes);

export default router;
