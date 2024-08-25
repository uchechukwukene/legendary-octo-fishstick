'use client';

import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useMutation } from '@tanstack/react-query';
import { SigninFormSchema } from '../hooks';

const Login = () => {
  const { data } = useSession();
  console.log(data);

  const { mutate, isPending, error, isError, isSuccess } = useMutation({
    mutationFn: async ({ email, password }: SigninFormSchema) => {
      const response = await signIn('credentials', {
        email,
        password,
        redirect: false, // Ensure no redirect occurs
      });

      // Check response for errors or success
      if (response?.error) {
        throw new Error(response.error);
      }

      return response; // Return response for onSuccess handler
    },
    onSuccess: (data) => {
      // Handle success
      console.log('Sign in successful:', data);
      // Optionally, redirect or update UI
    },
    onError: (error: Error) => {
      // Handle error
      console.error('Sign in failed:', error.message);
    },
  });

  // Login handler
  const handleLogin = () => {
    mutate({
      email: 'trial_org2@yopmail.com',
      password: 'Qwerty@123',
    });
  };

  const handleSignOut = async () => {
    await signOut({
      redirect: false, // Change to true if you want to redirect after signing out
    });
    // Optionally, you can perform additional actions here after sign out
    console.log('User signed out');
  };

  return (
    <div className="flex flex-col gap-5">
      <button disabled={isPending} onClick={handleLogin}>
        Login user
      </button>
      {isError && <p>Error: {error?.message}</p>}
      {isSuccess && <p>Login successful!</p>}

      <button disabled={isPending} onClick={handleSignOut}>
        Logout
      </button>
    </div>
  );
};

export default Login;
