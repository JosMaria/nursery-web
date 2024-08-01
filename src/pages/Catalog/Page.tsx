import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { useInfiniteQuery } from '@tanstack/react-query';

const fetchTodos = async ({ pageParam = 1 }) => {
  const response = await axios.get<TodoType[]>(`https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=10`);
  const totalCount = parseInt(response.headers['x-total-count'], 10);
  const hasNextPage = pageParam * 10 < totalCount;

  return {
    data: response.data,
    nextId: hasNextPage ? pageParam + 1 : undefined,
  };
}

export const CatalogPage = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

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
    <div>
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
