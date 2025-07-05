const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const headlines = [
  "Boost Your Local Business Visibility Today!",
  "Dominate Google with Our Proven SEO Tips!",
  "Skyrocket Your Local Search Rankings Now!",
  "Your Business Deserves to Be #1 on Google!",
  "Attract More Customers with Smart SEO!",
];

// POST /business-data
app.post("/business-data", (req, res) => {
  const { name, location } = req.body;

  const simulatedData = {
    name,
    location,
    rating: (Math.random() * 1 + 4).toFixed(1), // between 4.0–5.0
    reviews: Math.floor(Math.random() * 200 + 50), // 50 to 250 reviews
    headline: headlines[Math.floor(Math.random() * headlines.length)],
  };

  res.json(simulatedData);
});

// GET /regenerate-headline
app.get("/regenerate-headline", (req, res) => {
  const headline = headlines[Math.floor(Math.random() * headlines.length)];
  res.json({ headline });
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
