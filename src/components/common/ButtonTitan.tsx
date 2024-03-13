import React, { ButtonHTMLAttributes } from 'react'

interface ButtonTitanProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline'
  size?: 'large' | 'middle' | 'small'
}
const ButtonTitan = ({ variant = 'primary', children, size = 'large', className = '', ...rest }: ButtonTitanProps) => {
  return (
    <button className={`button-titan ${variant} ${size} ${className}`} {...rest}>
      {children}
    </button>
  )
}

export default ButtonTitan
