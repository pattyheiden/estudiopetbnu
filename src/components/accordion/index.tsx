'use client'
import { useState } from 'react';
import { LuChevronUp, LuChevronDown } from 'react-icons/lu';

interface AccordionProps {
    title: string
    status: string
    // content: string;
}

export function Accordion({ title, status }: AccordionProps) {
    const [isOpen, setIsOpen] = useState(false)    

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='flex flex-col mt-3'>
            <div className="flex w-[1000px] py-30 rounded-lg border border-zinc-500 justify-between" onClick={toggleAccordion}>
                <span className='text-base font-semibold pl-4'>{title}</span>                
                {
                    status === 'PAGO' ? 
                    <span className='mr-4'><strong>{status}</strong></span>
                    :
                    <span className='mr-4 text-red-600'><strong>{status}</strong></span>
                }
                {/* <span className='mr-4'>{isOpen ? <LuChevronUp className='h-6 w-6' /> : <LuChevronDown className='h-6 w-6' />}</span> */}
            </div>
            {/* <div className='bg-white mt-2 rounded-lg border border-brown200/30'>
                {isOpen && (
                    <div className=" p-3">
                        <p className='font-normal '>{content}</p>
                    </div>
                )}
            </div> */}
        </div>
    );
};
