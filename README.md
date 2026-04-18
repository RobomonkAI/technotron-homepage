# Technotran

Full-stack project: **React (Vite) + Tailwind** frontend, **Node.js + Express** backend.

## Structure

- `frontend/` — Vite + React 19, Tailwind CSS v4; production static files in `dist/`
- `backend/` — Express API with `/api` routes

## Local development

**Frontend**

```bash
cd frontend
npm install
npm run dev
```

**Backend**

```bash
cd backend
npm install
npm start
```

- Backend listens on **`process.env.PORT`**, or **5001** locally if `PORT` is unset.
- Health check: `GET http://localhost:5001/api/health` (or your `PORT`) → plain text `Server is running`.

## API base URL (frontend)

- Configure **`VITE_API_URL`** in `frontend/.env` (see `frontend/.env.example`).
- In code, import from `src/config.js`: **`API_URL`** and **`apiUrl("/api/...")`** for fetches.
- Until you set a real URL, the placeholder is `https://your-backend-url`.

## Railway deployment (two services)

### 1. Backend service

1. **New Project → Deploy from GitHub** (or empty service + connect repo).
2. Create a **service** with **Root Directory** = `backend`.
3. **Build**: `npm install` (default). **Start**: `npm start` → runs `node server.js`.
4. Railway sets **`PORT`** automatically; the server binds to **`0.0.0.0`** and uses that port.
5. **Networking → Generate Domain** and copy the public URL (e.g. `https://technotran-api.up.railway.app`).

### 2. Frontend service

1. Add a second service with **Root Directory** = `frontend`.
2. **Build command**: `npm install && npm run build`
3. **Start command**: `npm start` → runs **`serve -s dist`** (uses Railway’s **`PORT`**; see `serve` defaults).
4. Under **Variables**, set **`VITE_API_URL`** to your **backend public URL** (no trailing slash).  
   Vite embeds this at **build** time, so trigger a **redeploy** after changing it.

### CORS

The backend uses **`app.use(cors())`** so any origin can call the API during initial rollout. Tighten to your frontend origin later if needed.

## Production commands (reference)

| Location | Command |
|----------|---------|
| Backend | `npm start` → `node server.js` |
| Frontend build | `npm run build` → output in `frontend/dist` |
| Frontend static host | `npm start` → `serve -s dist` (also: `npx serve -s dist`) |
