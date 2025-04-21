import axios from 'axios';
import { LoginRequest, LoginResponse } from '../types/auth';

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
    console.log("data called in api",data);
  const response = await axios.post('http://localhost:5000/api/login', data);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error('Invalid email or password');
  }
};
