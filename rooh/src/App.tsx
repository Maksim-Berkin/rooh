// @ts-ignore
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Тимчасовий контент для перевірки */}
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-primary mb-4">RЭН</h1>
          <p className="text-xl text-gray-600">Сервіс оренди самокатів</p>
        </div>
      </div>
    </div>
  );
}

export default App;