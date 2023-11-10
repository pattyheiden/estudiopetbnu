import React, { useState } from 'react';
import { LuEye, LuEyeOff } from "react-icons/lu";

interface PasswordInputProps {
    value: string;
    onChange: (value: string) => void;
}

export function PasswordInput({ value, onChange }: PasswordInputProps) {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className='flex items-center'>
            <input
                type={showPassword ? 'text' : 'password'}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            <div
                onClick={() => setShowPassword(!showPassword)}
                style={{ cursor: 'pointer', marginLeft: '8px' }}
            >
                {showPassword ? <LuEyeOff /> : <LuEye />}
            </div>
        </div>
    )
}