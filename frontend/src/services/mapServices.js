import axios from "axios";
import React, { useState } from "react";

const fetchMapImageFromCityName = async (cityName) => {
  try {
    const response = await axios.get(`/api/getLocationImage`, {
      params: { city: cityName },
    });
    return response.data;
  } catch (error) {
    if (error.response.data === "City not found") {
      return "City not found";
    } else {
      return error;
    }
  }
};

export default fetchMapImageFromCityName;
