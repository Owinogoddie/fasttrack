// components/admin/Footer.tsx
interface FooterProps {
  className?: string
}

export default function Footer({ className = '' }: FooterProps) {
  return (
    <footer className={`mt-auto border-t border-secondary-200 bg-white py-4 ${className}`}>
      <div className="container-custom">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-secondary-600 md:flex-row">
          <p>© 2024 FastTrack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary-600">Privacy Policy</a>
            <a href="#" className="hover:text-primary-600">Terms of Service</a>
            <a href="#" className="hover:text-primary-600">Support</a>
          </div>
        </div>
      </div>
    </footer>
  )
}