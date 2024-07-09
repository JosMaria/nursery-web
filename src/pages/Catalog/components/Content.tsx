import { Card } from './Card';
import { Navbar } from './Navbar';
import { Pagination } from './Pagination';

type ContentProps = {
  pageContent: PageType,
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export const Content = ({ pageContent, setPage }: ContentProps) => {
  const updatePage = (move: 'first' | 'previous' | 'next' | 'last') => {
    if (move === 'first') {
      setPage(0);

    } else if (move === 'previous') {
      setPage((oldPage) => Math.max(oldPage - 1, 0));

    } else if (move === 'next') {
      setPage(oldPage => pageContent.last ? oldPage : oldPage + 1);

    } else if (move === 'last') {
      setPage(pageContent.totalPages - 1);

    } else {
      throw new Error("Options 'previous' or 'next' have been not selected.");
    }
  }

  return (
    <div className='flex flex-col items-center gap-1 p-1'>
      <Navbar />
      <section className='flex-1 flex flex-wrap justify-evenly gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12'>
        {pageContent.content.map(plant => (
          <Card
            key={plant.id}
            id={plant.id}
            commonName={plant.commonName}
            scientificName={plant.scientificName ?? ' '}
            family={plant.family ?? ' '}
            status={plant.status}
            photoUrl={plant.photoUrl ?? ''}
          />
        ))}
      </section>
      <Pagination updatePage={updatePage} numberPage={pageContent.number} />
    </div>
  );
}