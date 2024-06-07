import { useRef, useState } from 'react'
import { ModalDeleteFamily } from './components/ModalDelete';
import { Item } from './components/Item';
import { ModalUpdateFamily } from './components/ModalUpdate';

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
	const [familySelected, setFamilySelected] = useState<{ id: string, name: string }>({ id: '', name: '' });
	const modalToDeleteFamily = useRef<HTMLDialogElement>(null);
	const modalToUpdateFamily = useRef<HTMLDialogElement>(null);

	const openModalToDeleteFamily = (id: string, name: string) => {
		if (modalToDeleteFamily.current) {
			setFamilySelected({ id, name });
			modalToDeleteFamily.current.showModal();
		}
	}

	const closeModalToDeleteFamily = () => {
		if (modalToDeleteFamily.current) {
			modalToDeleteFamily.current.close();
		}
	}

	const openModalToUpdateFamily = (id: string, name: string) => {
		if (modalToUpdateFamily.current) {
			setFamilySelected({ id, name });
			modalToUpdateFamily.current.showModal();
		}
	}

	const closeModalToUpdateFamily = () => {
		if (modalToUpdateFamily.current) {
			modalToUpdateFamily.current.close();
		}
	}

	return (
		<div className='flex justify-center w-full'>
			<section className='flex flex-col gap-1 max-w-sm w-full p-1'>
				<div className='flex justify-between items-center sticky top-0 bg-emerald-50 py-1'>
					<h1 className='max-sm:text-xl text-2xl font-semibold'>Listado</h1>
					<button className='bg-emerald-800 text-emerald-50 max-sm:text-xs text-sm px-4 py-1.5 font-semibold tracking-wide rounded-sm hover:bg-emerald-900 focus:outline-none focus:bg-emerald-900 active:opacity-85'>Crear Familia</button>
				</div>
				<article className='flex flex-col gap-2 bg-emerald-200 p-2'>
					{FAMILIES.map(family =>
						<Item
							key={family.id}
							id={family.id}
							name={family.name}
							openModalToDelete={() => openModalToDeleteFamily(family.id, family.name)}
							openModalToUpdate={() => openModalToUpdateFamily(family.id, family.name)}
						/>
					)}
				</article>
			</section>
			<ModalDeleteFamily
				familySelected={familySelected}
				dialogRef={modalToDeleteFamily}
				close={closeModalToDeleteFamily}
			/>
			<ModalUpdateFamily
				familySelected={familySelected}
				dialogRef={modalToUpdateFamily}
				close={closeModalToUpdateFamily}
			/>
		</div>
	);
}
