import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  registration: UseFormRegisterReturn;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ registration, error, ...props }) => (
  <div >
    <input
      {...registration}
      {...props}
      className='inputTag'
    />
    {error && <p>{error}</p>}
  </div>
);
