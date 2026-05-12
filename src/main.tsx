import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { Layout } from './layouts/Layout.tsx';
import PlantLayout from './layouts/PlantLayout.tsx';
import EditPage from './pages/Edit/EditPage.tsx';
import { GeneralView, ImagesView, TaxonomyView } from './pages/Edit/views';
import { HomePage, ListPage, PlantPage, SelectView } from './pages/index.ts';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path='list' element={<ListPage />} />
              <Route path='list/:plantId' element={<PlantLayout />}>
                <Route index element={<PlantPage />} />
                <Route path='select' element={<SelectView />} />
              </Route>

              <Route path='upload' element={<div>form to upload plant</div>} />
              <Route path=':plantId/edit' element={<EditPage />}>
                <Route index element={<GeneralView />} />
                <Route path='taxonomy' element={<TaxonomyView />} />
                <Route path='images' element={<ImagesView />}>
                  <Route index element={<SelectView />} />
                </Route>
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
