export interface NavLink {
    name: string
    href: string
  }
  
  export interface Service {
    title: string
    description: string
    icon: string
    features: string[]
  }
  
  export interface TestimonialType {
    content: string
    author: string
    position: string
    image: string
  }
  
  export interface TrackingResult {
    trackingNumber: string
    status: string
    location: string
    timestamp: string
    estimatedDelivery: string
  }
  
  export interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'outline'
    size?: 'sm' | 'md' | 'lg'
    className?: string
    children: React.ReactNode
    onClick?: () => void
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset'
  }