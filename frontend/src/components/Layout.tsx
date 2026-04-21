import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import MouseFollower from './MouseFollower';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-[#0B0B0F] min-h-screen text-white relative overflow-hidden">
      <MouseFollower />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
