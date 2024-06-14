import { ModalUpdateFamily, ModalCreateFamily, ModalDeleteFamily, Item } from './components';
import { useQuery } from '@tanstack/react-query';
import { fetchAllFamilies } from './services';
import { useRef, useState } from 'react'

export const FamilyPage = () => {
	const [familySelected, setFamilySelected] = useState<{ id: string, name: string }>({ id: '', name: '' });
	const modalToDeleteFamily = useRef<HTMLDialogElement>(null);
	const modalToUpdateFamily = useRef<HTMLDialogElement>(null);
	const modalToCreateFamily = useRef<HTMLDialogElement>(null);

	const { data: families, isPending, isError, isSuccess } = useQuery({
		queryKey: ['families'],
		queryFn: fetchAllFamilies,
	});

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

	const openModalToCreateFamily = () => {
		if (modalToCreateFamily.current) {
			modalToCreateFamily.current.showModal();
		}
	}

	const closeModalToCreateFamily = () => {
		if (modalToCreateFamily.current) {
			modalToCreateFamily.current.close();
		}
	}

	return (
		<div className='flex justify-center w-full'>
			<section className='flex flex-col gap-1 max-w-sm w-full p-1'>
				<div className='flex justify-between items-center sticky top-0 bg-emerald-50 py-1'>
					<h1 className='max-sm:text-xl text-2xl font-semibold'>Listado</h1>
					<button
						className='bg-emerald-800 text-emerald-50 max-sm:text-xs text-sm px-3 py-1 font-semibold tracking-wide rounded-sm hover:bg-emerald-900 focus:outline-none focus:bg-emerald-900 active:opacity-85'
						onClick={openModalToCreateFamily}
					>
						Crear Familia
					</button>
				</div>
				{isPending && (
					<div className='flex flex-col items-center gap-1 p-2'>
						<div className='w-10 h-10 animate-spin rounded-full border-4 border-y-emerald-800' />
						<p className='text-sm font-medium'>Cargando</p>
					</div>
				)}
				{isError && <p>Mensaje de error al cargar los datos</p>}
				{isSuccess && <article className='flex flex-col gap-2 bg-emerald-200 p-2'>
					{families.length === 0 ?
						<p className='text-base font-medium text-center p-2 bg-emerald-50 leading-tight'>No se encontro ninguna familia registrada</p> :
						families.map(family =>
							<Item
								key={family.id}
								id={family.id}
								name={family.name}
								openModalToDelete={() => openModalToDeleteFamily(family.id, family.name)}
								openModalToUpdate={() => openModalToUpdateFamily(family.id, family.name)}
							/>
						)
					}
				</article>}
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
			<ModalCreateFamily
				dialogRef={modalToCreateFamily}
				close={closeModalToCreateFamily}
			/>
		</div>
	);
}
