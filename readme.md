## Backend Configuration

**Environment Files**: Navigate to the `backend` folder and create `.env`. Add the following contents:

```plaintext
MONGODB_CONNECTION_STRING=

JWT_SECRET_KEY=
FRONTEND_URL=http://localhost:5173

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

## Frontend Configuration

**Environment Files**: Navigate to the `frontend` folder and create a file: `.env`:

```plaintext
VITE_API_BASE_URL=http://localhost:8000
```

**VITE_API_BASE_URL**:

- The `VITE_API_BASE_URL` should point to the URL where your backend application is running (typically `http://localhost:8000` if you're running it locally).
