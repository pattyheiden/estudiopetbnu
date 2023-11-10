'use client'
import React, { useState } from 'react';
import { Checkbox as RadixCheckbox } from '@radix-ui/react-checkbox';

export function Consent() {
    const [checked, setChecked] = useState(false);
    return (
        <div className='flex flex-col pt-2'>
            <div>
                <input type="checkbox" className='h-4 w-4  accent-brown200 text-white' />
                <label htmlFor="" className='pl-2 text-brown400 font-normal text-base'>Li e aceito os termos de uso e política de privacidade.</label>
            </div>

            <div>
                <input type="checkbox" className='h-4 w-4  accent-brown200 text-white' />
                <label htmlFor="" className='pl-2 text-brown400 font-normal text-base'>Estou ciente de que as renovações da assinatura ocorrem de forma automática.</label>
            </div>
        </div>
    )
}