import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Home = () => {
  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log(response.data.message);
    } catch (e) {
      console.error(e, `errored out requesting / api`);
    }
  };

  useEffect(() => {
    helloWorldApi();
  }, []);

  const handleGameClick = () => {
    window.open('/klavye-ustasi.html', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-12 text-center">
          <div className="mb-8">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
              🎮 Klavye Ustası
            </h1>
            <p className="text-xl text-gray-600">
              5. Sınıf Bilişim Teknolojileri - Klavye Öğrenme Oyunu
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">🎯 Oyun Özellikleri</h2>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📝</span>
                <div>
                  <h3 className="font-semibold text-gray-800">5 Etap</h3>
                  <p className="text-sm text-gray-600">Tanıma, Tuşu Gör, Düşen Tuşlar, Kısayollar</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">⌨️</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Q Türkçe Klavye</h3>
                  <p className="text-sm text-gray-600">Tüm tuşlar ve kısayollar</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Eğlenceli Oyun</h3>
                  <p className="text-sm text-gray-600">Skor, can, combo sistemi</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">👨‍🏫</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Öğretmen Paneli</h3>
                  <p className="text-sm text-gray-600">Pratik modu ve ayarlar</p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleGameClick}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xl font-bold py-4 px-12 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            🚀 Oyunu Başlat
          </button>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              MEB 5. Sınıf Bilişim Teknolojileri Müfredatı ile Uyumlu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
