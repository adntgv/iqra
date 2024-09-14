'use client';

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="border-b bg-background">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link href="/" className="text-2xl font-bold text-primary">Iqra</Link>
        <div className="space-x-4 flex items-center">
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/learn">Learn</Link>
          </Button>
          <Button variant="ghost" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;