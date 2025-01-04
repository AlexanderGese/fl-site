import React from 'react';
import { Link } from 'react-router-dom';
import { useConfig } from '../hooks/useConfig';

export default function Footer() {
  const { copyright, links } = useConfig('footer.legal');
  
  return (
    <footer className="bg-white border-t border-primary/10">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-primary/60 font-caption">{copyright}</p>
          <div className="flex space-x-6">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.url}
                className="text-primary/60 hover:text-gold transition-colors font-caption"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}