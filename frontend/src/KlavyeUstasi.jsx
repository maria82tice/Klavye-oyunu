import React, { useEffect } from 'react';

export default function KlavyeUstasi() {
  useEffect(() => {
    // Sayfayı yönlendir
    window.location.href = '/klavye-ustasi.html';
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
        <p className="text-xl text-blue-800 font-semibold">Klavye Ustası Yükleniyor...</p>
      </div>
    </div>
  );
}
