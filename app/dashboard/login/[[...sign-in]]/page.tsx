"use client"
import { Input } from '@headlessui/react';
import clsx from 'clsx';
import React, { FormEvent, useEffect, useState } from 'react'
import { useSignIn } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { getUserName } from '@/lib/User';
const Page = () => {
  useEffect(() => {
    getUserName().then(user => {
      if (user !== "undefined") router.push(`/dashboard/${user}`);

    }
    );

  })
  const [error, setError] = useState("");
  const router = useRouter();
  const { setActive, isLoaded, signIn } = useSignIn();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const loginHandler = async (e: FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;
    if (signIn) {
      try {
        const signInAttempt = await signIn.create({
          identifier: formData.email,
          password: formData.password
        });
        if (signInAttempt.status === 'complete') {

          setActive({
            session: signInAttempt.createdSessionId,
            organization: null
          })
          getUserName().then(user => router.push(`/dashboard/${user}`));
        }
      } catch (err) {
        setError(err.errors[0].message);
      }
    }
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    if (type === 'file') {
      const file = e.target.files?.[0] || null;
      setFormData(prev => ({ ...prev, [name]: file }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <>
      <main className="h-screen flex flex-col items-center justify-center  bg-[linear-gradient(0deg,_rgba(125,139,47,1)_0%,_rgba(64,120,32,1)_100%)]">
        {error &&
          <div className='bg-red-700/35 p-3 text-white/50'>
            {error}
          </div>
        }
        <form onSubmit={loginHandler} className='flex flex-col '>
          <div className='h-[400px] w-[400px] p-5 bg-[linear-gradient(0deg,_rgba(110,150,40,1)_0%,_rgba(80,110,45,1)_100%)] rounded-xl [box-shadow:rgba(17,_17,_26,_0.1)_0px_4px_16px_0px_inset,_rgba(17,_17,_26,_0.05)_0px_8px_32px_0px]'>
            <label className={
              clsx(
                'text-4xl inline-flex mt-3  rounded-lg border-none bg-white/5 py-1.5 px-3  text-white',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
              )
            }>
              Giriş Yap
            </label>



            <Input
              required
              placeholder='Email'
              name='email'
              type='email'
              value={formData.email}
              onChange={handleInputChange}
              className={clsx(
                'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
              )}
            />
            <Input
              placeholder='Password'
              name='password'
              type='password'
              value={formData.password}
              onChange={handleInputChange}
              className={clsx(
                'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
              )}
            />


            <button type="submit" className={
              clsx(
                ' mt-3 flex rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
              )
            } >Kayıt Ol</button>

          </div>
        </form>
      </main >
    </>
  );
}

export default Page