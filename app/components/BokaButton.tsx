'use client'
import { useBooking } from './BookingContext'

interface Props {
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
  children: React.ReactNode
}

export default function BokaButton({ className, style, onClick, children }: Props) {
  const { open } = useBooking()
  return (
    <button
      className={className}
      style={style}
      onClick={() => { onClick?.(); open() }}
    >
      {children}
    </button>
  )
}
