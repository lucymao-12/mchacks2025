import React from "react";
import Grid from "./Grid";

const Map = ({ mapUrl }) => {
  return (
    mapUrl && ( // Only render if mapUrl is defined
      <div style={{ position: "relative", display: "inline-block" }}>
        {/* Map Image */}
        <img
          src={mapUrl}
          alt="Map"
          style={{
            width: "600px",
            height: "400px",
            display: "block",
          }}
        />

        {/* Grid Overlay */}
        <Grid rows={40} columns={60} />
      </div>
    )
  );
};

export default Map;
