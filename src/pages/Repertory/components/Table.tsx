type TableProps = {
  items: AnswerItemType[];
};

export const Table = ({ items }: TableProps) => (
  <article className='overflow-x-auto h-screen overflow-y-auto'>
    <table className='min-w-[28rem] w-full whitespace-nowrap'>
      <thead className='sticky top-0 bg-nursery-dark text-nursery-light whitespace-nowrap text-sm max-sm:text-xs'>
        <tr className='tracking-wide'>
          <th className='py-2'>N°</th>
          <th className='py-2'>Nombre Com&uacute;n</th>
          <th className='py-2'>Nombre Cientifico</th>
          <th className='py-2'>Familia</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index} className='text-sm max-sm:text-xs odd:bg-slate-100 even:bg-slate-50 text-center'>
            <td className='p-1.5'>{index + 1}</td>
            <td className='p-1.5'>{item.commonName}</td>
            <td className='p-1.5 italic'>{item.scientificName}</td>
            <td className='p-1.5'>{item.family}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </article>
);

