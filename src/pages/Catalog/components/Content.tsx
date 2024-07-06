import { Card } from './Card';
import { Navbar } from './Navbar';
import { Pagination } from './Pagination';

type ContentProps = {
  plantCards: PlantCardType[];
};

export const Content = ({ plantCards }: ContentProps) => (
  <div className='flex flex-col items-center gap-1 p-1'>
    <Navbar />
    <section className='flex-1 flex flex-wrap justify-evenly gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12'>
      {plantCards.map(plant => (
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
    <Pagination />
  </div>
);
