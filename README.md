
# Social Networking Platform - Starter Project

This starter contains a minimal full-stack social networking application:
- Backend: Express + MongoDB + Socket.io (real-time chat, notifications)
- Frontend: React (Vite) + Socket.io-client
- Docker compose for quick local setup
- Seed script to create an example user and sample posts

Quick start (local):
1. Backend:
   cd server
   cp .env.example .env
   npm install
   npm run seed
   npm run dev
2. Frontend:
   cd client
   cp .env.example .env
   npm install
   npm run dev
3. Open the frontend (Vite) URL (usually http://localhost:5173).

Quick start (docker):
docker-compose up --build
