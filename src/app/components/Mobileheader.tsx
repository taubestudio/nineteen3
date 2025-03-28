'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Mobileheader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  // Funktion för att visa/gömma menyn
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Funktion för att stänga menyn
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className='mobile-header'>
        <svg 
          onClick={toggleMenu} // Lägg till onClick-event
          className="menu-icon" // Lägg till en klass för styling (om du vill)
          width="25" 
          height="17" 
          viewBox="0 0 25 17" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={{ cursor: 'pointer' }} // Gör ikonen klickbar
        >
          <line y1="0.5" x2="25" y2="0.5" stroke="black"/>
          <line y1="8.5" x2="25" y2="8.5" stroke="black"/>
          <line y1="16.5" x2="25" y2="16.5" stroke="black"/>
        </svg>

        <Link href="/">
          <Image src="/nineteen-logo-black.svg" className="logo" alt="Logo" width={100} height={50} />
        </Link>

        <div>
          <li className={`header-item ${isActive('/sv') ? 'active' : ''}`}>
            <a href="/sv" rel="noopener noreferrer">
              <span>SE</span>
            </a>
          </li>
          <li>/</li>
          <li className={`header-item ${isActive('/en') ? 'active' : ''}`}>
            <a href="/en" rel="noopener noreferrer">
              <span>EN</span>
            </a>
          </li>
        </div>

        <div className={`menu ${isMenuOpen ? 'show-menu' : 'hide-menu'}`}>
          <nav>
            <ul>
              <li className={`header-item ${isActive('/sv/projekt') ? 'active' : ''}`}>
                <Link href="/sv/projekt" replace onClick={closeMenu}>Projekt</Link>
              </li>
              <li className={`header-item ${isActive('/sv/techniques') ? 'active' : ''}`}>
                <Link href="/sv/techniques" replace onClick={closeMenu}>Trycktekniker</Link>
              </li>
              <li className={`header-item ${isActive('/sv/about') ? 'active' : ''}`}>
                <Link href="/sv/about" replace onClick={closeMenu}>Om Oss</Link>
              </li>
              <li className={`header-item ${isActive('/sv/contact') ? 'active' : ''}`}>
                <Link href="/sv/contact" replace onClick={closeMenu}>Kontakt</Link>
              </li>
            </ul>
          </nav>
        </div>
    </header>
  );
}