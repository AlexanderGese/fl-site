import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

export default function NavLink({ to, children }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`font-caption ${
        isActive ? 'text-gold' : 'text-primary'
      } hover:text-beige transition-colors`}
    >
      {children}
    </Link>
  );
}