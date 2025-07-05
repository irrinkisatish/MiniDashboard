# 📊 Local Business SEO Dashboard

A mini full-stack dashboard built for the **GrowthProAI Full Stack Intern Assignment**. This tool simulates how small local businesses can monitor their SEO performance and Google business data in real time.

---
## 🚀 Live Demo

| Client (Frontend) | Server (Backend) |
|-------------------|------------------|
| [🌐 Frontend on Vercel]( https://mini-dashboard-one.vercel.app/) | [🌐 Backend on Render](https://seo-minidashboard-api.onrender.com/) |

>

---

## ✨ Features

- 📍 Input form for Business Name & Location
- ⭐ Simulated Google rating and review count
- 🤖 AI-style SEO headline generation
- 🔁 Regenerate SEO headline dynamically
- 🎨 Responsive UI with Tailwind CSS
- 🚀 Backend with Node.js + Express (simulated API)
- ⚡ Live deployment on Vercel & Render

---

## 🛠️ Technologies Used

### Frontend:
- React.js (Vite)
- Tailwind CSS
- Axios

### Backend:
- Node.js
- Express.js
- CORS
- (Optional: dotenv for future API integrations)

---

## 📦 Project Structure

MiniDashboard/
├── backend/
│ └── server.js (Express server)
│ └── .env
├── frontend/
│ ├── src/
│ │ ├── App.jsx
│ │ ├── components/
│ │ │ ├── Form.jsx
│ │ │ └── DisplayCard.jsx
│ └── tailwind.config.js, postcss.config.js
│ └── index.css, main.jsx
| └── .env
|


---


### Project Setup

## Create Folder in Terminal
```bash
mkdir miniDashboard
```

⚙️ Backend Setup
```bash
cd backend
npm install cors express dotenv
# Optional: add .env and PORT if needed
node index.js
```

⚙️ Frontend Setup
```bash

npm create vite@latest frontend
cd frontend
npm install tailwindcss @tailwindcss/vite   
npm install
npm run dev
```

### ✅ Deploy Instructions (Vercel + Render)

#### 🌐 Frontend on **Vercel**
1. Go to [https://vercel.com](https://vercel.com)
2. Import GitHub repo → Select frontend folder
3. Choose **Framework: React**
4. Click **Deploy**

#### ⚙️ Backend on **Render**
1. Go to [https://render.com](https://render.com)
2. Create a **new Web Service**
3. Select your repo, point to `backend/`
4. Set:
   - Runtime: `Node`
   - Build Command: `npm install`
   - Start Command: `node index.js`
   - Auto deploy: ✅ Enabled

---


## 📄 API Endpoints

### `POST /business-data`
**Request:**
```json
{
  "name": "Cake & Co",
  "location": "Mumbai"
}
```
**Response:**
```json
  {
  "name": "Cake & Co",
  "location": "Mumbai",
  "rating": "4.4",
  "reviews": 178,
  "headline": "Boost Your Local Business Visibility Today!"
}
```

📬 Submission
Submitted by Satish Irrinki for the Full Stack Intern Assignment at GrowthProAI.
