import React, { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import './globals.css';
import SearchBar from '@/components/SearchBar';

export const metadata = {
  title: 'Nextflix',
  description: 'Site de données sur les films',
};

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="fr">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <Navbar />
        <SearchBar></SearchBar>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
