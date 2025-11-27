import Link from 'next/link';
import { CountryConfig } from './CountryConfig';

interface InternationalFooterProps {
  config: CountryConfig;
}

export function InternationalFooter({ config }: InternationalFooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Phantom Healthcare</h3>
            <p className="text-sm text-gray-400 mb-4">{config.name}</p>
            <address className="text-sm text-gray-400 not-italic">
              {config.address.line1}<br />
              {config.address.line2 && <>{config.address.line2}<br /></>}
              {config.address.city}, {config.address.state}<br />
              {config.address.country} {config.address.postalCode}
            </address>
          </div>

          {/* Dynamic Footer Link Sections */}
          {config.footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact & Map */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📞 {config.phone}</p>
              <p>✉️ {config.email}</p>
              <p>🕒 {config.businessHours}</p>
            </div>

            {/* Google Map Embed */}
            <div className="mt-4">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10000!2d${config.mapCoordinates.lng}!3d${config.mapCoordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1700000000000`}
                width="100%"
                height="150"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Phantom Healthcare ${config.name} Location`}
              />
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-wrap justify-between items-center">
          <div className="flex gap-4">
            {config.socialLinks.facebook && (
              <a href={config.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                Facebook
              </a>
            )}
            {config.socialLinks.linkedin && (
              <a href={config.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                LinkedIn
              </a>
            )}
            {config.socialLinks.twitter && (
              <a href={config.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                Twitter
              </a>
            )}
            {config.socialLinks.youtube && (
              <a href={config.socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                YouTube
              </a>
            )}
          </div>

          {/* Back to India site link */}
          <div className="mt-4 md:mt-0">
            <Link href="/" className="text-sm text-gray-400 hover:text-white">
              🇮🇳 Visit India Site
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-950 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Phantom Healthcare {config.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
