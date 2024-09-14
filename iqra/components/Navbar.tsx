import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">Iqra</Link>
        <div className="space-x-4">
          <Link href="/" className="text-white hover:text-blue-200">Home</Link>
          <Link href="/learn" className="text-white hover:text-blue-200">Learn</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;