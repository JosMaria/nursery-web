import { useRef } from 'react'
import { ModalDeleteFamily } from './components/Modal';

const FAMILIES = [
	{
		id: '35ad1fac-3cef-4430-9fce-bdeac4737d1d',
		name: 'euphorbiaceae'
	},
	{
		id: 'af3b6c76-bb2f-40aa-9264-882da0798282',
		name: 'fabaceae'
	},
	{
		id: '274e8eb3-87a9-4bc7-bd20-acaecb9d42c9',
		name: 'asparagaceae'
	},
	{
		id: 'a6c98aad-e334-411f-9907-7dfb7e397cbc',
		name: 'solanaceae'
	},
	{
		id: 'f3604e7c-79fd-4d5f-9210-a7f0d5b23638',
		name: 'lamiaceae'
	},
	{
		id: 'f3604e7c-79fd-4d5f-9210-a7f0d5b23639',
		name: 'salicaceae'
	},
	{
		id: 'f3604e7c-79fd-4d5f-9210-b7f0d5b23639',
		name: 'asphodelaceae'
	},
	{
		id: 'f3604e7c-79fd-4d5f-9210-c7f0d5b23639',
		name: 'amaryllidaceae'
	},
	{
		id: 'f3604e7c-79fd-4d5f-9210-d7f0d5b23639',
		name: 'commelinaceae'
	},
	{
		id: 'f3604e7c-79fd-4d5f-9210-37f0d5b23639',
		name: 'araceae'
	},
	{
		id: 'f3604e7c-79fd-4d5f-9210-e7f0d5b23639',
		name: 'ruscaceae'
	},
	{
		id: 'f3604e7c-79fd-4d5f-9210-f7f0d5b23639',
		name: 'begoniaceae'
	},
	{
		id: 'f3604e7c-79fd-4d5f-9210-g7f0d5b23639',
		name: 'verbenaceae'
	},
	{
		id: 'f3604e7c-79fd-4d5f-9210-h7f0d5b23639',
		name: 'apocynaceae'
	},
	{
		id: 'f3604e7c-79fd-4d5f-9210-i7f0d5b23639',
		name: 'malvaceae'
	},
]

export const FamilyPage = () => {
	const dialogRef = useRef<HTMLDialogElement>(null);

	const openDialog = () => {
		if (dialogRef.current) {
			dialogRef.current.showModal();
		}
	}

	const closeDialog = () => {
		if (dialogRef.current) {
			dialogRef.current.close();
		}
	}

	return (
		<div className='flex justify-center w-full'>
			<section className='flex flex-col gap-1 max-w-sm w-full p-1'>
				<div className='flex justify-between items-center sticky top-0 bg-emerald-50 py-1'>
					<h1 className='max-sm:text-xl text-2xl font-semibold'>Listado</h1>
					<button className='bg-emerald-800 text-emerald-50 max-sm:text-xs text-sm px-4 py-1.5 font-semibold tracking-wide rounded-sm hover:bg-emerald-900 focus:outline-none focus:bg-emerald-900 active:opacity-85'>Crear Familia</button>
				</div>
				<article className='flex flex-col gap-2 bg-emerald-100 p-2'>
					{FAMILIES.map(family =>
						<div
							className='flex justify-between items-center text-sm py-1.5 px-3 bg-emerald-50'
							key={family.id}
						>
							<p className='font-medium italic'>{family.name}</p>
							<div className='flex gap-2'>
								<button 
									className='bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500 active:opacity-85 px-1 py-0.5 leading-none text-lg rounded-sm'
									onClick={() => console.log('click en editar')}
								>
									<span>&#9998;</span>
								</button>
								<button
									className='bg-red-500 hover:bg-red-600 focus:outline-none focus:bg-red-600 active:opacity-85  text-red-50 px-1 py-0.5 leading-none  text-lg rounded-sm'
									onClick={openDialog}
								>
									<span>&#10007;</span>
								</button>
							</div>
						</div>)}
				</article>
			</section>
			<ModalDeleteFamily
				dialogRef={dialogRef}
				close={closeDialog}
			/>
		</div>
	)
}
