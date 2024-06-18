import { NavLink } from 'react-router-dom'
import { Title } from '@nursery/styles'

export const Header = () => {
	return (
		<header className='flex justify-between items-center max-md:flex-wrap pt-1 md:p-1 gap-1'>
			<Title className='max-md:mx-1'>Mi Proyecto</Title>
			<nav className='max-md:order-1 flex w-full md:max-w-lg text-xs sm:text-sm md:text-base text-center font-medium tracking-wide'>
				<NavLink
					className={({ isActive }) => `navbar ${isActive && 'border-b-nursery-light bg-nursery-dark-hover'} flex-1 p-1.5 border-b-2 border-transparent`}
					to='/'
				>
					Catalogo
				</NavLink>
				<NavLink
					className={({ isActive }) => `navbar ${isActive && 'border-b-nursery-light bg-nursery-dark-hover'} flex-1 p-1.5 border-b-2 border-transparent`}
					to='repertory'
				>
					Listado
				</NavLink>
				<NavLink 
					className={({ isActive }) => `navbar ${isActive && 'border-b-nursery-light bg-nursery-dark-hover'} flex-1 p-1.5 border-b-2 border-transparent`} 
					to='news'
				>
					Novedades
				</NavLink>
			</nav>
			<NavLink className={({ isActive }) => `button max-md:mx-1 p-1 rounded-full ${isActive && 'bg-nursery-dark-hover'}`} to='login'>
				<svg className='h-5 sm:h-6 w-5 sm:w-6 text-nursery-light' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
					<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
				</svg>
			</NavLink>
		</header>
	);
};
