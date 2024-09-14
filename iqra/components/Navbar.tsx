import Link from 'next/link';
import { Button } from "@/components/ui/button"; 

const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link href="/" className="text-2xl font-bold">Iqra</Link>
        <div className="space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/learn">Learn</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 