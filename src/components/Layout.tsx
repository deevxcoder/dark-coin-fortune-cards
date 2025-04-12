
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MobileMenu from './MobileMenu';
import { useIsMobile } from '@/hooks/use-mobile';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-6 px-4 pb-20 md:pb-6">
        {children}
      </main>
      {!isMobile && <Footer />}
      <MobileMenu />
    </div>
  );
};

export default Layout;
