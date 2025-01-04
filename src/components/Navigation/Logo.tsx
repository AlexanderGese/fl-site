import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/home/codealex/Desktop/fl/project/src/data/logo.svg'; // Der Pfad zu Ihrem SVG-Logo

export default function Logo() {
    return (
        <Link to="/" className="flex items-center space-x-2 group">
            <img
                src={logo}
                alt="Logo"
                className="h-8 w-8 transition-transform group-hover:scale-110" // Styling für das Logo
            />
            <span className="font-display text-xl text-primary tracking-wider group-hover:text-gold transition-colors">
        FMG Interior Architecture
      </span>
        </Link>
    );
}
