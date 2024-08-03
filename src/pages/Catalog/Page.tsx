import axios from 'axios';
import React, { FC, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { Loader } from '@nursery/components';
import { StatusType } from '@nursery/types/commons';
import { useInfiniteQuery } from '@tanstack/react-query';

import { Filter } from './components';
import { Card } from './components/Card';
import { fetchPlantCards } from './service';

const fetchTodos = async ({ pageParam = 1 }) => {
  const response = await axios.get<TodoType[]>(`https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=10`);
  const totalCount = parseInt(response.headers['x-total-count'], 10);
  const hasNextPage = pageParam * 10 < totalCount;

  return {
    data: response.data,
    nextId: hasNextPage ? pageParam + 1 : undefined,
  };
}

type CardProps = {
  plantId: number;
  commonName: string;
  scientificName?: string;
  imageId?: string;
  status: StatusType;
  imageUrl?: string;
};

const CARDS: CardProps[] = [
  {
    plantId: 1,
    commonName: 'Flor de navidad',
    scientificName: 'Euphorbia pulcherrima',
    status: 'AVAILABLE',
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/05/10/00/plant-8234767_1280.jpg'
  },
  {
    plantId: 2,
    commonName: 'Acacia orrida',
    scientificName: 'Acacia orrida',
    status: 'AVAILABLE',
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/05/10/00/plant-8234767_1280.jpg'
  },
  {
    plantId: 3,
    commonName: 'Agave',
    scientificName: 'Agave tequilero',
    status: 'AVAILABLE',
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/05/10/00/plant-8234767_1280.jpg'
  },
  {
    plantId: 4,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    status: 'AVAILABLE',
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/05/10/00/plant-8234767_1280.jpg'
  },
  {
    plantId: 5,
    commonName: 'Ajuga',
    scientificName: 'Ajuga reptans',
    status: 'AVAILABLE',
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/05/10/00/plant-8234767_1280.jpg'
  },
  {
    plantId: 6,
    commonName: 'Alamo',
    scientificName: 'Populus x canadensis moench',
    status: 'AVAILABLE',
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/05/10/00/plant-8234767_1280.jpg'
  },
  {
    plantId: 7,
    commonName: 'Aloe',
    scientificName: 'Aloe barbadensis var. chinensis',
    status: 'AVAILABLE',
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/05/10/00/plant-8234767_1280.jpg'
  },
  {
    plantId: 8,
    commonName: 'Amarilis',
    scientificName: 'Hippeastrum spp',
    status: 'AVAILABLE',
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/05/10/00/plant-8234767_1280.jpg'
  },
  {
    plantId: 9,
    commonName: 'Amor de hombre',
    scientificName: 'Trasdecantia pallida',
    status: 'AVAILABLE',
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/05/10/00/plant-8234767_1280.jpg'
  },
  {
    plantId: 10,
    commonName: 'Anturio',
    scientificName: 'Anthurium andreanum',
    status: 'AVAILABLE',
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/05/10/00/plant-8234767_1280.jpg'
  },
  {
    plantId: 11,
    commonName: 'Anturio gigante',
    scientificName: 'Anthurium andreanum',
    status: 'AVAILABLE',
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/05/10/00/plant-8234767_1280.jpg'
  },
  {
    plantId: 12,
    commonName: 'Aspidastra',
    scientificName: 'Aspidiastra elatior',
    status: 'AVAILABLE',
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/05/10/00/plant-8234767_1280.jpg'
  },
  {
    plantId: 13,
    commonName: 'Begonia cebra',
    status: 'AVAILABLE',
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/05/10/00/plant-8234767_1280.jpg'
  },
  {
    plantId: 14,
    commonName: 'Begonia rex',
    scientificName: 'Begonia rex',
    status: 'AVAILABLE',
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/05/10/00/plant-8234767_1280.jpg'
  },
  {
    plantId: 15,
    commonName: 'Begonias tuberosa',
    scientificName: 'Begonia x tuberhybrida',
    status: 'AVAILABLE',
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/05/10/00/plant-8234767_1280.jpg'
  },
  {
    plantId: 16,
    commonName: 'Bingo de oro',
    scientificName: 'Duranta erecta',
    status: 'AVAILABLE',
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/05/10/00/plant-8234767_1280.jpg'
  },
  {
    plantId: 17,
    commonName: 'Bouquet de novia',
    scientificName: 'Plumeria rubra L',
    status: 'AVAILABLE',
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/05/10/00/plant-8234767_1280.jpg'
  },
  {
    plantId: 18,
    commonName: 'Brachichito',
    scientificName: 'Brachychiton populneus',
    status: 'AVAILABLE',
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/05/10/00/plant-8234767_1280.jpg'
  },
  {
    plantId: 19,
    commonName: 'Bromelia',
    scientificName: 'Bromelia adams',
    status: 'AVAILABLE',
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/05/10/00/plant-8234767_1280.jpg'
  }
];

export const CatalogPage = () => {
  const { ref, inView } = useInView();

  const { data, status, error, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } = useInfiniteQuery({
    queryKey: ['cards'],
    queryFn: fetchPlantCards,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextNumberPage
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  console.log(data);

  return (
    <div className='w-full flex justify-center'>
      {status === 'pending' && <Loader />}
      {status === 'error' && (<p>{error.message}</p>)}
      {status === 'success' && (
        <div className='flex justify-evenly gap-5 p-2'>
          <Filter />
          <div className='w-full flex flex-col gap-2'>
            <div className='flex-1 flex flex-wrap justify-evenly gap-10'>
              {data.pages.map(({ page }) => page.content.map(card =>
                <Card
                  key={card.id}
                  plantId={card.id}
                  commonName={card.commonName}
                  scientificName={card.scientificName}
                  status={card.status}
                  imageUrl='https://cdn.pixabay.com/photo/2023/09/05/10/00/plant-8234767_1280.jpg'
                />
              ))}
            </div>
            <div className='flex justify-center bg-blue-300'>
              <button
                className='bg-pink-200 w-fit font-medium text-base p-2'
                ref={ref}
                onClick={() => fetchNextPage()}
                disabled={!hasNextPage || isFetchingNextPage}
              >
                {isFetchingNextPage
                  ? <Loader />
                  : hasNextPage
                    ? 'Load Newer'
                    : 'No hay mas plantas para mostrar, vuelva mas tarde.'}
              </button>
            </div>

            <div>
              {isFetching && !isFetchingNextPage ? 'Background Updating...' : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

type TodoType = {
  id: number;
  title: string;
}

interface TodoCardProps extends React.HTMLAttributes<HTMLParagraphElement> {
  todo: TodoType;
};

const TodoCard: FC<TodoCardProps> = ({ todo, ...props }) => {
  return (
    <p className='' key={todo.id} {...props}>
      {todo.title}
    </p>
  );
}
