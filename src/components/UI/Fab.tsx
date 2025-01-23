import React from "react";

type FabSize = 'md' | 'lg' | 'xl';

interface FabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: FabSize;
    className?: string;
}

const Fab: React.FC<FabProps> = ({
    size = 'md',
    className = '',
    children,
    ...props 
}) => {
    
    const baseStyles = 'rounded-full z-100 shadow-lg';

    const sizeStyles = {
        md: 'p-2 sm:p-3',
        lg: 'p-3',
        xl: 'p-4',
    };    

    const styles = `${baseStyles} ${sizeStyles[size]}`;

    return (
        <button className={`${styles} ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Fab;

