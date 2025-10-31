import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    services: {
      title: 'Services',
      links: [
        'Web Development',
        'Mobile Apps',
        'AI Solutions',
        'System Modernization',
        'Consulting'
      ]
    },
    company: {
      title: 'Company',
      links: [
        'About Us',
        'Our Process',
        'Portfolio',
        'Insights',
        'Careers'
      ]
    },
    support: {
      title: 'Support',
      links: [
        'Contact Us',
        'Documentation',
        'Help Center',
        'Privacy Policy',
        'Terms of Service'
      ]
    },
    connect: {
      title: 'Connect',
      links: [
        'LinkedIn',
        'Twitter',
        'GitHub',
        'Dribbble',
        'Newsletter'
      ]
    }
  };

  return (
    <footer className="relative bg-[#1A1A2E] mt-12 border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-white font-bold text-xl">Nexus Studio</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Architects of your digital future. We combine creation, innovation, and security into a cohesive ecosystem.
            </p>
            <div className="flex space-x-4">
              {['LinkedIn', 'Twitter', 'GitHub'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <span className="text-white text-sm">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-white font-semibold text-lg mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Nexus Studio. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;