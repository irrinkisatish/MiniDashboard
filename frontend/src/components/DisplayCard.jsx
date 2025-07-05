import React from "react";

export default function DisplayCard({ data, onRegenerate }) {
  return (
    <div className="bg-white shadow-2xl rounded-2xl p-6 w-full max-w-lg animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 mb-3">
        {data.name} <span className="text-gray-500">({data.location})</span>
      </h2>
      <div className="space-y-2 text-gray-700">
        <p>
          ⭐ <strong>Rating:</strong> {data.rating}
        </p>
        <p>
          📝 <strong>Reviews:</strong> {data.reviews}
        </p>
        <p>
          📢 <strong>SEO Headline:</strong> <em>{data.headline}</em>
        </p>
      </div>
      <button
        onClick={onRegenerate}
        className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-md transition duration-200"
      >
        🔁 Regenerate SEO Headline
      </button>
    </div>
  );
}
