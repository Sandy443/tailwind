import React from 'react';
import Fuck from '@assets/images/logo.svg?react'

interface LogoProps {
    width?: string;
    height?: string;
    className?: string;
}

const Logo: React.FC<LogoProps> = ({
    width = 'w-auto',
    height = 'h-auto',
    className = '',
}) => {
  return (
    <div className={`${width} ${height} ${className}`}>
        <Fuck />
    </div>
  )
}

export default Logo;