# Backend

A RESTful API built with Node.js, Express, TypeScript, and Prisma ORM.

---

##  Setup Instructions

### 1. Clone the Repository 


#git clone https://github.com/Vikrampoonia/intelliassignment.git
```cd intelli-assignment/backend1```

# to download dependency run this command
npm install

## to run project locally use this command
npm start or npm run dev

## Project Structure
```
.
├── app.ts                      # Main entry point for the server
├── Routes/
│   └── authRoute.ts            # Route for login API calls
├── Controllers/
│   └── authController.ts       # Logic for API endpoints
├── Middlewares/
│   └── errorHandle.ts          # Error handling middleware
├── utils/
│   └── AppError.ts             # Custom error handling class
├── prisma/
│   └── schema.prisma           # Prisma schema design
└── .env                        # Environment variables (MongoDB connection string)
```

## Server running url
http://localhost:5000

## Api end point
http://localhost:5000/api/login



