'use client'
import { useBooking } from './BookingContext'

interface Props {
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}

export default function BokaButton({ className, style, children }: Props) {
  const { open } = useBooking()
  return (
    <button className={className} style={style} onClick={open}>
      {children}
    </button>
  )
}
