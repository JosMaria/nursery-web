import { Title } from '@nursery/styles'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavLinkStyled = styled(NavLink)`
	font-weight: 500;
	letter-spacing: 0.025em;
	text-align: center;
	border-bottom-width: 2px;
	border-color: transparent;
	padding: 0.375rem;
`;

export const Header = () => {
	return (
		<header className='flex flex-wrap justify-between items-center'>

			<div className='flex-1 flex items-center gap-1'>
				<span className='text-2xl'>🪴</span>
				<Title>Vivero</Title>
			</div>

			<nav className='flex-1 flex'>
				<NavLink className={({ isActive }) => `${isActive && 'border-b-nursery-light bg-nursery-dark-hover'} flex-1 text-center font-medium tracking-wide p-1.5 hover:bg-nursery-dark-hover focus:outline-none focus:bg-nursery-dark-hover active:opacity-85 border-b-2 border-transparent`} to='/'>Catalogo</NavLink>
				<NavLink className={({ isActive }) => `${isActive && 'border-b-nursery-light bg-nursery-dark-hover'} flex-1 text-center font-medium tracking-wide p-1.5 hover:bg-nursery-dark-hover focus:outline-none focus:bg-nursery-dark-hover active:opacity-85 border-b-2 border-transparent`} to='repertory'>Listado</NavLink>
				<NavLink className={({ isActive }) => `${isActive && 'border-b-nursery-light bg-nursery-dark-hover'} flex-1 text-center font-medium tracking-wide p-1.5 hover:bg-nursery-dark-hover focus:outline-none focus:bg-nursery-dark-hover active:opacity-85 border-b-2 border-transparent`} to='news'>Novedades</NavLink>
				{/* <a href='#' className='flex-1 hover:bg-emerald-900 border-b-2 border-transparent hover:border-emerald-50 p-1.5'>Novedades</a> */}
			</nav>

			<div className='flex-1 flex flex-row-reverse'>
				<NavLink className={({ isActive }) => `button p-2 rounded-full ${isActive && 'bg-nursery-dark-hover'}`} to='login'>
					<svg className='h-5 w-5 text-nursery-light' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
						<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
					</svg>
				</NavLink>
			</div>

		</header>
	)
}

