import BrandLogo from '@/common/brand-logo';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Youtube, Mail, ArrowRight } from 'lucide-react';

const footerLinks = {
  products: [
    { label: 'Colour Masterbatch', href: '#products' },
    { label: 'White Masterbatch', href: '#products' },
    { label: 'Black Masterbatch', href: '#products' },
    { label: 'Additive Masterbatches', href: '#products' },
    { label: 'Custom Solutions', href: '#products' },
  ],
  industries: [
    { label: 'Packaging', href: '#industries' },
    { label: 'Pipes & Agriculture', href: '#industries' },
    { label: 'Wire & Cable', href: '#industries' },
    { label: 'Healthcare', href: '#industries' },
    { label: 'Automotive', href: '#industries' },
  ],
  company: [
    { label: 'About Us', href: '#' },
    { label: 'Technology', href: '#technology' },
    { label: 'Sustainability', href: '#sustainability' },
    { label: 'Careers', href: '#' },
    { label: 'News', href: '#' },
  ],
  resources: [
    { label: 'Technical Data Sheets', href: '#resources' },
    { label: 'Case Studies', href: '#' },
    { label: 'Webinars', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Contact Sales', href: '#contact' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export const Footer = () => {
  return (
    <footer className='bg-primary text-primary-foreground'>
      {/* Newsletter Section */}
      {/* <div className="border-b border-primary-foreground/10">
        <div className="container-custom py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-h3 text-primary-foreground mb-2">
                Stay Updated
              </h3>
              <p className="text-body text-primary-foreground/70">
                Subscribe to our newsletter for industry insights, product updates, and technical resources.
              </p>
            </div>
            <form className="flex gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-foreground/50" />
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-cta/50 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-cta text-cta-foreground px-6 py-3 rounded-lg font-semibold hover:bg-cta/90 transition-colors"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div> */}

      {/* Main Footer */}
      <div className='container-custom py-12 lg:py-16'>
        <div className='grid md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12'>
          {/* Brand */}
          <div className='lg:col-span-2'>
            <a href='/' className='inline-flex items-center gap-2 mb-4'>
              {/* <div className="w-10 h-10 rounded-lg bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-bold text-lg">PM</span>
              </div>
              <div>
                <span className="font-bold text-lg text-primary-foreground">Altchemix</span>
                <span className="block text-[10px] text-primary-foreground/60 font-technical tracking-wider uppercase">
                  Masterbatch Solutions
                </span>
              </div> */}
              <BrandLogo variant='light' />
            </a>
            <p className='text-caption text-primary-foreground/70 mb-6 max-w-xs'>
              Global leader in precision masterbatch and additive solutions for
              the plastics industry. Trusted by manufacturers worldwide since
              1998.
            </p>
            <div className='flex gap-3'>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className='w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors'
                >
                  <social.icon className='w-5 h-5 text-primary-foreground' />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className='font-semibold text-primary-foreground mb-4'>
              Products
            </h4>
            <ul className='space-y-2'>
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className='text-caption text-primary-foreground/70 hover:text-primary-foreground transition-colors'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className='font-semibold text-primary-foreground mb-4'>
              Industries
            </h4>
            <ul className='space-y-2'>
              {footerLinks.industries.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className='text-caption text-primary-foreground/70 hover:text-primary-foreground transition-colors'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className='font-semibold text-primary-foreground mb-4'>
              Company
            </h4>
            <ul className='space-y-2'>
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className='text-caption text-primary-foreground/70 hover:text-primary-foreground transition-colors'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className='font-semibold text-primary-foreground mb-4'>
              Resources
            </h4>
            <ul className='space-y-2'>
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className='text-caption text-primary-foreground/70 hover:text-primary-foreground transition-colors'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-primary-foreground/10'>
        <div className='container-custom py-6'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-caption text-primary-foreground/60'>
              © {new Date().getFullYear()} Altchemix. All rights reserved.
            </p>
            <div className='flex flex-wrap gap-4 text-caption text-primary-foreground/60'>
              <a
                href='#'
                className='hover:text-primary-foreground transition-colors'
              >
                Privacy Policy
              </a>
              <a
                href='#'
                className='hover:text-primary-foreground transition-colors'
              >
                Terms of Service
              </a>
              <a
                href='#'
                className='hover:text-primary-foreground transition-colors'
              >
                Cookie Policy
              </a>
              <a
                href='#'
                className='hover:text-primary-foreground transition-colors'
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
