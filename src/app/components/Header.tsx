'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header>
      <Link href="/">
        <Image src="/NineTeen-logo-black.svg" className="logo" alt="Logo" width={130} height={50} />
      </Link>
      <div>
        <nav>
          <ul>
            <li className={`header-item ${isActive('/projekt') ? 'active' : ''}`}>
              <Link href="/projekt">Tidigare projekt</Link>
            </li>
            <li className={`header-item ${isActive('/tekniker') ? 'active' : ''}`}>
              <Link href="/tekniker">Tekniker</Link>
            </li>
            <li className={`header-item ${isActive('/om-oss') ? 'active' : ''}`}>
              <Link href="/om-oss">Om oss</Link>
            </li>
            <li className={`header-item ${isActive('/contact') ? 'active' : ''}`}>
              <Link href="/contact">Kontakt</Link>
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
        </ul>
      </div>
    </header>
  );
}