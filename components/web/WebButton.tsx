"use client"
import Link from 'next/link'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

const WebButton = ({
  children, icon, color = 'red', href, className
}: {
  children: ReactNode,
  icon?: ReactNode,
  color?: 'red' | 'orange' | 'white',
  href?: string,
  className?: string
}) => {

  const classColor = color == 'red' ? 'bg-red-600 text-white hover:bg-red-500 border-red-600' 
    : color == 'orange' ? 'bg-orange-600 text-white hover:bg-orange-500 border-orange-600'
    : 'border-gray-300 bg-white hover:bg-gray-200'

  const commonClasses = twMerge(`${icon ? 'inline-flex space-x-2 items-center pl-2 pr-4 py-1.5' : 'inline px-4 py-1.5'} 
    ${twMerge('rounded-lg border border-gray-300 bg-white hover:bg-gray-200 font-semibold', classColor)}
    `, className)

  return (
    href ? 
    <Link href={href} className={commonClasses}>
      {icon ? icon : null}
      <span>{children}</span>
    </Link>
    : <button className={commonClasses}>
      {icon ? icon : null}
      <span>{children}</span>
    </button>
  )
}

const Button = ({children}: {children: ReactNode}) => {
  return (
    <button>{children}</button>
  )
}

export default WebButton