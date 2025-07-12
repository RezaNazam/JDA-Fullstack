// src/app/products/[productId]/page.tsx
import Link from 'next/link'; // Tambahkan baris ini

export default function ProductDetailPage({ params }: { params: { productId: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">Detail Produk</h1>
      <p className="text-lg text-gray-700">
        Anda sedang melihat produk dengan ID: <span className="font-semibold text-blue-600">{params.productId}</span>
      </p>
      <p className="text-md text-gray-500 mt-2">Di sini Anda bisa menampilkan informasi lengkap tentang produk ini.</p>
      {/* Contoh konten tambahan */}
      <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md max-w-lg text-center">
        <h3 className="text-xl font-semibold mb-2">Fitur Unggulan</h3>
        <ul className="list-disc list-inside">
          <li>Desain Ergonomis</li>
          <li>Bahan Berkualitas Tinggi</li>
          <li>Garansi 2 Tahun</li>
        </ul>
      </div>

      {/* --- TOMBOL KEMBALI KE DASHBOARD DIMULAI DI SINI --- */}
      <Link
        href="/dashboard" // Tujuan link adalah halaman dashboard
        className="mt-8 rounded-md bg-blue-500 px-6 py-3 text-white font-semibold transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Kembali ke Dashboard
      </Link>
      {/* --- TOMBOL KEMBALI KE DASHBOARD SELESAI DI SINI --- */}
    </main>
  );
}
