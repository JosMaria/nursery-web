import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { Layout } from '../layouts/Layout';
import { CatalogPage } from '../pages/Catalog/Page';
import { FamilyPage } from '../pages/Family/Page';
import { RepertoryPage } from '../pages/Repertory/Page';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<CatalogPage />}></Route>
      <Route path='repertory' element={<RepertoryPage />}></Route>
      <Route path='news' element={<FamilyPage />}></Route>
      <Route path='login' element={<>Pagina para el login</>}></Route>
    </Route>
  )
);
