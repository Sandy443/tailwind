import React from "react";

type ButtonLevel = 'primary' | 'secondary' | 'tertiary';
type ButtonVariant = 'filled' | 'outlined';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    level?: ButtonLevel;
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    level = 'primary',
    variant = 'filled',
    size = 'md',
    className = '',
    children,
    ...props
}) => {

    const baseStyles = 'font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-transform duration-300 ease-in-out';

    const sizeStyles = {
        sm: 'py-1 px-2 text-xs md:text-sm',
        md: 'py-2 px-4 text-sm md:text-base',
        lg: 'py-3 px-6 text-base md:text-lg'
    }

    const colorStyles = {
        primary: {
            filled: 'bg-cta hover:bg-cta-hover text-textColor hover:scale-105', 
            outlined: 'bg-transparent hover:bg-blue-100 text-blue-500 border-blue-500 border focus:ring-blue-400'
        },
        secondary: {
            filled: 'bg-gray-500 hover:bg-gray-600 text-white focus:ring-gray-400',
            outlined: 'bg-transparent hover:bg-gray-100 text-gray-500 border-gray-500 border focus:ring-gray-400'
        },
        tertiary: {
            filled: 'bg-white text-black focus:ring-gray-400 shadow-md hover:shadow-lg',
            outlined: 'bg-transparent hover:bg-gray-100 text-gray-500 border-gray-500 border focus:ring-gray-400'
        }
    }

    const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${colorStyles[level][variant]} ${className}`

    return (
        <button className={`rounded-full ${buttonStyles}`} {...props}>
            {children}
        </button>
    );
};
