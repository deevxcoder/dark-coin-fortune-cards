
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Dice, ListFilter, Trophy, Info, Settings } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { Sidebar, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from './ui/sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#0F1923] text-white">
      <Header />
      <div className="flex">
        <Sidebar>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Home">
                  <Link to="/" className="flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Coin Toss">
                  <Link to="/coin-toss" className="flex items-center gap-2">
                    <Dice className="h-4 w-4" />
                    <span>Coin Toss</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Satta Matka">
                  <Link to="/satta-matka" className="flex items-center gap-2">
                    <ListFilter className="h-4 w-4" />
                    <span>Satta Matka</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Leaderboard">
                  <Link to="/leaderboard" className="flex items-center gap-2">
                    <Trophy className="h-4 w-4" />
                    <span>Leaderboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="How to Play">
                  <Link to="/how-to-play" className="flex items-center gap-2">
                    <Info className="h-4 w-4" />
                    <span>How to Play</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Settings">
                  <Link to="/settings" className="flex items-center gap-2">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <main className="flex-grow py-8 px-4 md:px-8">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
