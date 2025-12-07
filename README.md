# 🎬 Netflix Clone (Login & Dashboard)

A pixel-perfect responsive replica of the Netflix login and landing interface. This full-stack web application features a polished **React** frontend and a dedicated **Express** backend for handling authentication logic. Designed to mimic the premium aesthetic of the original platform.

## 📸 Interface Preview

![Netflix Interface](https://github.com/Lokistark/Netflix-LoginPage/blob/main/Screenshot%202025-12-07%20134132.png)

## 🌐 Live Demo

**Experience the app live on Vercel:**
👉 **[View Live Demo](https://movie-loginpage.vercel.app/)** *(Replace with your specific Vercel URL)*

## ✨ Features

*   **Responsive UI**: Fully responsive design that looks accurate on mobile, tablet, and desktop.
*   **Authentication Flow**:
    *   Functional login form with credential validation.
    *   Express.js backend API handling sign-in requests.
    *   **Secure Dashboard**: Accessible only after successful authentication.
*   **Modern Styling**:
    *   Custom CSS implementation (no external UI libraries).
    *   Floating input labels.
    *   Authentic Netflix red/black color scheme and typography.
*   **Sign Out Functionality**: Complete session lifecycle management.

## 🔐 Credentials for Testing

Use the following credentials to access the secure dashboard:

| Role | Email | Password |
| :--- | :--- | :--- |
| **User** | `loki@gmail.com` | `loki123` |
| **Test** | `test@netflix.com` | `password123` |

## 🛠️ Tech Stack

*   **Frontend**: React (Vite), React Router v6
*   **Backend**: Node.js, Express.js
*   **Styling**: Vanilla CSS3 (Custom Design System)

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Lokistark/Movie-LoginPage.git
cd Movie-LoginPage
```

### 2. Install Dependencies

You need to install dependencies for both the client (frontend) and server (backend).

**Frontend:**
```bash
cd client
npm install
```

**Backend:**
```bash
cd server
npm install
```

### 3. Run the Application

You need to run both the backend server and frontend client **simultaneously in separate terminals**.

**Terminal 1 - Start the Backend Server (Port 5000):**
```bash
cd server
npm start
```
✅ Server will run at: `http://localhost:5000`

**Terminal 2 - Start the Frontend Client (Port 5173):**
```bash
cd client
npm run dev
```
✅ Frontend will run at: `http://localhost:5173`

### 4. Access the Application

Once both servers are running, open your browser and navigate to:

🌐 **Local Development URL:** [`http://localhost:5173`](http://localhost:5173)

**Note:** Make sure both the backend (port 5000) and frontend (port 5173) are running simultaneously for the login functionality to work properly.

### 🔧 Troubleshooting

**Issue: Port already in use**
- If port 5173 is busy, Vite will automatically use the next available port (5174, 5175, etc.)
- Check the terminal output for the actual port number

**Issue: Login not working**
- Ensure the backend server is running on port 5000
- Check that `http://localhost:5000` is accessible
- Verify both terminals are active

**Issue: "Cannot connect to server"**
- Restart the backend server: `cd server && npm start`
- Check if port 5000 is available
