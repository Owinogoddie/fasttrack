import Link from 'next/link'
import { CONTACT_INFO, NAVIGATION_LINKS, SOCIAL_LINKS } from '@/lib/constants'

import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin 
} from 'react-icons/fa'

const socialIcons = {
  facebook: FaFacebook,
  twitter: FaTwitter,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
}

export function Footer() {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">FastTrack</h3>
            <p className="text-secondary-300">
              Your trusted partner in global logistics and courier services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-secondary-300">
              <li>{CONTACT_INFO.address}</li>
              <li>{CONTACT_INFO.phone}</li>
              <li>{CONTACT_INFO.email}</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {Object.entries(SOCIAL_LINKS).map(([platform, url]) => {
                const Icon = socialIcons[platform as keyof typeof socialIcons]
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-300 hover:text-white transition-colors"
                  >
                    <span className="sr-only">{platform}</span>
                    <Icon className="w-6 h-6" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-secondary-700">
          <p className="text-center text-secondary-300">
            © {new Date().getFullYear()} FastTrack Courier. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}