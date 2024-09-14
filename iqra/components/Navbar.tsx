'use client';

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="border-b bg-background sticky top-0 z-10">
      <div className="container mx-auto flex flex-row justify-between items-center py-4">
        <Link href="/" className="text-2xl font-bold text-primary">Iqra</Link>
        <div className="flex flex-row items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/learn">Learn</Link>
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <SunIcon className="h-[1.2rem] w-[1.2rem]" /> : <MoonIcon className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;