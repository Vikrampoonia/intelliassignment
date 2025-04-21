# Intelli Assignment – Frontend

This is the frontend application for the **Intelli Assignment** project. It is built using **React**, **TypeScript**, and modern libraries like **React Hook Form**, **Zod**, and **TanStack React Query** to ensure a clean, scalable, and reactive UI experience.

---

##  Setup Instructions

### 1. Clone the Repository


git clone https://github.com/Vikrampoonia/intelliassignment.git
cd intelli-assignment/frontend

# to download dependency run this command
npm install

## to run project locally use this command
npm start

## Project Structure
```
src/
├── api/
│   └── auth.ts              # Contains API call logic for authentication
│
├── components/
│   ├── ui/
│   │   ├── Button.tsx       # Reusable Button component
│   │   └── Input.tsx        # Reusable Input component
│   └── LoginForm.tsx        # Login form component using react-hook-form
│
├── hooks/
│   └── useLogin.ts          # Custom hook for handling login mutation logic
│
├── pages/
│   └── LoginPage.tsx        # Page component that renders LoginForm
│
├── schemas/
│   └── loginSchema.ts       # Zod schema for login form validation
│
├── types/
│   └── auth.ts              # TypeScript types for login request/response
│
└── App.tsx                  # Main app entry component
```


### Two email and password save in MongoDB so use these to for correct result
1.  email ="example@gmail.com"
    password= "123456"

2.  email = "example123@gmail.com"
    password= "1234567"

