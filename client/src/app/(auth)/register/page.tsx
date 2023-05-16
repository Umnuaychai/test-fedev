"use client"
import MyModal from '@/components/Modal';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form'

interface IFormInput {
  firstname: string
  lastname: string
  bank: string
  bankNumber: number
}

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>()
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState()
  const [ptLanguage, setPtLanguage] = useState<any>()

  const isThaiorEngLanguage = (value: string) => {
    const thaiPattern = /^[ก-ฮ\s]+$/
    const engPattern = /^[a-zA-z\s]+$/
    if (thaiPattern.test(value)) {
      setPtLanguage(thaiPattern)
    }else if(engPattern.test(value)){
      setPtLanguage(engPattern)
    }
    return thaiPattern.test(value) || engPattern.test(value);
  }

  const onSubmit = (data: any) => {
    setIsOpen(true)
    setData(data)
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md ">
        <h1 className="text-2xl text-center font-bold">Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="firstname" className="block text-gray-700 font-bold mb-2">
              Firstname
            </label>
            <input
              type="text"
              className={`w-full border ${errors.firstname ? 'border-red-500' : 'border-gray-300'} rounded-md px-4 py-2`}
              {...register('firstname', {
                required: 'Phone number is required',
                validate: (value) => isThaiorEngLanguage(value) || 'Thai or English name',
              })}
            />
            {errors.firstname && (<span className="text-red-500">{errors.firstname.message}</span>)}
          </div>
          <div className="mb-4">
            <label htmlFor="lastname" className="block text-gray-700 font-bold mb-2">
              Lastname
            </label>
            <input
              type="text"
              className={`w-full border ${errors.lastname ? 'border-red-500' : 'border-gray-300'} rounded-md px-4 py-2`}
              {...register('lastname', {
                required: 'Lastname is required',
                validate: (value) => ptLanguage.test(value) || 'Language does not match',
              })}
            />
            {errors.lastname && (<span className="text-red-500">{errors.lastname.message}</span>)}
          </div>
          <div className="mb-4">
            <label htmlFor="bank" className="block text-gray-700 font-bold mb-2">
              Bank Account
            </label>
            <div className='flex w-full border border-gray-300 rounded-md'>
              <select
                {...register("bank")}
                className='px-4 py-2 rounded-md outline-none'
              >
                <option value="Bangkok">Bangkok</option>
                <option value="Kasikorn">Kasikorn</option>
                <option value="SCB">SCB</option>
              </select>
              <input
                type="text"
                className={`w-full px-4 py-2 rounded-md outline-none ${errors.lastname ? 'border-red-500' : 'border-gray-300'}`}
                // className={`w-full border ${errors.lastname ? 'border-red-500' : 'border-gray-300'} rounded-md px-4 py-2`}
                {...register('bankNumber', {
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[0-9]*$/,
                    message: 'Only Numbers',
                  },
                  maxLength: {
                    value: 10,
                    message: 'Number should not exceed 10 characters',
                  },
                })}
              />
            </div>
            {errors.bankNumber && (<span className="text-red-500">{errors.bankNumber.message}</span>)}
          </div>
          <div className='flex justify-center'>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
            >
              Sign Up
            </button>
          </div>
        </form>
        <hr className="h-1 border-2 mx-auto my-4 border-gray-500" />
        <div className='flex justify-center text-center'>
          <Link
            href='/login'
            type="submit"
            className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded w-full"
          >
            Sign In
          </Link>
        </div>
      </div>
      <MyModal data={data} isOpen={isOpen} setIsOpen={(bool: any) => setIsOpen(bool)} />
    </div>
  )
}