"use client"
import { Input } from '@headlessui/react';
import clsx from 'clsx';

import { MdOutlineFileUpload } from "react-icons/md";
import React, { FormEvent, useEffect, useState } from 'react'
import { registerPrisma } from '@/lib/registerOrg';
import { useSignUp } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { getUserName } from '@/lib/User';
const Page = () => {
  useEffect(() => {
    getUserName().then(user => {
      if (user !== "undefined") router.push(`/dashboard/${user}`);

    }
    );

  })
  const router = useRouter();
  const { setActive, isLoaded, signUp } = useSignUp();
  const [emailActive, setEmailActive] = useState(false);
  const [error, setError] = useState("");
  const [email_code, setEmail_Code] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    address: '',
    email: '',
    password: '',
    profilePicture: null as File | null
  });
  const registerHandler = async (e: FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;
    if (signUp)
      try {
        const signUpAttempt = await signUp.create({
          emailAddress: formData.email,
          password: formData.password,
          username: formData.name,
        });
        if (signUpAttempt.status === 'complete') {
          alert("Başarıyla kayıt oldunuz!");
        }
        await signUp.prepareEmailAddressVerification({ strategy: "email_code" })
        setEmailActive(true);
      } catch (err) { 
        setError(err.errors[0].message);
      };
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
  const pressCode = async (e: FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;
    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: email_code
      })
      if (completeSignUp.status !== "complete") {
        console.log(JSON.stringify(completeSignUp, null, 2));
      }
      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId })
        registerPrisma(formData);

        router.push(`/dashboard/${formData.name}`);
      }
    } catch (err) {
      setError(err.errors[0].message);
    }
  }


  return (
    <>
      <main className="h-screen flex flex-col items-center relative justify-center  bg-[linear-gradient(0deg,_rgba(125,139,47,1)_0%,_rgba(64,120,32,1)_100%)]">
        {emailActive && <div className='flex flex-col absolute justify-start right-5 top-5 p-5 text-white bg-gray-300/5 rounded-xl'>
          <label>Email-e gelen kodu gir</label>
          <input
            type='text'
            maxLength={6}
            className={
              clsx(
                'tracking-[25px] text-clip outline-none hover:appearance-none focus:appearance-none appearance-noneinline-flex mt-3  rounded-lg border-none bg-white/5 py-1.5 px-3  text-white',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
              )
            } value={email_code} onChange={e => setEmail_Code(e.target.value)} />
          <button onClick={pressCode} className={
            clsx(
              ' mt-3 flex rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
            )
          }>Kontrol Et</button>
        </div>}
        {error &&
          <div className='bg-red-700/35 p-3 text-white/50'>
            {error}
          </div>
        }
        <form onSubmit={registerHandler} className='flex flex-col '>
          <div className='h-[400px] w-[400px] p-5 bg-[linear-gradient(0deg,_rgba(110,150,40,1)_0%,_rgba(80,110,45,1)_100%)] rounded-xl [box-shadow:rgba(17,_17,_26,_0.1)_0px_4px_16px_0px_inset,_rgba(17,_17,_26,_0.05)_0px_8px_32px_0px]'>
            <label className={
              clsx(
                'text-4xl inline-flex mt-3  rounded-lg border-none bg-white/5 py-1.5 px-3  text-white',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
              )
            }>
              Kayıt ol
            </label>
            <Input
              required
              placeholder='Username'
              name='name'
              type='text'
              value={formData.name}
              onChange={handleInputChange}
              className={clsx(
                'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
              )}
            />
            <Input
              required
              placeholder='Slug'
              name='slug'
              type='text'
              value={formData.slug}
              onChange={handleInputChange}
              className={clsx(
                'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
              )}
            />
            <Input
              required
              placeholder='Address'
              name='address'
              type='text'
              value={formData.address}
              onChange={handleInputChange}
              className={clsx(
                'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
              )}
            />
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
            <div className='flex justify-between'>

              <input

                type='file'
                name="profilePicture"
                id='file'
                onChange={handleInputChange}
                className='apparence-none hidden w-0 h-0'
              />
              <label htmlFor='file' className={
                clsx(
                  'mb-6 inline-flex mt-3  rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                  'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                )
              }>
                Profile Picture<MdOutlineFileUpload size={24} />
              </label>

              <button type="submit" className={
                clsx(
                  ' mt-3 flex rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                  'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                )
              } >Kayıt Ol</button>
            </div>
          </div>
        </form>
      </main>
    </>
  );
}

export default Page