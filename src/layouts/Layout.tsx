import { Footer, Header } from '@nursery/components';
import { Outlet } from 'react-router-dom';

export const Layout = () => (
  <div className='flex flex-col justify-between min-h-screen'>
    <Header />
    <main className='flex-1 bg-nursery-light'>
      <Outlet />
    </main>
    <Footer />
  </div>
);
