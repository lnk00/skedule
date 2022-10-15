import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppController } from '../controllers/app.controller';
import Navbar from '../components/navbar.component';
import HeaderNavigation from '../components/header-navigation.component';
import SkedulePlaceholder from '../components/skedule-placeholder.component';

export default function App() {
  const navigate = useNavigate();

  const appController = new AppController();

  useEffect(() => appController.isAuthenticated(navigate));

  return (
    <div className="min-h-full">
      <Navbar appController={appController}></Navbar>
      <div>
        <header className="pt-4 pb-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <HeaderNavigation></HeaderNavigation>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SkedulePlaceholder></SkedulePlaceholder>
          </div>
        </main>
      </div>
    </div>
  );
}
