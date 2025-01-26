import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import fetchMapImageFromCityName from "./services/mapServices";
import Map from "./components/Map";

function App() {
  const [mapImageUrl, setMapImageUrl] = useState("");
  const handleSearch = (searchTerm) => {
    fetchMapImageFromCityName(searchTerm).then((data) => {
      setMapImageUrl(data.url);
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <SearchBar onSearch={handleSearch} />
      <Map mapUrl={mapImageUrl} />
    </div>
  );
}

export default App;
