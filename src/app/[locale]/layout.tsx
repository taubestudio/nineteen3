import Header from '../components/Header';
import Mobileheader from '../components/Mobileheader';
import Footer from '../components/Footer';
import '../globals.css';
import { locales, isLocale, type Locale } from '../i18n';

export const metadata = {
  title: 'Nineteen Production',
  description: 'Welcome to Nineteen Production',
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : 'sv';

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="https://nineteenstudent.se/favicon.ico" type="image/x-icon" />
      </head>
      <body>
        <Header />
        <Mobileheader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
