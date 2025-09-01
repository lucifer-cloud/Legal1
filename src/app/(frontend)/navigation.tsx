// components/Navbar.tsx
import Link from 'next/link';
import React from 'react';

export default async function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#f3f3f3', display: 'flex', gap: '1.5rem' }}>
      <Link href="/">Home</Link>
      <Link href="/about-us">About Us</Link>
      <Link href="/contact-us">Contact Us</Link>
      <Link href="/privacy-policy">Privacy Policy</Link>
      <Link href="/terms">Terms</Link>
    </nav>
  );
};

