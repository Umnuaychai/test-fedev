"use client"
import MyModal from '@/components/Modal';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form'

interface IFormInput {
  username: string
  password: string
}

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>()
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState()

  const onSubmit = (data: any) => {
    setIsOpen(true)
    setData(data)
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md ">
        <h1 className="text-2xl text-center font-bold">Sign in</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              className={`w-full border ${errors.username ? 'border-red-500' : 'border-gray-300'} rounded-md px-4 py-2`}
              {...register('username', {
                required: 'Phone number is required',
                pattern: {
                  value: /(06|08|09)[0-9]*$/,
                  message: 'Number starting with 06, 08, or 09',
                },
                maxLength: {
                  value: 10,
                  message: 'Number should not exceed 10 characters',
                },
              })}
            />
            {errors.username && (<span className="text-red-500">{errors.username.message}</span>)}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              className={`w-full border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md px-4 py-2`}
              {...register('password', {
                required: 'Password is required',
                pattern: {
                  value: /^[A-Z][a-zA-Z0-9\s]*$/,
                  message: 'First letter in uppercase',
                }
              })}
            />
            {errors.password && (<span className="text-red-500">{errors.password.message}</span>)}
          </div>
          <div className='flex justify-center'>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
            >
              Sign in
            </button>
          </div>
        </form>
        <hr className="h-1 border-2 mx-auto my-4 border-gray-500" />
        <div className='flex justify-center text-center'>
          <Link
            href='/register'
            type="submit"
            className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded w-full"
          >
            Sign up
          </Link>
        </div>
      </div>
      <MyModal data={data} isOpen={isOpen} setIsOpen={(bool:any) => setIsOpen(bool) }/>
    </div>
  )
}