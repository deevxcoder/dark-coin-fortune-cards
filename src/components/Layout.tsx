
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#0F1923] text-white">
      <Header />
      <main className="flex-grow py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
