import ReactSVG from '@/assets/react.svg';
import CountBtn from '@/components/CountBtn';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-y-4">
        <div className="inline-flex items-center gap-x-4">
          <img src={ReactSVG} alt="React Logo" className="w-32" />
          <span className="text-6xl">+</span>
          <img src={'/vite.svg'} alt="Vite Logo" className="w-32" />
        </div>
        <CountBtn />
        <Link to="/login">Login</Link>
      </div>
    </main>
  );
}
