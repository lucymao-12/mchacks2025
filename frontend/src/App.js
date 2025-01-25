import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    // Replace '/' with your backend endpoint
    axios
      .get("/api") // Update this with your backend URL
      .then((response) => {
        setMessage(response.data || "No message received");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setMessage("Error fetching data");
      });
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Backend Response:</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
