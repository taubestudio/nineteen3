'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { getDictionary, getLocaleFromPathname } from '../i18n';

export default function Mobileheader() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const dictionary = getDictionary(locale);
  const basePath = `/${locale}`;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => pathname.startsWith(path);

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

        <Link href={basePath}>
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
              <li className={`header-item ${isActive(`${basePath}/projekt`) ? 'active' : ''}`}>
                <Link href={`${basePath}/projekt`} replace onClick={closeMenu}>{dictionary.nav.projects}</Link>
              </li>
              <li className={`header-item ${isActive(`${basePath}/techniques`) ? 'active' : ''}`}>
                <Link href={`${basePath}/techniques`} replace onClick={closeMenu}>{dictionary.nav.techniques}</Link>
              </li>
              <li className={`header-item ${isActive(`${basePath}/about`) ? 'active' : ''}`}>
                <Link href={`${basePath}/about`} replace onClick={closeMenu}>{dictionary.nav.about}</Link>
              </li>
              <li className={`header-item ${isActive(`${basePath}/contact`) ? 'active' : ''}`}>
                <Link href={`${basePath}/contact`} replace onClick={closeMenu}>{dictionary.nav.contact}</Link>
              </li>
            </ul>
          </nav>
        </div>
    </header>
  );
}