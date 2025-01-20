'use client'

import React, { use, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { EditUserProfileSchema } from '@/lib/types'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

type Props = {}

const ProfileForm = (props: Props) => {
    const [isLoading, setIsLoading] = useState(false)
    const form = useForm<z.infer<typeof EditUserProfileSchema>>({
        mode: 'onChange',
        resolver: zodResolver(EditUserProfileSchema),
        defaultValues: {
            name: "",
            email: ""
        }
    })
    return <Form {...form}>
        <form className='flex flex-col gap-6' onSubmit={() => { }}>
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-lg">User Full Name</FormLabel>
                        <FormControl>
                            <Input
                                {...field}
                                disabled={true}
                                placeholder="Name"
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-lg">Email</FormLabel>
                        <FormControl>
                            <Input
                                {...field}
                                disabled={true}
                                placeholder="Email"
                                type="email"
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <Button type='submit' className='self-start hover:bg-[#2F006B] hover:text-white hover:border-1'>
                {isLoading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Saving
                    </>
                ) : (
                    'Save User Settings'
                )}
            </Button>
        </form>
    </Form>
}

export default ProfileForm