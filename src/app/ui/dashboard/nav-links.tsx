// src/app/ui/dashboard/nav-links.tsx
'use client'; // Penting karena kita akan menggunakan hook usePathname

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  UserIcon, // Impor ikon ini
  InformationCircleIcon, // Impor ikon ini
  ShoppingCartIcon, // Impor ikon ini
} from '@heroicons/react/24/outline';
import Link from 'next/link'; // Komponen untuk navigasi tanpa reload
import { usePathname } from 'next/navigation'; // Hook untuk menandai link aktif
import clsx from 'clsx'; // Untuk mengelola class CSS secara kondisional

// Ini adalah array yang berisi semua link navigasi Anda
const links = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon }, // Mengubah nama menjadi Dashboard
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
  // --- LINK BARU UNTUK TUGAS ANDA ---
  { name: 'Profile', href: '/profile', icon: UserIcon }, // Link ke Halaman Profile
  { name: 'About', href: '/about', icon: InformationCircleIcon }, // Link ke Halaman About
  { name: 'Product Example', href: '/products/buku-novel-fiksi', icon: ShoppingCartIcon }, // Contoh Link ke Dynamic Route
];

export default function NavLinks() {
  const pathname = usePathname(); // Hook untuk mendapatkan path URL saat ini

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx('flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3', {
              'bg-sky-100 text-blue-600': pathname === link.href, // Menandai link aktif
            })}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
