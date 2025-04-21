# Intelli Assignment – Frontend

This is the frontend application for the **Intelli Assignment** project. It is built using **React**, **TypeScript**, and modern libraries like **React Hook Form**, **Zod**, and **TanStack React Query** to ensure a clean, scalable, and reactive UI experience.

---

##  Setup Instructions

### 1. Clone the Repository


git clone https://github.com/Vikrampoonia/intelliassignment.git
cd intelli-assignment/frontend

# to download dependency run this command
npm install

#to run project locally use this command
npm start

#Project Structure
src folder contain
./api/auth.ts   used for make api call
./components/ui/Button.tsx    used to make button 
./components/ui/Input.tsx     used to make input 
./components/LoginForm.tsx    used to make Login Form
./hooks/useLogin.ts     conatining useForm hook
./pages/LoginPage.tsx      used to render Login Form
./schemas/loginSchema.ts    used to give proper error message
./types/auth.ts            used as abstraction for any api


### Two email and password save in MongoDB so use these to for correct result
1.  email ="example@gmail.com"
    password= "123456"

2.  email = "example123@gmail.com"
    password= "1234567"

