'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { getDictionary, getLocaleFromPathname } from '../i18n';

export default function Header() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const dictionary = getDictionary(locale);
  const basePath = `/${locale}`;

  const isActive = (path: string) => pathname.startsWith(path);

  return (
    <header>
      <Link href={basePath}>
        <Image src="/nineteen-logo-black.svg" className="logo" alt="Logo" width={130} height={50} />
      </Link>
      <div>
        <nav>
          <ul>
            <li className={`header-item ${isActive(`${basePath}/projekt`) ? 'active' : ''}`}>
              <Link href={`${basePath}/projekt`} replace>{dictionary.nav.projects}</Link>
            </li>
            <li className={`header-item ${isActive(`${basePath}/techniques`) ? 'active' : ''}`}>
              <Link href={`${basePath}/techniques`} replace>{dictionary.nav.techniques}</Link>
            </li>
            <li className={`header-item ${isActive(`${basePath}/about`) ? 'active' : ''}`}>
              <Link href={`${basePath}/about`} replace>{dictionary.nav.about}</Link>
            </li>
            <li className={`header-item ${isActive(`${basePath}/contact`) ? 'active' : ''}`}>
              <Link href={`${basePath}/contact`} replace>{dictionary.nav.contact}</Link>
            </li>
          </ul>
        </nav>
        <ul className="social-media">
          <li className='header-item'>
            <a href="https://instagram.com/nineteen.production" target="_blank" rel="noopener noreferrer">
              <span>Instagram</span>
            </a>
          </li>
          <li className='header-item'>
            <a href="https://www.linkedin.com/company/nineteen-production/" target="_blank" rel="noopener noreferrer">
              <span>LinkedIn</span>
            </a>
          </li>
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
        </ul>
      </div>
    </header>
  );
}
