import React from 'react';
import Logo from './Logo';
import NavLink from './NavLink';

export default function Navbar() {
  return (
    <header className="bg-white border-b border-primary/10">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />
        
        <div className="hidden md:flex space-x-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/studio">Studio in Action</NavLink>
          <NavLink to="/design">Design</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </nav>
    </header>
  );
}