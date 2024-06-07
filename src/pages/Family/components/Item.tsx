type ItemProps = {
  id: string;
  name: string;
  openModalToDelete: () => void;
  openModalToUpdate: () => void;
}
export const Item = ({ id, name, openModalToDelete, openModalToUpdate }: ItemProps) => (
  <div className='flex justify-between items-center text-sm py-1 px-3 bg-emerald-50'>
    <p className='font-medium italic'>{name}</p>
    <div className='flex gap-2'>
      <button
        className='bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500 active:opacity-85 px-1 py-0.5 leading-none text-lg rounded-sm'
        onClick={openModalToUpdate}
      >
        <span>&#9998;</span>
      </button>
      <button
        className='bg-red-500 hover:bg-red-600 focus:outline-none focus:bg-red-600 active:opacity-85  text-red-50 px-1 py-0.5 leading-none  text-lg rounded-sm'
        onClick={openModalToDelete}
      >
        <span>&#10007;</span>
      </button>
    </div>
  </div>
);
