import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500">404 - Not Found</h1>
      <p className="text-gray-600 mt-2">Halaman yang Anda cari tidak ditemukan.</p>
      <Link to="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
        Kembali ke Beranda
      </Link>
    </div>
  );
}

export default NotFound;
