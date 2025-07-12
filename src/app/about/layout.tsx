// src/app/dashboard/layout.tsx
import SideNav from '@/app/ui/dashboard/sidenav'; // Impor SideNav yang baru kita buat

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav /> {/* Gunakan komponen SideNav di sini */}
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
