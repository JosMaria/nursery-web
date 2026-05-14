import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { Layout } from './layouts/Layout.tsx';
import PlantLayout from './layouts/PlantLayout.tsx';
import { DeleteImage, HomePage, ListPage, PlantPage, SelectImage, UploadImage } from './pages';

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
								<Route path='select' element={<SelectImage />} />
								<Route path='upload' element={<UploadImage />} />
								<Route path='delete' element={<DeleteImage />} />
							</Route>
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	</StrictMode>
);
