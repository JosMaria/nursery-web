import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { FamilyPage } from '../pages/Family/Page'
import { Layout } from '../layouts/Layout';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<>pagina para el catalogo</>}></Route>
      <Route path='repertory' element={<>Pagina para listado</>}></Route>
      <Route path='news' element={<FamilyPage />}></Route>
    </Route>
  )
);
