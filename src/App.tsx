import { Header, Footer } from '@nursery/components';
import { FamilyPage } from './pages/Family/Page'

function App() {
	return (
		<div className='flex flex-col justify-between min-h-screen'>
			<Header />
			<main className='flex-1 bg-emerald-50'>
				<FamilyPage />
			</main>
			<Footer />
		</div>
	)
}

export default App
