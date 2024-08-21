'use client';
import { zodResolver } from "@hookform/resolvers/zod"
import { Control, FieldPath } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { formSchema } from "@/lib/utils";

interface CustomFormInputs {
    control: Control<z.infer<typeof formSchema>>,
    label: string,
    name: FieldPath<z.infer<typeof formSchema>>,
    placeholder: string
}


const CustomInput = ({control, label, name, placeholder} : CustomFormInputs) => {

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className='form-item'>
                    <FormLabel className='form-label'>
                        {label}
                    </FormLabel>
                    <div className='flex w-full flex-col'>
                        <FormControl>
                            <Input placeholder={placeholder} type={name === 'password' ? 'password' : 'text'} className='input-class' {...field} />
                        </FormControl>
                        <FormMessage className='form-message mt-2' />
                    </div>
                </div>
            )}
        />
    )
}

export default CustomInput
