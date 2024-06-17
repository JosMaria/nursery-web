import { ModalUpdateFamily, ModalCreateFamily, ModalDeleteFamily, FamilyList } from './components';
import { useQuery } from '@tanstack/react-query';
import { fetchAllFamilies } from './services';
import { useRef, useState } from 'react'
import { Title } from '@nursery/styles';
import { Loader } from '@nursery/components';

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

	const openModalToUpdateFamily = (id: string, name: string) => {
		if (modalToUpdateFamily.current) {
			setFamilySelected({ id, name });
			modalToUpdateFamily.current.showModal();
		}
	}

	const openModalToCreateFamily = () => {
		if (modalToCreateFamily.current) {
			modalToCreateFamily.current.showModal();
		}

	}

	const closeModalToDeleteFamily = () => {
		if (modalToDeleteFamily.current) {
			modalToDeleteFamily.current.close();
		}
	}

	const closeModalToUpdateFamily = () => {
		if (modalToUpdateFamily.current) {
			modalToUpdateFamily.current.close();
		}
	}



	const closeModalToCreateFamily = () => {
		if (modalToCreateFamily.current) {
			modalToCreateFamily.current.close();
		}
	}

	return (
		<div className='flex justify-center w-full'>
			<section className='flex flex-col items-center gap-1 max-w-sm w-full p-1'>
				<div className='flex justify-between items-center w-full sticky top-0 bg-nursery-light'>
					<Title>Listado</Title>
					<button className='button max-sm:text-xs text-sm px-4 py-1 font-medium' onClick={openModalToCreateFamily}>
						Crear Familia
					</button>
				</div>
				{isPending && <Loader />}
				{isError && <p>Mensaje de error al cargar los datos</p>}
				{isSuccess && (
					<FamilyList
						families={families}
						openModalToDeleteFamily={openModalToDeleteFamily}
						openModalToUpdateFamily={openModalToUpdateFamily}
					/>
				)}
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
