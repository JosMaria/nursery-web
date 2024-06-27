import { InputText, Title } from '@nursery/styles';

type ItemType = {
  commonName: string;
  scientificName?: string;
  family?: string;
}

const ITEMS: ItemType[] = [
  {
    commonName: "Flor de navidad",
    scientificName: "Euphorbia pulcherrima",
    family: "Euphorbiaceae"
  },
  {
    commonName: "Acacia orrida",
    scientificName: "Acacia orrida",
    family: "Fabaceae"
  },
  {
    commonName: "Agave",
    scientificName: "Agave tequilero",
    family: "Asparagaceae"
  },
  {
    commonName: "Aji ornamental",
    scientificName: "Capsicum annuum L",
    family: "Solanaceae"
  },
  {
    commonName: "Ajuga",
    scientificName: "Ajuga reptans",
    family: "Lamiaceae"
  },
  {
    commonName: "Begonia cebra"
  },
];

export const RepertoryPage = () => {
  return (
    <div className='w-full p-1 flex justify-center'>
      <section className='flex flex-col gap-2 max-w-3xl w-full select-none py-1'>
        <div className='flex flex-wrap justify-between'>
          <Title>Listado</Title>
          <div className='flex items-center gap-1'>
            <InputText className='input border-nursery-dark max-sm:w-40' placeholder='Nombre Común' />
            <button className='button rounded' title='Buscar'>
              <svg className='h-7 w-7 text-nursery-light p-1' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
              </svg>
            </button>
            <button className='button rounded' title='Imprimir'>
              <svg className='h-7 w-7 text-nursery-light p-1' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <polyline points='6 9 6 2 18 2 18 9' />
                <path d='M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2' />
                <rect x='6' y='14' width='12' height='8' />
              </svg>
            </button>
          </div>
        </div>
        <article className='max-sm:overflow-x-scroll'>
          <table className='min-w-[28rem] w-full whitespace-nowrap'>
            <thead className='bg-nursery-dark text-nursery-light whitespace-nowrap text-sm max-sm:text-xs'>
              <tr className='tracking-wide'>
                <th className='py-2'>N°</th>
                <th className='py-2'>Nombre Com&uacute;n</th>
                <th className='py-2'>Nombre Cientifico</th>
                <th className='py-2'>Familia</th>
              </tr>
            </thead>
            <tbody>
              {ITEMS.map((item, index) => (
                <tr
                  className='text-sm max-sm:text-xs odd:bg-slate-50 even:bg-slate-200 text-center'
                  key={index}
                >
                  <td className='p-1.5'>{index + 1}</td>
                  <td className='p-1.5'>{item.commonName}</td>
                  <td className='p-1.5 italic'>{item.scientificName}</td>
                  <td className='p-1.5'>{item.family}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      </section>
    </div>
  );
}
