# InvestIQ (Frontend)

## Overview

InvestIQ is a frontend interface for an AI-powered investment portfolio management system. It provides users with a clean, responsive dashboard to view portfolio performance, analyze investments, and interact with AI-driven financial insights.

This frontend is built to communicate with a Flask-based backend API.

---

## Features

- Secure authentication UI (login system integration)
- Interactive portfolio dashboard
- Data visualization for investment performance
- AI insights display interface
- Responsive and modern UI design
- API integration with backend services

---

## Tech Stack

- React
- Vite
- JavaScript (ES6+)
- CSS / Tailwind CSS (if used)
- Axios / Fetch API for backend communication

---

## Project Structure

```
frontend/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   └── App.jsx
│
├── public/
├── index.html
└── package.json
```

---

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The application will run on:

```
http://localhost:5173
```

---

## Environment Configuration

Create a `.env` file in the frontend directory if required:

```env
VITE_API_BASE_URL=http://127.0.0.1:5000
```

---

## Backend Dependency

This frontend requires the InvestIQ backend server to be running for full functionality.

Backend repository (if applicable):
```
http://127.0.0.1:5000
```

---

## Future Improvements

- Dark mode support
- Advanced charting dashboard
- Real-time data updates
- Mobile-first UI optimization
- Enhanced AI insight visualizations

---

## Author

Developed by Aditya Gowda.

---

## License

This project is intended for academic use and is licensed under MIT License.