import { useMutation } from '@tanstack/react-query';
import { login } from '../api/auth';

export const useLogin = () => {
  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log("Login successful", data); // This is the server response, handle as needed
    },
    onError: (error: any) => {
      console.error('Login error:', error.message); // You can handle this error message here
    },
  });

  return {
    mutate: mutation.mutate,
    isPending: mutation.isLoading,
    error: mutation.error, // This is where we can handle error messages
  };
};
