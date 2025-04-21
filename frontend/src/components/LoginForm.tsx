import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../schemas/loginSchema';
import { z } from 'zod';
import { Input } from './ui/Input';
import { Button } from './ui/Button';
import { useLogin } from '../hooks/useLogin';
import '../App.css';


export const LoginForm = () => {
  const { mutate, isPending, error } = useLogin();
  const [loginMessage, setLoginMessage] = useState<string>(''); // Message state

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    setLoginMessage(''); // Reset the message before attempting to log in

    mutate(data, {
      onSuccess: () => {
        setLoginMessage('User logged in successfully!');
      },
      onError: (error: any) => {
        setLoginMessage('Email or password is incorrect.');
      },
    });
  };

  return (
    <div  className='sectionTag'>
      <form onSubmit={handleSubmit(onSubmit)} className='formSection'>
        <h2 className='h2Tag'>Welcome back!</h2>
        <Input placeholder="UID" registration={register('email')} error={errors.email?.message} type="email" />
        <Input placeholder="Password"  registration={register('password')} error={errors.password?.message} type="password" />
        {loginMessage && <p>{loginMessage}</p>}
        {error && <p >{error.message}</p>}
        <Button type="submit" disabled={isPending}>{isPending ? 'Logging in...' : 'Login'}</Button>
      </form>
    </div>
  );
};
