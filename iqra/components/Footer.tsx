import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Iqra</h3>
            <p className="text-muted-foreground">
              Iqra is a platform dedicated to helping people learn Arabic and understand the Quran through interactive lessons and vocabulary building.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
              <li><Link href="/learn" className="text-muted-foreground hover:text-primary">Learn</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Facebook</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Twitter</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-muted-foreground">
          <p>© 2024 Iqra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;