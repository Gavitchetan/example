"use client"
import Button from '@/app/components/Button'
import Input from '@/app/components/input/input'
import React, { useCallback, useState } from 'react'
import { FieldValues, SubmitErrorHandler, useForm } from 'react-hook-form'
type Varients = "LOGIN" | "REGISTER"
const Auth = () => {
    const [varient, setVarient] = useState<Varients>("LOGIN")
    const [isLoading, setIsloading] = useState(false);
    const toggleVarient = useCallback(() => {
        if (varient == "LOGIN") {
            setVarient("REGISTER")
        }
        else {
            setVarient('LOGIN')
        }
    }, [varient])

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            age: 0
        }
    });
    const onSubmit: SubmitErrorHandler<FieldValues> = (data) => {
        setIsloading(true)

        if (varient == "REGISTER") {
            //  Register
        }
        if (varient == "LOGIN") {
            //  Login
        }
    }
    const socialAction = (action: string) => {
        setIsloading(true)



        // nextAuth socialSign
    }
    return (
        <main className=' mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
            <div className="
             bg-white 
             px-4 py-8
              shadow-sm 
              sm:rounded-lg
               sm:px-10">
                <form
                    className="
                     space-y-6"
                    onSubmit={handleSubmit(onSubmit)
                    }>
                    {
                        varient === "REGISTER" && <Input
                            required={true}
                            label='Name'
                            id='name'
                            errors={errors}
                            register={register}
                            placeHolder='Your Name'
                        />

                    }
                    <Input
                        required={true}
                        label='Email -Address'
                        id='email'
                        disabled={false}
                        type='text'
                        placeHolder='Email'
                        errors={errors}
                        register={register}
                    />
                    <Input
                        required={true}
                        label='password'
                        id='password'
                        placeHolder='Password'
                        disabled={false}
                        type='password'
                        errors={errors}
                        register={register}
                    />
                    <div className="">
                        <Button />
                    </div>

                </form>
            </div>
        </main>
    )
}

export default Auth


