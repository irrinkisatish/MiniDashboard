import React, { useState } from "react";
import Form from "./components/Form";
import DisplayCard from "./components/DisplayCard";
import axios from "axios";

function App() {
  const [businessData, setBusinessData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchBusinessData = async (name, location) => {
    setLoading(true);
    try {
      const res = await axios.post(`${API_BASE}/business-data`, {
        name,
        location,
      });
      setBusinessData(res.data);
    } catch (error) {
      alert("Failed to fetch business data.");
    } finally {
      setLoading(false);
    }
  };

  const regenerateHeadline = async () => {
    setLoading(true); // also show loader during headline regeneration
    try {
      const res = await axios.get(
        `${API_BASE}/regenerate-headline?name=${businessData.name}&location=${businessData.location}`
      );

      setBusinessData((prev) => ({ ...prev, headline: res.data.headline }));
    } catch (error) {
      alert("Failed to regenerate headline.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50 flex flex-col items-center px-4 py-10">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6 tracking-wide">
        📈 Local Business SEO Dashboard
      </h1>
      <Form onSubmit={fetchBusinessData} />
      {loading ? (
        <div className="flex justify-center items-center mt-6">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        businessData && (
          <DisplayCard data={businessData} onRegenerate={regenerateHeadline} />
        )
      )}
    </div>
  );
}

export default App;
