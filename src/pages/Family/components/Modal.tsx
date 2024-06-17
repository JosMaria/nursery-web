import { ModalUpdate, ModalCreate, ModalDelete  } from './modals';

type ModalProps = {
  dialogRef: React.RefObject<HTMLDialogElement>;
  modalType: ModalType;
};

export const Modal = ({ dialogRef, modalType }: ModalProps) => {
  const close = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <dialog className='fixed inset-0 min-w-full min-h-full backdrop-blur bg-black bg-opacity-50' ref={dialogRef} open>
      <div className='flex justify-center items-center h-screen select-none'>
        {modalType.type === 'create' && <ModalCreate close={close} />}
        {modalType.type === 'update' && <ModalUpdate close={close} familySelected={modalType.familySelected} />}
        {modalType.type === 'delete' && <ModalDelete close={close} familySelected={modalType.familySelected} />}
      </div>
    </dialog>
  );
};
