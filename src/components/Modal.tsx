type ModalProps = {
  dialogRef: React.RefObject<HTMLDialogElement>;
  children: JSX.Element;
}

export const Modal = ({ dialogRef, children }: ModalProps) => (
  <dialog
    className='fixed inset-0 min-w-full min-h-full backdrop-blur bg-black bg-opacity-50'
    ref={dialogRef}
  >
    <div className='flex justify-center items-center h-screen select-none'>
      {children}
    </div>
  </dialog>
);
