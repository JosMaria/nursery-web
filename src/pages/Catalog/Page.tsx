import axios from 'axios';
import React, { FC, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { CLASSIFICATIONS, STATES } from '@nursery/constants/commons';
import { StatusType } from '@nursery/types/commons';
import { traduceClassification, traduceStatus } from '@nursery/utils';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Card } from './components/Card';
import { Filter } from './components';

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
    queryKey: ['todos'],
    queryFn: fetchTodos,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextId
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  if (status === 'pending') return <p>Loading...</p>
  if (status === 'error') return <p>Error: {error.message}</p>

  console.log(data);

  const content = data.pages.map(({ data: todos }) => todos.map(todo => <TodoCard key={todo.id} todo={todo} />))

  
  return (
    <div className='flex justify-evenly gap-5 p-2'>
      <Filter />
      <div className=' flex-1 flex flex-wrap justify-evenly gap-10'>
        {CARDS.map(card => (
          <Card
            key={card.plantId}
            plantId={card.plantId}
            commonName={card.commonName}
            status={card.status}
            scientificName={card.scientificName}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>

      {/* <div className='flex flex-col'>
        {content}
        <div>
          <button
            ref={ref}
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage
              ? 'Loading more...'
              : hasNextPage
                ? 'Load Newer'
                : 'Nothing more to load'}
          </button>
        </div>
        <div>
          {isFetching && !isFetchingNextPage ? 'Background Updating...' : null}
        </div>
      </div> */}
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
