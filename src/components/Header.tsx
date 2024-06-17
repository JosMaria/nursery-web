import { Title } from "@nursery/styles"

export const Header = () => {
	return (
		<header className='bg-nursery-dark text-nursery-light flex flex-wrap justify-between items-center p-1'>
			<div className="flex items-center gap-1">
				<span className="text-2xl">🪴</span>
				<Title>Vivero</Title>
			</div>
			<nav className="flex max-w-md w-full font-medium tracking-wide text-center">
				<a href="#" className="flex-1 hover:bg-emerald-900 border-b-2 border-transparent hover:border-emerald-50 p-1.5">Catalogo</a>
				<a href="#" className="flex-1 hover:bg-emerald-900 border-b-2 border-transparent hover:border-emerald-50 p-1.5">Listado</a>
				<a href="#" className="flex-1 hover:bg-emerald-900 border-b-2 border-transparent hover:border-emerald-50 p-1.5">Novedades</a>
			</nav>
			<a href="#">Salir</a>
		</header>
	)
}
