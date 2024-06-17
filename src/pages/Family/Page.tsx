import { ButtonText, Title } from '@nursery/styles';
import { FamilyList, Modal } from './components';
import { useQuery } from '@tanstack/react-query';
import { fetchAllFamilies } from './services';
import { Loader } from '@nursery/components';
import { useRef, useState } from 'react'

export const FamilyPage = () => {
	const [modalSelected, setModalSelected] = useState<ModalType | null>(null);
	const modalRef = useRef<HTMLDialogElement>(null);

	const { data: families, isPending, isError, isSuccess } = useQuery({
		queryKey: ['families'],
		queryFn: fetchAllFamilies,
	});

	const openModal = (modalType: ModalType) => {
		setModalSelected(modalType);
		modalRef.current && modalRef.current.show();
	};

	return (
		<div className='flex justify-center w-full'>
			<section className='flex flex-col items-center gap-1 max-w-sm w-full p-1'>
				<div className='flex justify-between items-center w-full sticky top-0 bg-nursery-light'>
					<Title>Listado</Title>
					<ButtonText className='button' onClick={() => openModal({ type: 'create' })}>
						Crear Familia
					</ButtonText>
				</div>
				{isPending && <Loader />}
				{isError && <p>Mensaje de error al cargar los datos</p>}
				{isSuccess && (
					<FamilyList
						families={families}
						openModal={(modalType: ModalType) => openModal(modalType)}
					/>
				)}
			</section>
			{modalSelected && <Modal dialogRef={modalRef} modalType={modalSelected} />}
		</div>
	);
};
