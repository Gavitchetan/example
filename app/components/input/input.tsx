"use client"
import clsx from 'clsx'
import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

interface InputProps {
    label: string,
    id: string,
    type?: string,
    required: boolean,
    register: UseFormRegister<FieldValues>
    errors: FieldErrors
    disabled?: boolean,
    placeHolder: string
}
const Input: React.FC<InputProps> = ({ placeHolder, label, id, type, required, register, errors, disabled }) => {
    return (
        <div>
            <label htmlFor={id} className=' block text-sm font-medium leading-6 text-gray-900
            '>{label}</label>
            <div className=' mt-2'>
                <input
                    {...register(id, { required })}
                    id={id}
                    autoComplete={id}
                    type={type}
                    disabled={disabled}
                    placeholder={placeHolder}
                    className={clsx(` form-input block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus:ring-inset focus-within:ring-sky-600 sm:text-sm sm:leading-6`, errors[id] && 'focus:ring-rose-700', disabled && "opacity-50 cursor-default")} />
            </div>
        </div>
    )
}

export default Input