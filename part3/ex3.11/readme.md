🔗 Online Application

The application is deployed on Render and available at:

https://fullstackopen-exercies-1.onrender.com/

API example:
	•	https://fullstackopen-exercies-1.onrender.com/api/persons

⸻

📌 Features
	•	View all phonebook entries
	•	Add new contacts
	•	Delete existing contacts
	•	Frontend and backend served from the same origin
	•	RESTful API

⸻

🛠 Technologies Used

Backend
	•	Node.js
	•	Express
	•	Morgan

Frontend
	•	React
	•	Vite
	•	Axios

⸻

📂 Project Structure (Production)

part3/phonebook-backend/
├── index.js
├── package.json
├── dist/        ← frontend production build
└── README.md

The dist directory contains the compiled frontend and is served using Express static middleware.

⸻

📖 Notes
	•	This implementation corresponds to Exercises 3.9 – 3.11
	•	The frontend is not deployed separately
	•	All requests use relative URLs (/api/persons)
	•	CORS is not required because the app runs under a single origin

⸻

Part of the Full Stack Open course by the University of Helsinki.
:::
